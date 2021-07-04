---
title: Using React Keys to Fix a Render Bug
date: '2021-07-04'
description: Keys can help ensure that a component rerenders when needed
---

## Intended Audience

Intermediate React developers interested in a case study about how React keys can help resolve issues with renders.

## Summary

I ran into an issue while working on a project with React and Apollo Client. A parent component fetched data with Apollo and passed multiple props to a child. The child component would desync the props when it rendered data previously cached by Apollo. Adding a key prop to the child component let Reach know when it should rerender the child component, syncing the props and fixing the issue.

## The Code and the Bug

Let's start by going over what the code looks like to add a bit of context to the issue. The parent component, `MonsterDetail` fetches data from a GraphQL endpoint with Apollo and passes some of that data as props to `MonsterHp`. Here's what the components look like, pared down to the just the relevant parts.

```jsx
// MonsterDetail.tsx

interface MonsterDetailProps {
  monster: string | boolean;
}

function MonsterDetail({ monster }: MonsterDetailProps) {
  const { data } = useQuery(MONSTER_DETAIL_QUERY, {
    skip: !monster,
    variables: { monster },
  })

  const { name, hit_points } = data.monster

  return (
    <>
      <MonsterHp initialHp={hit_points} name={name} />
      {/* the rest of the MonsterDetail return */}
    </>
  )
}

// MonsterHp.tsx

interface MonsterHpProps {
  initialHp: string;
  name: string;
}

function MonsterHp({ initialHp, name }: MonsterHpProps) {
  const [hp, setHp] = useState(Number(initialHp))

  return (
    <>
      <p>{name}</p>
      <p>
        {hp} {hp !== Number(initialHp) && <span>({initialHp})</span>}
      </p>
      {/*
        the rest of the MonsterHp return,
        including setHp to change the hp from the initial
      */}
    </p>
  )
}
```

The `MonsterHp` component takes in `name` and `initialHp` as props. It renders the `name` and passes `initialHp` as the initial state for `hp`. The component then offers a UI to change the current hp away from the `initialHp`, and shows the initial hp in brackets if hp is changed.

So where's the bug? `MonsterDetail` gets passed a `monster` prop, which can change and cause Apollo to fetch an updated query. The new monster's `name` and `initialHp` will get passed to `MonsterHp`, but `MonsterHp` doesn't neccesarily rerender. The bug is that the `hp` differs from `initialHp` when they should be the same. Here's a gif of this in action.

![wild shape render bug](./bug.gif)

This is not a bug with React. This is a scenario where we may expect the child component to be rerendered when it's props change, but that isn't necessarily the case, since we are not updating `MonsterDetail`'s internal state.

## The Fix

What we need to fix this issue is a way of saying to React, "please rerender the child component when _this_ certain value changes". This is where React keys come into play.

A common use case of keys is to assign an identity to elements within a list in a `.map`, to help React know which items have been [changed, added or removed](https://reactjs.org/docs/lists-and-keys). We can use this same identity to tell React that a component has changed and needs to be rerendered, in this case by adding `key={name}` to `MonsterHp`. When the `name` changes, `MonsterHp` will rerender.

```jsx{17}
// MonsterDetail.tsx

interface MonsterDetailProps {
  monster: string | boolean;
}

function MonsterDetail({ monster }: MonsterDetailProps) {
  const { data } = useQuery(MONSTER_DETAIL_QUERY, {
    skip: !monster,
    variables: { monster },
  })

  const { name, hit_points } = data.monster

  return (
    <>
      <MonsterHp initialHp={hit_points} name={name} key={name} />
      {/* the rest of the MonsterDetail return */}
    </>
  )
}
```

Here's what the interaction looks like with a key prop. Notice how the issue is now resolved.

![wild shape render bug fixed](./fix.gif)

## Conclusion

Next time you find yourself facing an issue where you want to ensure React rerenders your component, keep React keys in mind and make sure to pass a unique value!

P.S. The app I built when I encountered this issue is a Wild Shape Tracker for a Dungeons and Dragons Druid character. Feel free to check out the [app](https://arcaneeye.com/apps/wildshape-tracker/) or the [write-up](https://andreidobrinski.com/druid-wild-shape) if you'd like!
