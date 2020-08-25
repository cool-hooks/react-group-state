import { renderHook, act } from "@testing-library/react-hooks";

import { useGroupState } from "../src";

describe("useGroupState", () => {
  it("should update initial state values", () => {
    const initialState = {
      name: "John",
      email: "john@example.com",
      age: 21,
    };

    const { result } = renderHook(() => useGroupState(initialState));

    const [state, setState] = result.current;

    expect(state).toBe(initialState);

    act(() => {
      setState({ age: 37 });
    });

    expect(state).toMatchObject({
      name: "John",
      email: "john@example.com",
      age: 37,
    });

    const cb = jest.fn();

    act(() => {
      setState(
        {
          age: 21,
          name: "Paul",
          email: "paul@example.com",
        },
        cb,
      );
    });

    expect(cb).toHaveBeenCalledWith({
      age: 21,
      name: "Paul",
      email: "paul@example.com",
    });

    expect(state).toMatchObject({
      name: "Paul",
      email: "paul@example.com",
      age: 21,
    });

    act(() => {
      setState({});
    });

    expect(state).toMatchObject({
      name: "Paul",
      email: "paul@example.com",
      age: 21,
    });

    act(() => {
      setState(
        ({ age }) => ({ age: age + 20 }),
        // (x) => console.log(x),
      );
    });

    expect(state).toMatchObject({
      name: "Paul",
      email: "paul@example.com",
      age: 41,
    });
  });
});
