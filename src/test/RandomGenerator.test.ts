import { test, expect } from "vitest";
import { RandomGenerator } from "../lib/RandomGenerator";

test('next()的輸出範圍', () => {
    let rng = new RandomGenerator(Date.now());
    let tries = 100;
    while (tries--) {
        let output = rng.next();
        // 期望亂數值 >=0 且 < 1
        expect(output).greaterThanOrEqual(0).lessThan(1);
    }
})