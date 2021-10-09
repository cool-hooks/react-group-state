import { useState, useCallback } from 'react';

type UpdateStateCallback<T> = (
  data: Partial<T> | ((state: T) => Partial<T>),
  callback?: (state: T) => void
) => void;

const defaultOptions = {
  extendable: true, // new fields
  strict: false, // other types for field
  overwrite: false,
  // fallback: undefined, // -> fallback for overwrite
};

export function useGroupState<T extends object>(
  group: T,
  options?: typeof defaultOptions
) {
  // TODO add logic for options
  const { extendable, strict, overwrite } = {
    ...defaultOptions,
    ...options,
  };

  const [state, setState] = useState(group);

  const updateState = useCallback<UpdateStateCallback<T>>(
    (data, callback, _options) => {
      const updatedState = state; // TODO? replace with prev state

      const mergeState = (data: Partial<T>) => {
        (Object.keys(data) as Array<keyof T>).map((key) => {
          if (
            extendable ||
            (!extendable &&
              Object.prototype.hasOwnProperty.call(updatedState, key))
          ) {
            // TODO compare objects/arrays/etc
            if (
              !strict ||
              (strict && typeof updatedState[key] === typeof data[key])
            ) {
              updatedState[key] = data[key] as T[keyof T];
            }
          }
        });

        setState((prevState) => {
          if (overwrite) {
            return data;
          }

          return { ...prevState, ...updatedState };
        });

        callback?.(updatedState);
      };

      mergeState(typeof data === 'function' ? data(state) : data);
    },
    [extendable, overwrite, state, strict]
  );

  return [state, updateState] as const;
}
