import { useState, useCallback } from 'react';

export function useGroupState<T extends object>(group: T) {
  const [state, setState] = useState(group);

  const updateState = useCallback(
    (
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

        if (callback) {
          callback(updatedState);
        }
      };

      mergeState(typeof data === 'function' ? data(state) : data);
    },
    [state]
  );

  return [state, updateState] as const;
}
