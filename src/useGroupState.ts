import { useState } from 'react';

type Setters<T extends {}> = {
  [K in keyof T]: (value: T[K]) => void;
};

export function useGroupState<T extends {}>(group: T): [T, Setters<T>] {
  const [state, setState] = useState(group);

  const setters = {};

  Object.keys(group).map((item) => {
    setState((state: T) => ({ ...state, item }));
  });

  return [state, setters as Setters<T>];
}
