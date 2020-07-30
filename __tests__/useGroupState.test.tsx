import { renderHook } from "@testing-library/react-hooks";

import { useGroupState } from "../src";

describe("useGroupState", () => {
  it("", () => {
    const initialState = {};

    const { result } = renderHook(() => useGroupState(initialState));
  });
});
