import { ArrayUtils } from "../lib/ArrayUtils";
import { test, expect } from "vitest"

test('addUniqueItem', () => {
    let array = ['a', 'b', 'c'];
    expect(ArrayUtils.addUniqueItem(array, "a")).toBe(false);
    expect(array.length).toBe(3);
    expect(ArrayUtils.addUniqueItem(array, "d")).toBe(true);
    expect(array.length).toBe(4);
});