import { useState, useCallback } from 'react';

type UpdateStateCallbackParams<T> = (
  data: Partial<T> | ((state: T) => Partial<T>),
  callback?: (state: T) => void
) => void;

export function useGroupState<T extends object>(group: T) {
  const [state, setState] = useState(group);

  const updateState = useCallback<UpdateStateCallbackParams<T>>(
    (data, callback) => {
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
    },
    [state]
  );

  return [state, updateState] as const;
}
