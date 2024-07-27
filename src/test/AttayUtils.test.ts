import { ArrayUtils } from "../lib/ArrayUtils";
import { test, expect } from "vitest"

test('addUniqueItem', () => {
    let array = ['a', 'b', 'c'];
    expect(ArrayUtils.addUniqueItem(array, "a")).toBe(false);
    expect(array.length).toBe(3);
    expect(ArrayUtils.addUniqueItem(array, "d")).toBe(true);
    expect(array.length).toBe(4);
});

test('物件陣列: 依屬性排列', () => {
    let array = [
        { id: 'p1', name: 'Karsa', power: 10 },
        { id: 'p2', name: 'Maple', power: 23 },
        { id: 'p3', name: 'Westdoor', power: 99 }
    ];
    ArrayUtils.sortNumericOn(array, 'power', true);
    
    // 預期由大到小排序, 第一個元素power為99
    expect(array[0].power).toBe(99);
});