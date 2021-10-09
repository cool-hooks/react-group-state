import { renderHook, act } from '@testing-library/react-hooks';

import { useGroupState } from '../src';

// TODO cover all test cases
describe('useGroupState', () => {
  it('should update initial state values', () => {
    const initialState = {
      name: 'John',
      email: 'john@example.com',
      age: 21,
    };

    const { result } = renderHook(() => useGroupState(initialState));

    const [state, setState] = result.current;

    expect(state).toBe(initialState);

    act(() => {
      setState({ age: 37 });
    });

    expect(state).toEqual({
      name: 'John',
      email: 'john@example.com',
      age: 37,
    });

    const cb = jest.fn();

    act(() => {
      setState(
        {
          age: 21,
          name: 'Paul',
          email: 'paul@example.com',
        },
        cb
      );
    });

    expect(cb).toHaveBeenCalledWith({
      age: 21,
      name: 'Paul',
      email: 'paul@example.com',
    });

    expect(state).toEqual({
      name: 'Paul',
      email: 'paul@example.com',
      age: 21,
    });

    act(() => {
      setState({});
    });

    expect(state).toEqual({
      name: 'Paul',
      email: 'paul@example.com',
      age: 21,
    });

    act(() => {
      setState(({ age }) => ({ age: age + 20 }));
    });

    expect(state).toEqual({
      name: 'Paul',
      email: 'paul@example.com',
      age: 41,
    });
  });

  it('should not add field not existing in initial state', () => {
    const initialState = {
      name: 'John',
      email: 'john@example.com',
      age: 21,
    };

    const { result } = renderHook(() => useGroupState<any>(initialState));

    const [state, setState] = result.current;

    expect(state).toBe(initialState);

    act(() => {
      setState({ time: 12 });
    });

    expect(state).toBe(initialState);
  });

  it.todo('should extend default object structure');
  it.todo('should strict');
  it.todo('should overwrite schema');
});
