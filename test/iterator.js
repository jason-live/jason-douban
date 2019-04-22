/**
 * 迭代器
 */
// function Iterator(arr) {
//   let iterIndex = 0;

//   return {
//     next: () => {
//       if (arr.length > iterIndex) {
//         return { done: false, value: arr[iterIndex++] };
//       } else {
//         return { done: true };
//       };
//     },
//   };
// };

// const it = Iterator(['吃饭', '睡觉', '打豆豆']);

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().done);

/** 
 * 迭代器生成器
 */

function *maktIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  };
};

const gen = maktIterator(['吃饭', '睡觉', '打豆豆']);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);

