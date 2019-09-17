---
title: "React Component Factory"
cover: "/blog/images/blog-cover.jpg"
author: "jake"
date: "2019-09-17"
category: "tech"
tags:
  - reactjs
  - javascript
---

## The Problem

For most of my projects I use a component library, with most of my projects are 
built on top of Material UI.  It's a great library that handles the things that
I don't want - or need - to solve so I can focus on functionality in my app.  It's
well documented and if I have an idea on how I want something to work, Material UI
usually has a decent looking solution.

Ok... enough praise of this library, one thing that absolutely drives me crazy
about this library and every other component library I've used is how much
boilerplate code is needed for the simplest of components.

Let's take a simple username input

```javascript
const Form = () => {
    const [username, setUsername] = useState('')
    
    const handleUsernameChange = event => {
        setUsername(event.target.value)
    }
    
    return (
        <TextField
            onChange={handleUsernameChange}
            value={username}
        />
    )
}
```

That's just to have a simple input take in some data.  If you have a form with
40 inputs, you can see how quickly this can get out of hand (yes, I know there
are form tools and other tricks for this, bear with me here).

## Factory Pattern

A pattern that is used in other languages frequently is the factory pattern.  Typically,
this pattern is used in OO programming where a class creates objects without specifying
exactly the exact class that will come out at the end.  Think a toy factory that
produces multiple types of toys, so when you ask for a kind of toy it gives you one
that fits what you're asking for without specifying it exactly beforehand.

## Why do I care about this?

When hooks came out this year and I started converting my classes to hooks, I started
noticing that my state was constantly getting lifted out of the components 
and into the custom hooks I was creating.  I was also copy/pasting inputs, dropdowns,
pickers, etc... all over the place.

There had to be a way to get my input component logic _out_ of my forms.

## Components Are Functions

A component is just a function, a function can be returned from another function,
and react hooks can return an array of pretty much anything - why not have a 
hook that encapsulates my component state logic and just exposes the component,
getter, and setter.

## The Hook

```javascript
const useTextFieldComponent = initialInput => {
  const theme = useTheme()
  const [field, setField] = useState(initialInput ? initialInput : '')

  const handleTextChange = event => {
    setField(event.target.value)
  }

  const CustomTextField = useCallback(
    props => {
      return (
        <TextField
          onChange={handleTextChange}
          {...props}
        />
      )
    },
    [theme]
  )

  return [CustomTextField, field, setField]
}

const Form = () => {
    const [Username, username, setUsername] = useTextFieldComponent()
    
    //in here I can use username or setUsername to get/set the internal state
    //of the component without needing all of the internals
    
    return (
        <Username />
    )
}
```

## But.... why?

Ok, ok... why is this pattern useful?  If you have a single text field this pattern
probably isn't going to be best for use, but what if you have an application with 100
or 1,000 different inputs across dozens or hundreds of forms and components?  With 
this pattern you can:
 
* Easily have common styling for these components since they are generated from the same source
* Have one place that tracks every input's internal state, when needed
* onChange can be overridden for any component if the form needs it
* Can override any of the components properties and stylings if needed
* Pseudo two-way binding, since you have direct access to the child internal functions returned from the hook
* Breaking changes in the underlying component library only impacts a single hook

## Simple Form

Below is an example of a form with multiple inputs.  The only thing you now
have to worry about is the layout and when to submit the values.  The form doesn't
need to track the state of the child components and adding a new field is a simple
as adding the hook and then placing the component where you see fit.

```javascript
const Form = () => {
    const [Username, username, setUsername] = useTextFieldComponent()
    const [Password, password, setPassword] = useTextFieldComponent()
    const [Name, name, setName] = useTextFieldComponent()
    const [Street, street, setStreet] = useTextFieldComponent()
    const [State, state, setState] = useTextFieldComponent()
    const [Zip, zip, setZip] = useTextFieldComponent()
    
    return (
        <div>
            <Username />
            <Password />
            <Name />
            <Street />
            <State />
            <Zip />
        </div>
    )
}
```
