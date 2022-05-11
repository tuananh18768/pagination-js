// let a = [1, 2, 2, 3, 3, 4, 2, 5, 5, 3];
// let index = 0;
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length - 1; j++) {
//         if (a[i] == a[j]) {
//             count++;
//             let bat = count
//         }
//     }
// }
// console.log(a)

//----------------------------------------------------------------
let arr = ["a", "a", "b", "b", "c", "d", "e", "c"];
const randomIndex = () => {
    return Math.floor(Math.random() * arr.length);
}
const getEleNew = (data, count) => {
    let listIndex = [];
    let mang = [];
    for (let i = 0; i < count; i++) {
        console.log(randomIndex());
        // if (data[randomIndex()] == data[randomIndex() + 1]) {
        //     continue;
        // }
        listIndex.push(data[randomIndex()]);
    }
    for (let i = 0; i < listIndex.length; i++) {
        if (listIndex[i] != listIndex[i + 1]) {
            mang.push[i]
        }
    }
    return mang;
}
console.log(getEleNew(arr, 3));