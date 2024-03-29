---
title: React Style Guide
date: '2020-06-23'
description: Patterns I follow to write consistent React code
---

This is a list of patterns that I follow when writing React code. It's intended to be a living document and is always subject to change and reconsideration.

## Hooks

### useState: Name the array destructure variables with the pattern `state` and `setState`.

**Why?**

- To know which function affects which variable, especially when multiple `useState`s exist.

**Do**

```js
const [name, setName] = useState('')
```

**Don't**

```js
const [firstName, setName] = useState('')
```

The exception to this rule is booleans, which follow a slightly different naming approach, outlined below.

### useState: Use `is` before a boolean state variable

**Why?**

- To identify a boolean type in the state variable
- Naming becomes `[isState, setState]`
- No need for "is" in the function name, since `setState` will always be called with a boolean

**Do**

```js
const [isSelected, setSelected] = useState(false)
```

**Don't**

```js
const [selected, setSelected] = useState(false)
// or
const [isSelected, setIsSelected] = useState(false)
```

### useState: Set a default state where possible

**Do**

```js
const [count, setCount] = useState(0)
```

**Don't**

```js
const [isSelected, setSelected] = useState()
// or when a default would be inaccurate if persisted
const [age, setAge] = useState(0)
```

### useState: Prefer functional `setState` when relying on current state

**Why?**

- React may batch multiple `setState` calls into a single update for [performance](https://www.freecodecamp.org/news/functional-setstate-is-the-future-of-react-374f30401b6b/)
- It may be [unsafe](https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates) to rely on current state values when updating state
- Pass a function into `setState` to get the current state

**Do**

```js
const [count, setCount] = useState(0);
// ...
<p>{count}</p>
<button onClick={() => setCount(prevCount => prevCount + 1)}>
  Increment
</button>
```

**Don't**

```js
const [count, setCount] = useState(0);
// ...
<p>{count}</p>
<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

### useEffect: Separate `useEffect`s based on dependency array

**Why?**

- To prevent unneccesary rerenders
- To group effects based on "what function(s) should run when the variable(s) in the array change"

**Do**

```js
useEffect(() => {
  runOnlyOnMount()
}, [])

useEffect(() => {
  runWhenCountChanges()
}, [count])
```

**Don't**

```js
useEffect(() => {
  runOnlyOnMount() // will rerun when count changes
  runWhenCountChanges()
}, [count])
```

### useEffect: Comment on effect's purpose

**Why?**

- To reduce the time it takes to understand what the effect does

**Do**

```js
// set adding state to false if a todo is selected
useEffect(() => {
  if (selectedTodo) {
    setAdding(false)
  }
}, [selectedTodo])
```

**Don't**

```js
useEffect(() => {
  if (selectedTodo) {
    setAdding(false)
  }
}, [selectedTodo])
```

While the above example is simplified, the helpfulness of a comment grows proportionally to the complexity of the effect.

### useReducer: Prefer this over `useState` when pieces of state need to know about one another

**Why?**

- To keep states that need to know about each other together

**Do**

```js
const initialState = {
  length: 0,
  width: 0,
  area: 0,
}

const reducer = (state, action) => {
  switch (action.dimension) {
    case 'length':
      return {
        ...state,
        length: action.value,
        area: action.value * state.width,
      }
    case 'width':
      return {
        ...state,
        width: action.value,
        area: action.value * state.length,
      }
    default:
      throw new Error('Invalid action in reducer')
  }
}

// implementation
const [state, dispatch] = useReducer(reducer, initialState)

<button onClick={() => dispatch({ dimension: 'length', value: state.length + 1 })}>
  Increment Length
</button>
```

The above example shows that `area` needs to update when `length` or `width` change. Though it is a bit contrived and could be refactored for simplicity.

**Don't**

```js
const [length, setLength] = useState(0)
const [width, setWidth] = useState(0)
const [area, setArea] = useState(0)

const updateDimension = dimension => {
  // update length or width
  // update area with updated length/width
}
```

## Context

### Export custom `useContext` hook

**Why?**

- To reduce imports in the context implementation

**Do**

```js
import React, { createContext, useContext } from 'react'

const TodosContext = createContext({})

export const TodosContextProvider = ({ children }) => {
  // context logic
}

export const useTodosContext = () => {
  const context = useContext(TodosContext)
  if (context === undefined) {
    throw new Error(
      'useTodosContext must be used within the TodosContextProvider'
    )
  }
  return context
}

// use case
import { useTodosContext } from '.'
//...
const { todos, setTodos } = useTodosContext()
```

**Don't**

```js
import React, { createContext, useContext } from 'react'

export const TodosContext = createContext({})

export const TodosContextProvider = ({ children }) => {
  // context logic
}

// use case - two imports
import React, { useContext } from 'react'
import { TodosContext } from '.'
// ...
const { todos, setTodos } = useContext(TodosContext)
```

Shout out to Kent C. Dodds for this [pattern](https://kentcdodds.com/blog/how-to-use-react-context-effectively#the-custom-consumer-hook).

### `useMemo` return value and `useCallback` functions in context

**Why**

- To avoid unneccesary rerenders of context and its children

**Do**

```js
export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const toggleTodo = useCallback(
    id => {
      // toggle the todo, sorting, side effects, etc.
      // setTodos here
      setTodos(newTodos)
    },
    [todos]
  )
  // same thing with addTodo and deleteTodo functions

  const value = useMemo(() => {
    return {
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
    }
  }, [todos, addTodo, toggleTodo, deleteTodo])

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
```

## TypeScript

### Prefer `interface Props` to type props on the main exported component

**Why?**

- To differentiate the main component being exported from co-located components

**Do**

```js
// Modal.tsx
import styled from 'styled-components'

interface ButtonProps {
  // button props
}

const Button =
  styled.button <
  ButtonProps >
  `
  // button styles
`

interface Props {
  // Modal props
  isVisible: boolean;
}

export function Modal({ isVisible }: Props) {
  return (
    <>
      {/* Modal component JSX */}
      <Button />
    </>
  )
}
```

**Don't**

```js
// Modal.tsx
import styled from 'styled-components'

interface ButtonProps {
  // button props
}

const Button =
  styled.button <
  ButtonProps >
  `
  // button styles
`

interface ModalProps {
  // Modal props
  isVisible: boolean;
}

export function Modal({ isVisible }: ModalProps) {
  return (
    <>
      {/* Modal component JSX */}
      <Button />
    </>
  )
}
```

### Prefer to type arrays over array method callback arguments

**Why?**

- TypeScript will be more useful if it knows the array type
- If TS says that an array method callback must be typed, it's a [sign that the array is not typed](https://www.briefs.fm/3-minutes-with-kent/151) and TS infers it an `any`

**Do**

```js
const fruits: Array<String> = ['apple', 'banana', 'watermelon', 'tomato']

const fruitSalad = fruits.filter(fruit => fruit !== 'tomato')
```

**Don't**

```js
const fruits = ['apple', 'banana', 'watermelon', 'tomato']

const fruitSalad = fruits.filter((fruit: string) => fruit !== 'tomato')
```

## Styled Components

### Co-locate Styled Components with React component and abstract as needed

**Why?**

- To indicate which directories might be affected by a style change

Start with the Styled Component in the same file as the React component. Move the styles up to a `styled.js` file only as high up in the directory as needed.

## Conditionally Rendering Components

### Guard before render

**Why?**

- Readability - less mental context to hold onto while reading the component
- Component flow becomes:
  1. Declaration, props accepted
  2. Exception/error handling
  3. Business logic

**Do**

```js
const UserAvatar = ({ user }) => {
  if (!user) return false
  // return the component
}
```

**Don't**

```js
const UserAvatar = ({ user }) => {
  if (user) return // the component
  if (!user) return false
}
// or
const UserAvatar = ({ user }) => {
  if (user) return {
    // the component
  } else {
    return false
  }
}
```

It's also ok to have the conditional logic guard against the component call, where applicable.

**Do**

```js
const UserProfile = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      {user && <UserAvatar user={user} />}
      <RenderAnyway />
    </>
  )
}
```

## Import/Export

### Destructure imports when possible

**Why?**

- Cleaner implementation code
- See all imported functions at a glance

**Example**

**Do**

```js
import React, { useState } from 'react'
// ...
const [state, setState] = useState()
```

**Don't**

```js
import React from 'react'
// ...
const [state, setState] = React.useState()
```

### Prefer named exports

**Why?**

- Easier to trace usage of components with string search when debugging

**Example**

**Do**

```js
const Component = () => {
  // component
}

export { Component }
```

**Don't**

```js
const Component = () => {
  // component
}

export default Component
```

Named exports ensure that all declared and imported components have the same spelling. Exporting a default component allows a typo or a differently-named component to be imported.

## React Router

### If `<Link>` needs an `onClick`, use `history.push`

**Why?**

- Issues with `<Link onClick={} />` in Firefox

**Example**

```js
<button
  onClick={() => {
    history.push('/path')
    handleSideEffect()
  }}
  as="a"
>
  Navigate
</button>
```

Remember to add `as="a"` as a prop so that screen readers know that the button is a link.

## Conclusion

That's it for now. If you have any thoughts or comments you'd like to share, I'd love to hear them! Let me know via [Twitter](https://twitter.com/andreidobrinski) or [GitHub](https://github.com/andreidobrinski/blog/blob/master/content/blog/react-style-guide/index.md).
