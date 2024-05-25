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
}