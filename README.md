# [react-group-state](https://github.com/cool-hooks/react-group-state)

[![NPM version](http://img.shields.io/npm/v/react-group-state.svg?style=flat-square)](https://www.npmjs.com/package/react-group-state)
[![NPM downloads](http://img.shields.io/npm/dm/react-group-state.svg?style=flat-square)](https://www.npmjs.com/package/react-group-state)

## About


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
    age: 27,
  });

  // if (loading) return <p>Loading...</p>;

  // if (error) return <p>Something went wrong</p>;

  // return <h1>{data.link}</h1>;
};

export default App;
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
