import { useState } from 'react';

export function useGroupState<T extends object>(group: T) {
  const [state, setState] = useState(group);

  const updateState = (
    data: Partial<T> | ((state: T) => Partial<T>),
    callback?: (state: T) => void
  ) => {
    const updatedState = state;

    const mergeState = (data: Partial<T>) => {
      (Object.keys(data) as Array<keyof T>).map((key) => {
        if (Object.prototype.hasOwnProperty.call(updatedState, key)) {
          updatedState[key] = data[key] as T[keyof T];
        }
      });

      setState(updatedState);

      callback?.(updatedState);
    };

    mergeState(typeof data === 'function' ? data(state) : data);
  };

  return [state, updateState] as const;
}
