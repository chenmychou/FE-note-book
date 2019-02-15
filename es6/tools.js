// const arr = [10,23094323,-1,29283,223,444,23,54,4,2,23,32,432,424,324]
// // 快速求数组中最大值
// const arrMax = (arr) => Math.max(...arr)
// console.log(arrMax(arr)) // 23094323


// // 快速求数组中最小值
// const arrMin = (arr) => Math.min(...arr)
// console.log(arrMin(arr)) // -1

// // 将数组切成指定的较小数组
// // 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。
// const chunkArr = (arr, size) => Array.from({length: Math.ceil(arr.length/size)}, (v, i) => arr.slice(i * size, i * size + size))
// console.log(chunkArr(arr,4)) // -->[ [ 10, 23094323, -1, 29283 ],[ 223, 444, 23, 54 ],[ 4, 2, 23, 32 ],[ 432, 424, 324 ] ]

// //计算某个值出现的次数（数组中）
// const countOccurrences = (arr, target) => arr.reduce((a,v) => v === target ? a + 1 : a + 0, 0)
// console.log(countOccurrences(arr,23)) // --> 2

// // 数组平铺
// const manyDeepArr = [1,2,3,3,[3,4,2,213,12,1232132,1,414,2,[34,2,21,234,32423,2,[3443,12,12,1312,32,1]]]]
// const arrayDeepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v)?arrayDeepFlatten(v):v))
// console.log(arrayDeepFlatten(manyDeepArr)) // 目标数组平铺

// // 数组去重
// const removeTheSame = (arr) => new Set(arr)
// console.log('remove the same value:', removeTheSame([11,2,3,2,2,2,2,3,3,3]))
// 数组去重
// const distinctValuesOfArray = arr => [...new Set(arr)];
// console.log('remove the same value:', distinctValuesOfArray([11,2,3,2,2,2,2,3,3,3]))
// // 求两个数组中不同的值 (从b创建Set , 然后使用Array.filter() on 只保留a b中不包含的值.)
// const tagetArr1 = [1,2,2,3,2,2]
// const tagetArr2 = [1112321,2,2,2,3,2,2,1,1111]
// const differentValue = (a,b) => {
//     const s = new Set(b);
//     return a.filter(x => !s.has(x));
// }
// console.log(differentValue(tagetArr1, tagetArr2))

// 筛选数组中的元素（移除数组中的元素, 直到传递的函数返回true。返回数组中的其余元素。）
const filterElement = (arr, fn) => {
    while(arr.length > 0 && !fn(arr[0])) arr.shift();
    return arr;
} 

console.log(filterElement([1,2,2,2,2,234,3,42,2,3,2], n => n >= 3))
