---
title: Implementing an Audio Waveform with React Hooks and Wavesurfer.js
date: '2020-10-17'
description: A tutorial for building a waveform to play an mp3 file
---

## What are we building?

![waveform](https://github.com/andreidobrinski/react-wavesurfer-demo/raw/master/screenshot.png)

A React component that takes an audio clip and displays it in a waveform, with simple play/pause functionality. Here's the [demo](https://andreidobrinski.github.io/react-wavesurfer-demo/) and the completed [source code](https://github.com/andreidobrinski/react-wavesurfer-demo).

## How are we building it?

We'll use:

- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) for boilerplate
- [Wavesurfer.js](https://wavesurfer-js.org/docs/) for the waveform
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for the implementation

This article assumes that you're familiar with React, but feel free to check out the respective docs linked above for a refresher.

We'll add an [mp3 file](https://github.com/andreidobrinski/react-wavesurfer-demo/blob/master/src/piano.mp3) to the project as the audio source to pass into our waveform component.

## Installing dependencies

In the command line, `cd` into a directory to store the project. Then, let's start the boilerplate with:

```bash
npx create-react-app react-hooks-wavesurfer
```

Once it's ready, `cd` into the created project and install the dependencies with either `npm install --save` or

```bash
yarn add wavesurfer.js styled-components react-icons
```

We'll use React Icons as an easy way to get the play/pause icons into the project. Feel free to substitute `react-icons` or `styled-components` for your preferred styles if you wish.

## Cleaning Up Boilerplate

In the `src` folder, we can delete `App.css` and `logo.svg`. Then in `App.js`, we can get rid of everything and replace it with:

```jsx
import React from 'react'

const App = () => (
  <>
    <h1>WaveSurfer Demo</h1>
  </>
)

export default App
```

## Loading an audio clip with WaveSurfer

While still in the `App.js`, we'll import our audio clip and Waveform component and pass in the audio clip as a prop:

```jsx
import React from 'react'
import Waveform from './waveform'
import pianoClip from './piano.mp3'

const App = () => (
  <>
    <h1>WaveSurfer Demo</h1>
    <Waveform audio={pianoClip} />
  </>
)

export default App
```

Now let's create the Waveform component. In a new file, `Waveform.js`, let's add:

```jsx
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'

const Waveform = ({ audio }) => {
  const containerRef = useRef()

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
    })
    waveSurfer.load(audio)

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return <div ref={containerRef} />
}

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default Waveform
```

We instantiated `waveSurfer` in the `useEffect` and assigned it to a React ref. It's also possible use a CSS id instead of a ref, but keep in mind that we'd need a unique id for each instance of WaveSurfer in the document.

We're also cleaning up the instance with `waveSurfer.destroy()` in the return of the `useEffect` and passing `[audio]` as the second argument to make sure the effect only runs if the `audio` prop changes.

## Adding pause and play functionality

The waveform is there, but we can't interact with it yet. Let's change that. An implementation with a class component would normally call a function `this.waveSurfer`, but since we're using a function component, let's store the instance of `waveSurfer` in a ref to access across renders later:

```jsx{7,14-16}
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'

const Waveform = ({ audio }) => {
  const containerRef = useRef()
  const waveSurferRef = useRef()

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
    })
    waveSurfer.load(audio)
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer
    })

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return <div ref={containerRef} />
}

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default Waveform
```

Notice that you can `{console.log(waveSurferRef.current)}` in the `return` of the component and see the object that Wavesurfer.js creates for us. This is what we'll call on for play and pause inside of a `<button>`. We'll use Wavesurfer's handy `playPause()` which can both pause and play accordingly.

```jsx{25-27}
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'

const Waveform = ({ audio }) => {
  const containerRef = useRef()
  const waveSurferRef = useRef()

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: waveSurferRef.current,
    })
    waveSurfer.load(audio)
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer
    })

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return (
    <>
      <button onClick={() => waveSurferRef.current.playPause()} type="button">
        play/pause
      </button>
      <div ref={containerRef} />
    </>
  )
}

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default Waveform
```

The play/pause button doesn't yet convey the current or intended state of the audio file to the user. We can manage this with React's `useState` by toggling state in the button's `onClick` and reading the state to determine what the button's UI should say.

```jsx{1,8,30,31}
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'

const Waveform = ({ audio }) => {
  const containerRef = useRef()
  const waveSurferRef = useRef({
    isPlaying: () => false,
  })
  const [isPlaying, toggleIsPlaying] = useState(false)

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
    })
    waveSurfer.load(audio)
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer
    })

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return (
    <>
      <button
        onClick={() => {
          waveSurferRef.current.playPause()
          toggleIsPlaying(waveSurferRef.current.isPlaying())
        }}
        type="button"
      >
        {isPlaying ? 'pause' : 'play'}
      </button>
      <div ref={containerRef.current} />
    </>
  )
}

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default Waveform
```

There is a downside with this implementation: we must duplicate Wavesurfer's own `isPlaying()` state into React with `toggleIsPlaying(waveSurferRef.current.isPlaying())`, creating potentially two sources of truth with React's state and Wavesurfer's state. This approach lets us rely on React's diffing and rerendering to update the DOM outside of the Wavesurfer instance, in the case of the play/pause button.

I have yet to discover an easier/more performant implementation that can rely on Wavesurfer as the single source of truth and lift any necessary state up. If you know of one, I'd love to see it!

Note that we added an initial value of `isPlaying: () => false` to `waveSurferRef`. This is a safety net in case the button's `onClick` gets called with `waveSurferRef.current.isPlaying()` before `isPlaying()` is defined.

## Styling

That's it for the implementation - time to style! Let's begin with adding some options into `WaveSurfer.create` to get the waveform looking better.

```jsx{3-6}
const waveSurfer = WaveSurfer.create({
  container: containerRef.current,
  responsive: true,
  cursorWidth: 0,
  barWidth: 2,
  barHeight: 10,
})
```

Going over this code from top to bottom:

- `responsive` allows the waveform to readjust its size if the viewport changes
- `cursorWidth: 0` makes the cursor disappear
- Since the audio file in this example doesn't have much dynamic range, setting `barWidth: 2` and `barHeight: 10` helps to emphasize the dynamics a little better.

Check out the WaveSurfer [docs](https://wavesurfer-js.org/docs/options.html) for the full list of available options.

Next, let's use the `react-icons` package to add a play and pause button. At the top of the file:

```jsx
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
```

Then inside of the `button`, we'll replace the 'play' and 'pause' string with:

```jsx
{
  isPlaying ? <FaPauseCircle size="3em" /> : <FaPlayCircle size="3em" />
}
```

Last up, styling the component itself with Styled Components and CSS Grid:

```jsx
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
  }
`
```

That's it! If you want to see a demo of this implementation, check it out [here](https://andreidobrinski.github.io/react-wavesurfer-demo/) or have a look at the [source code](https://github.com/andreidobrinski/react-wavesurfer-demo).
