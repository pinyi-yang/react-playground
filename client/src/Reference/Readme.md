# Refs and the DOM
[react doc](https://reactjs.org/docs/refs-and-the-dom.html)

* Access DOM node or React elements created in the render method.
* Good use cases:
    * Managing focus, text selection or media playback
    * Triggering Imperative animations
    * Integrating with thrid-party DOM libaries

## Usage
* Who can receive a ref
    * DOM element
    * class component
* Create Ref
    * class component: React.createRef()
    * FC: useRef(null)


## Callback Refs
```typescript
let nodeRef: HTMLElement | null = null; //null not ref here, or more precise type like HTMLInputElement
const setRefCallBack = (el: HTMLElement): void => {
    nodeRef = el;
}

// pass  setRefCallBack into child
```

## ForwardRef