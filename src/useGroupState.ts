import { useState, useCallback } from 'react';

type UpdateStateCallback<T> = (
  data: Partial<T> | ((state: T) => Partial<T>),
  callback?: (state: T) => void
) => void;

const defaultOptions = {
  extendable: false, // new fields
  strict: true, // other types for field
};

export function useGroupState<T extends object>(
  group: T,
  options?: typeof defaultOptions
) {
  // TODO add logic for options
  const { extendable, strict } = {
    ...defaultOptions,
    ...options,
  };

  const [state, setState] = useState(group);

  const updateState = useCallback<UpdateStateCallback<T>>(
    (data, callback) => {
      const updatedState = state; // TODO? replace with prev state

      const mergeState = (data: Partial<T>) => {
        (Object.keys(data) as Array<keyof T>).map((key) => {
          if (Object.prototype.hasOwnProperty.call(updatedState, key)) {
            updatedState[key] = data[key] as T[keyof T];
          }
        });

        setState((prevState) => ({ ...prevState, ...updatedState }));
        // setState({ ...updatedState });

        callback?.(updatedState);
      };

      mergeState(typeof data === 'function' ? data(state) : data);
    },
    [state]
  );

  return [state, updateState] as const;
}
