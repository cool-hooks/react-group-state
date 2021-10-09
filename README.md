# [react-group-state](https://github.com/cool-hooks/react-group-state)

[![NPM version](https://img.shields.io/npm/v/react-group-state?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![NPM downloads](https://img.shields.io/npm/dm/react-group-state?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![NPM license](https://img.shields.io/npm/l/react-group-state?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-group-state?style=flat-square)](https://codecov.io/gh/cool-hooks/react-group-state)
[![Travis](https://img.shields.io/travis/com/cool-hooks/react-group-state/main?style=flat-square)](https://app.travis-ci.com/github/cool-hooks/react-group-state)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-group-state?style=flat-square)](https://bundlephobia.com/result?p=react-group-state)

## About

Use the state management style from React class components in function components

### Idea

[**setState**](https://reactjs.org/docs/react-component.html#setstate) in class components in React

### Demo

**[Playground – play with the library in CodeSandbox](https://codesandbox.io/s/react-group-state-q4iss)**

### Alternatives

- [react-use-state-group](https://www.npmjs.com/package/react-use-state-group/) by [chenyuwang](https://www.npmjs.com/~chenyuwang/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-group-state
```

Or Yarn:

```sh
$ yarn add react-group-state
```

## Getting Started

• Import a hook in a React application file:

```js
import { useGroupState } from 'react-group-state';
```

#### Params

| Name      | Type   | Description   |
| --------- | ------ | ------------- |
| **state** | object | Initial state |

<!-- TODO add options -->

#### Returned Values

| Name         | Type                                                  | Description                                                                                                                                                                                        |
| ------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **state**    | object                                                | State                                                                                                                                                                                              |
| **setState** | (object or (prevState) => object, (newState) => void) | A function to set a new state, where the **first parameter** is a new object or a function with the previous state, which returns the object and **the second parameter**, where the value passed to the function is the updated state |

## Example

**• Use the `useGroupState` Hook:**

```jsx
import React from 'react';
import { useGroupState } from 'react-group-state';

const App = () => {
  const [state, setState] = useGroupState({
    name: 'John',
    email: 'john@example.com',
    age: 21,
  });

  const updateUserInfo = () => {
    setState({
      name: 'Paul',
      age: 37,
    });
  };

  return (
    <>
      <p>
        {state.name} is {state.age} years old
      </p>

      <button onClick={updateUserInfo}>Change user name and age</button>
    </>
  );
};

export default App;
```

```js
setState(
  ({ age }) => ({
    name: 'Paul',
    age: age + 16,
  }),
  (newState) => console.log(JSON.stringify(newState))
);
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
