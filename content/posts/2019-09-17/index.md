---
title: "React Hooks - Can't Set State On An Unmounted Component"
cover: "/blog/images/blog-cover.jpg"
author: "jake"
date: "2019-09-17"
category: "tech"
tags:
  - reactjs
  - javascript
---

## The Problem

How many times have you seen this?  Dozens?  Hundreds?  Thousands?  In my opinion
this is something that should be handled by the framework for how common one sees this,
but since that isn't possible the only way to handle this problem is to deal with it
in your application code.  The most common reason we see this is because of long
computations where the state is set at the end, or REST calls that are waiting for
a response.
<br/>
<br/>
If you're using components the solve is pretty easy.  All you need to do is have
a local component variable (not a state variable) that is set to true when constructed
and set it to false on unmount.  Something like...

```javascript
class Example extends Component {
    let mounted = true
    
    componentWillUnmount() {
        this.mounted = false
    }
    
    const randomFunction = (bar) => {
        if (this.mounted) {
            this.setState({foo: bar})
        }
    }
    
    render() {
        //render code
    }
}
```

The above will protect your setState from being called if the component is no
longer mounted.  You'll see code like this littered all over class components.  With
hooks, however we have some options.

## State of the State

With functional components you need to think about things a bit differently.  Functional
components only care about _this_ render, so if there are multiple renders we need to 
block we need to have something that can go across renders.  Obviously we don't want
to use `setState` since that is what we're trying to avoid, so we pull out the `useRef`
which can hold values across renders, but doesn't force a rerender like `setState`.
Sounds perfect.  This is what that looks like
```javascript
const Example = () => {
    const isMounted = useRef(true)
    const [foo, setFoo] = useState()
    
    useEffect(
      () => () => {
        isMounted.current = false
      },
      []
    )
    
    const randomFunction = bar => {
        if (isMounted.current) {
            setFoo(bar)
        }
    }
    
    return //render code
    
}
```

Using hooks we can extract this out of the component for reusability across our
project.

```javascript
const useIsMounted = () => {
  const isMounted = useRef(true)
  useEffect(
    () => () => {
      isMounted.current = false
    },
    []
  )
  return isMounted.current
}
const Example = () => {
    const isMounted = useIsMounted()
    const [foo, setFoo] = useState()
    
    const randomFunction = bar => {
        if (isMounted) {
            setFoo(bar)
        }
    }
    
    return //render code
    
}
```

## Functional Wrapper - ifMounted

Sweet!  Looks like a great solve, but we still have a problem where we have to 
wrap almost every `setState` in an if statement if we want to really protect
ourselves going forward, littering our otherwise clean code.
What if we could reduce this to a single function call that checks whether the 
component is mounted before calling `setState`

```javascript
const useIfMounted = () => {
    const isMounted = useRef(true)
    useEffect(
      () => () => {
        isMounted.current = false
      },[]
    )
  
    const ifMounted = useCallback(
      func => {
        if (isMounted.current && func) {
          func()
        } 
      },[]
    )
  
    return ifMounted
}
const Example = () => {
    const ifMounted = useIfMounted()
    const [foo, setFoo] = useState()
    
    const randomFunction = bar => {
        ifMounted(() => setFoo(bar))
    }
    
    return //render code
    
}
```

Now I can safely wrap any `setState` call in a single line with the ifMounted 
hook and never have to worry about setting state on an unmounted component 
ever again.

## Done!

That's it!  Have a better solution or have feedback?  Leave a comment below!