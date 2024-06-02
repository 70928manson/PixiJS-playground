export class ArrayUtils {
    /**
     * 在陣列裡加入唯一元素
     * @param array 目標陣列
     * @param item 要加入的元素
     * @returns 若元素是唯一的且被加入則回傳true
     */
    static addUniqueItem (
        array: unknown[],
        item: unknown
    ): boolean {
        if (array.includes(item)) {
            return false
        }
        array.push(item);
        return true;
    };

    /**
     * 移除陣列中的一個元素
     * @param array 目標陣列
     * @param item  要移除的元素
     * @returns 若成功移除元素則回傳true
     */
    static removeItem(
        array: unknown[],
        item: unknown
    ): boolean {
        let index = array.indexOf(item);
        if (index === -1) {
            return false
        };
        // 使用splice()在 index 的位置刪除1個元素
        array.splice(index, 1);
        return true;
    };

    /**
     * 從陣列中隨機取一個元素
     * @param array 目標陣列
     * @param remove (可省略) 要不要移除選取到的元素
     * @returns 隨機選擇的元素
     */
    static getRenderItem<T>(
        array: T[],
        remove?: boolean
    ){
        // 如果陣列為空, 回傳錯誤訊息
        if (!array.length) {
            throw new Error('無法從空陣列取得元素');
        };
        // 取一個介於 0 ~ array.length 的亂數
        let rand = Math.random() * array.length;
        // 無條件捨去小數位取整數
        let index = Math.floor(rand);
        // 準備要回傳的元素
        let item = array[index];
        // 如果需要, 就移除位於index的元素
        if (remove) {
            array.splice(index, 1);
        };

        return item;
    };
}