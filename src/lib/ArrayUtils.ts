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
    }

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
    }
}