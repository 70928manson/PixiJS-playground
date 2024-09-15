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

// 測試擲骰子功能 nextInt 夠不夠平均
test('nextInt()數字分布', () => {
    let rng = new RandomGenerator(Date.now());

    let maxFace = 9;
    let totalFaces = maxFace + 1;
    // 準備擲出數子資料庫, 把 0 裝到第 0 格至第 9 格
    let results: number[] = [];
    for (let i=0; i < totalFaces; i++) {
        results.push(i);
    }
    // 準備擲 1000 次骰子
    let totalRolls = 10000;
    let rollCounts = 0;
    while (rollCounts < totalRolls) {
        // 擲出 0 ~ 9 之間的數字
        let face = rng.nextInt(maxFace);
        // 擲出次數 + 1
        results[face]++;

        rollCounts++;
    }
    // 每面擲出的期望次數
    let expectPerFace = totalRolls / totalFaces;
    for (let face = 0; face <= maxFace; face++) {
        // 擲出次數和期望值的差異要小於200
        let diff = Math.abs(results[face] - expectPerFace);
        expect(diff).toBeLessThan(200);
    }
})