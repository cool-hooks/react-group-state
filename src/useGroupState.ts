import { useState, useCallback } from 'react';

export function useGroupState<T extends object>(group: T) {
  const [state, setState] = useState(group);

  const updateState = useCallback(
    (
      data: Partial<T> | ((state: T) => Partial<T>),
      // data: Partial<T> | ((state: T) => Partial<T>),
      callback?: (state: T) => void
    ) => {
      const updatedState = state;

      // TODO fix if data is function
      (Object.keys(data) as Array<keyof T>).map((key) => {
        if (Object.prototype.hasOwnProperty.call(updatedState, key)) {
          updatedState[key] = data[key];
        }
      });

      setState(updatedState);

      if (callback) {
        callback(updatedState);
      }
    },
    [state]
  );

  return [state, updateState] as const;
}
