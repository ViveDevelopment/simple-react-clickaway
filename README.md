# Simple React Clickaway Hook

Simple react `useClickAway` hook, which listens for clicks outside the element.

## Installation

```
npm i simple-react-clickaway
```

Import hook

```js
import {useClickAway} from 'simple-react-clickaway';
```

And use it like:

```js
const {disable, enable} = useClickAway(ref, onClickAway);
```
