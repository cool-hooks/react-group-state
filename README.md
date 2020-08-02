# [react-group-state](https://github.com/cool-hooks/react-group-state)

[![NPM version](http://img.shields.io/npm/v/react-group-state?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![NPM downloads](http://img.shields.io/npm/dm/react-group-state?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![NPM license](https://img.shields.io/npm/l/react-group-state?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![Travis](https://img.shields.io/travis/cool-hooks/react-group-state?style=flat-square)](https://travis-ci.org/cool-hooks/react-group-state)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-group-state?style=flat-square)](https://bundlephobia.com/result?p=react-group-state)

## About

Use state management style from React class components in function components

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

### useGroupState

#### Options

| Name | Type   | Default | Description    |
| ---- | ------ | ------- | -------------- |
| url  | string | ` `     | URL to shorten |

#### Returned Values

| Name    | Type      | Description              |
| ------- | --------- | ------------------------ |
| loading | boolean   | Is data loading          |

## Example

**• Use `useGroupState` Hook:**

```js
import React from 'react';
import { useGroupState } from 'react-group-state';

const App = () => {
  const [state, setState] = useGroupState({
    name: 'John',
    email: 'john@example.com',
    age: 21,
  });
  
  setState({
    name: 'Paul',
    age: 37,
  });
};

export default App;
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
