import { ArrayUtils } from "./ArrayUtils";

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
    
    /**
     * 產生介於 0 和 max 之間的亂整數, 0 和 max 都是可能的回傳值
     * @param max 最大可能值
     * @returns 介於 0 和 max 的亂整數
     */
    public nextInt(max: number): number {
        let value = (max + 1) * this.next();
        return Math.floor(value);
    }

    /**
     * 產生介於 min 和 max 之間的亂整數, min 和 max 都是可能的回傳值
     * @param min 最小可能值
     * @param max 最大可能值
     * @returns 介於 min 和 max 的亂整數
     */
    public nextIntBetween(min:number, max: number): number {
        let value = min + (max - min + 1) * this.next();
        return Math.floor(value);
    }
    
    /**
     * 產生一個長度為 length 的隨機字串
     * @param length 回傳的字串長度
     * @param nums 是否要加入數字
     * @returns 隨機字串
     */
    public getRandomString(length:number, nums?: boolean): string {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        if (nums) {
            chars += '0123456789';
        };
        let charLength = chars.length;
        let output = '';
        while (output.length < length) {
            let index = Math.floor(charLength * this.next());
            output += chars[index];
        };
        return output
    }

    /**
     * 隨機排列陣列中的元素
     * @param array 目標陣列
     */
    public randomizeArray(array: unknown[]) {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            let swapTo = Math.floor(length * this.next());
            ArrayUtils.swapAt(array, i, swapTo);
        }
    }
}