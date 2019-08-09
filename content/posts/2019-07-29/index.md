---
title: "Cancel In-Flight Axios Calls in Hooks"
cover: "/blog/images/blog-cover.jpg"
author: "jake"
date: "2019-08-09"
category: "tech"
tags:
  - reactjs
  - javascript
---

## The Problem

Today I ran into an issue where I had a couple of buttons on screen to move the date
up or down a day, which would refresh the screen with all the data for that day. The
functionality worked great, but at some point the page was making upwards of 10 REST
calls on each refresh. This wouldn't have been an issue if they were truly being done
asynchronously, the renders would just ignore those returns, but the browser was taking
these calls and adding them to a queue. Again, this wouldn't have been an issue, except
that one could hit the previous day button 5, 10, or 100 times - queue up hundreds or even
thousands of outbound calls, and then the UI would just patiently wait as the data stream
from the calls came in.

This was unacceptable for my UI responsiveness, so I looked into how to cancel in-flight calls.

## State of the State

In my current project, all of my Rest calls go through a single hook called `useRest`

```javascript
export const useHygieiaRest = (path) => {
  const mounted = useIsMounted()
  const [response, setResponse] = useState(null)

  useEffect(() => {

    const isValidResponse = response => {
      return (mounted && response && response.data)
    }

    const getMetricData = async () => {
      const host = await config.getHost()
      const url = `${host}${path}`
      const response = await axios.get(url)
      if (isValidResponse(response)) {
        setResponse(resopnse.data)
      }
    }

    if (mounted) {
      getMetricData()
    }
  }, [path, mounted])

  return response
}
```

This very simple hook allows me to reduce the majority of the rest calls I 
need to make into a single line of code in the components that need the data.
The problem really comes into play when a single page is making calls to a 
slow API.  In my case, the searching I was doing was taking 2-8 seconds per call
(which I won't get into why, but I at first had to just deal with it).

## Multiple Renders in Succession

The big problem happened when a user clicked the previous or next day multiple times
in a row.  Every render would make a slow API call that would get queued up taking
anywhere from 30 seconds to 2 minutes to load data.  Nobody wants to wait around
for 2 minutes to see a dashboard.  It's not 1996.

## How to Cancel Previous Render's Axios Calls

The solution I came up with was to cancel the previous call when a new path
is given.  Axios has a way to do that with cancel tokens.  Below is the code
that handle cancelling.  I'll explain the sections after.

```javascript
export const useHygieiaRest = (path) => {
  const mounted = useIsMounted()
  const [response, setResponse] = useState(null)
  const CancelToken = axios.CancelToken
  const cancelRef = useRef(null)

  useEffect(() => {

    const isValidResponse = response => {
      return (mounted && response && response.data)
    }

    const getMetricData = async () => {
      const cancel = cancelRef.current
      if (cancel) {
        cancel()
      }
        
      const host = await config.getHost()
      const url = `${host}${path}`
      const response = await axios
        .get(url, {
          cancelToken: new CancelToken(function executor(c) {
            cancelRef.current = c
          }),
        })
        .catch(error => {
          if (axios.isCancel(error)) {
            //this is now expected
          }
        })
      if (isValidResponse(response)) {
        setResponse(resopnse.data)
      }
    }

    if (mounted) {
      getMetricData()
    }
  }, [path, mounted, CancelToken])

  return response
}
```

### Store the CancelToken between Renders

```javascript
const CancelToken = axios.CancelToken
const cancelRef = useRef(null)
```

In order to have access to the cancel token between renders we need to store it
in a ref.  The above code sets up the ref so the hook can access values set
during a previous render.



### Set the CancelToken of the Current API Call

```javascript
const response = await axios
  .get(url, {
    cancelToken: new CancelToken(function executor(c) {
      cancelRef.current = c
    }),
  })
```

In the above, axios takes in an options object with the cancelToken.  The
CancelToken object can take an executor function as a parameter that has 
access to the token `c`.  We take that and set it as the current token.

### Cancel the Previous Call
```javascript
const cancel = cancelRef.current
if (cancel) {
  cancel()
}
```

If there was a previous API call made the cancelRef.current will have a value,
so we grab it and it exists, run it as a function.  This function will
cancel the call tied to that CancelToken.

### Accept Cancellations
```javascript
.catch(error => {
  if (axios.isCancel(error)) {
    //this is now expected
  }
})
```

Now if axios receives a cancellation call, it will swallow it and not log it 
as a network error.

## Done!

That's it!  Have a better solution or have feedback?  Leave a comment below!