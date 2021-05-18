---
title: Composition with Compound React Components and Dot Notation Exports
date: '2021-05-18'
description: Co-locating React components and using them together with dot notation
---

## Intended Audience

Beginner and intermediate React developers looking to learn more about the dot notation export pattern with compound React components.

## Example

We'll take a look at what a modal component might look like with the dot notation export pattern. The demo uses React with Styled Components.

Let's jump right into the code.

```jsx
// Modal.js
import styled from 'styled-components'

export const Button = styled.button.attrs(() => ({ type: 'button' }))`
  // button styles
`

export const Heading = styled.h2`
  // heading styles
`

export const Body = styled.p`
  // body styles
`

export const Wrap = styled.div`
  // outer modal styles
`

Modal.Heading = Heading;
Modal.Body = Body;
Modal.Button = Button;

export function Modal({ isVisible, children }) {
  return (
    <Wrap isVisible={isVisible}>
      {children}
    </Wrap>
  )
}

---

// ParentComponent.js
import { useState } from 'react'
import { Modal } from '../components/Modal'

export function ParentComponent() {
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <Modal.Header>Hello, I am a Modal</Modal.Header>
        <Modal.Body>I can show helpful information</Modal.Body>
        <Modal.Button onClick={() => setModalVisible(false)}>
          Hide Modal
        </Modal.Button>
      </Modal>
      <button
        onClick={() => setModalVisible(true)}
        type="button"
      >
        Show Modal
      </button>
    </>
  )
}
```

Let's now go over what's happening in this example.

## Breakdown

The `Modal` component and some styled components are co-located in `Modal.js`, all of which are being exported. We then use `Modal.Heading = Heading` for example to allow for `Heading` to be used with the `Modal` export. The styled components can imported individually if need be.

The parent component imports only `Modal`. The styled components may be used inside the `Modal`, depending on what's needed in the implementation, and they can be called with the dot notation pattern.

There are a few benefits to using this kind of pattern.

## Benefits

This pattern is useful when multiple components are often composed and used together. This can be useful because:

- Fewer import statements are needed to implement `Modal` and its children

`import { Modal } from '../components/Modal` instead of `import { Modal, Heading, Button, Body } from '../components/Modal'`

- Co-locating `Modal` with the components it's commonly used with

Keeping the `Modal` and all of its potential children in the same file for each on maintenance.

- The JSX communicates that `Modal` and its children are related

For example, we can more easily infer that these components are related

```jsx
<Modal>
  <Modal.Heading>Heading</Modal.Heading>
  <Modal.Body>Body</Modal.Body>
  <Modal.Button>Button</Modal.Button>
</Modal>
```

than these components

```jsx
<Modal>
  <Heading>Heading</Heading>
  <Body>Body</Body>
  <Button>Button</Button>
</Modal>
```

React's `children` prop makes for component composition and compound components have been [discussed before](https://kentcdodds.com/blog/advanced-react-component-patterns).

Dot notation is something you may be familiar with, especially from using open source libraries. React Navigation's [Stack.Screen](https://reactnavigation.org/docs/screen) comes to mind as well as React's own API [import pattern](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) of

```jsx
import * as React from 'react'

// React.useState, React.createContext, React.lazy etc.
```

## Alternatives

Without changing any of the code, we can just as easily import and use the components in `Modal.js` separately, without dot notation.

```jsx{3,11,12,13}
// ParentComponent.js
import { useState } from 'react'
import { Modal, Heading, Button, Body } from '../components/Modal'

export function ParentComponent() {
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <Header>Hello, I am a Modal</Header>
        <Body>I can show helpful information</Body>
        <Button onClick={() => setModalVisible(false)}>Hide Modal</Button>
      </Modal>
      <button onClick={() => setModalVisible(true)} type="button">
        Show Modal
      </button>
    </>
  )
}
```

We can also choose not to co-locate the rest of the components with `Modal` and import them from elsewhere. This might be a good option if the `Button` needs to be used somewhere other than in the `Modal`. This option isn't mutually exclusive with the dot notation export, as `Modal.js` can still import the component it needs and re-export it to use with dot notation.

```jsx
// Modal.js
import { Button } from './Button'

Modal.Button = Button

export function Modal({ children }) {
  return (
    <div>
      Modal
      {children}
    </div>
  )
}
```

The component that imports `Modal` could then call `Modal.Button` just like in the above example.
