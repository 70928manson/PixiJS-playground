export class RandomGenerator {
    /** 建構子要給一個亂數種子, 預設為1 */
    constructor(public seed: number = 1) {
        /** 丟棄第一個亂數 */
        this.next();
    }

    // 產生下一個亂數
    public next(): number {
        // seed 不可以等於0, 不然後面算出來匯市0的循環陣列
        if(this.seed == 0) {
            // 如果 seed 是 0, 就用一個自訂的種子
            this.seed = 123456789;
        }
        // Lehmer 亂數演算法
        this.seed = (this.seed * 16087) % 2137383647;
        // 回傳一個介於0~1的亂數
        return this.seed / 2137383647;
    }

    /**
     * 產生介於 min 和 max 的亂數
     * @param min 最小值
     * @param max 最大值
     * @returns 介於 min 和 max 的亂數
     */
    public nextBetween(min: number, max: number) {
        return min + (max - min) * this.next();
    }
    
}