---
title: React Component Composition with Dot Notation Exports
date: '2021-05-18'
description: Co-locating React components and using them together with dot notation
---

## Intended Audience

Beginner and intermediate React developers looking to learn more about the dot notation export pattern with React components.

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

The `Modal` component and some styled components are co-located and exported from `Modal.js`. We then use `Modal.Heading = Heading` pattern, for example, to allow for `Heading` to be used with the `Modal` export.

The parent component imports only `Modal`. The styled components may be used inside the `Modal`, depending on what's needed in the implementation, and they can be called with the dot notation pattern.

There are a few benefits to using this kind of pattern.

## Benefits

This pattern is useful when multiple components are often composed and used together. This can be useful because:

- Inversion of control: the user, and not the `Modal`, is not responsible for use cases

Let's say we were to build a version of the modal component that accepts props in place of children. Imagine it looks something like this.

```jsx
// Modal.js

export function Modal({ isVisible, header, body, buttonText, buttonOnClick }) {
  return (
    <Wrap isVisible={isVisible}>
      {header && <Header>{header}</Header>}
      {body && <Body>{body}</Body>}
      {button && <Button onClick={buttonOnClick}>{buttonText}</Button>}
    </Wrap>
  )
}

// ParentComponent.js
import { useState } from 'react'
import { Modal } from './Modal'

export function ParentComponent() {
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        header="Hello, I am a Modal"
        body="I am receiving this data as props"
        buttonText="Ok"
        buttonOnClick={() => console.log('button clicked')}
      />
    </>
  )
```

This version of the modal is resposible for handling all the use cases from the props it gets, as well as the conditional rendering of components in cases where props are missing.

Let's say that the Modal's use cases get extended: a new implementation calls for an `<a>` tag instead of a button and an icon above the header text. The prop-based modal would need to accept these new props and add logic to handle all the use cases.

The composed version of the modal can simply expose a `<Modal.Icon>` and `<Modal.Link>` and let the user of the modal build out the use case, and the `Modal` component will render its children. The `Modal` inverts the control by letting the the user handle the use case, instead of handling it internally.

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

- TypeScript can help autocomplete the components

If you start typing `<Modal.`, TypeScript will show a list of the components you've assigned to `Modal`. The autocomplete helps with productivity (typing components faster) and discovery (showing which components are available).

React's `children` prop makes for component composition and dot notation is something you may be familiar with, especially from using open source libraries. React Navigation's [Stack.Screen](https://reactnavigation.org/docs/screen) comes to mind as well as React's own API [import pattern](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) of

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
