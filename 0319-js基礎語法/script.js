// console.log("hello JS");

// // let
// const test1 = document.querySelector(".test-1");

const testNodeList = document.querySelectorAll(".test-1");
const tests = Array.from(document.querySelectorAll(".test-1"));

console.log(testNodeList);

testNodeList.forEach((element) => {
  console.log(element);
});

tests.forEach((element, index) => {
  console.log("索引：" + index);
  console.log(element);
});

// // const idTest = document.querySelector("#id-test");

// // const idTestCatch = document.getElementById("id-test");

// // console.log(test1);
// console.log(tests[4]);

// let testsExample = ["測試0", "測試1", "測試2", "測試3"];
// let test = testsExample;

// console.table(testsExample);
// console.table(test);

// test[0] = "測試-1";
// console.table(testsExample);

// let x = "誠峻的紙";
// x = "許小姐的紙";

// // let y = x;
// console.log(x);
// x = "RURU姐的紙";

// console.log(x);

// x = 3;
// console.log(y);

// // console.log(idTest);
// // console.log(idTestCatch);

// 這邊開始要講解if/樣板字串

// let x = 5;
// let y = 4;

// if (x < y) {
//   console.log(`${x}是比${y}小的`);
// } else if (x == y) {
//   console.log(`${x}和${y}是相等的`);
// } else {
//   console.log(x + "是比" + y + "大的");
// }

//迴圈

// i++ 其實就是  i=i+1

// console.log(`1x1=${1 * 1}`);
// console.log(`1x2=${1 * 2}`);
// console.log(`1x3=${1 * 3}`);
// console.log(`2x1=${2 * 1}`);
// console.log(`2x2=${2 * 2}`);
// console.log(`2x3=${2 * 3}`);
// console.log(`3x1=${3 * 1}`);
// console.log(`3x2=${3 * 2}`);
// console.log(`3x3=${3 * 3}`);

// for (let i = 1; i <= 3; i++) {
//   //3次
//   for (let j = 1; j <= 3; j++) {
//     //3次
//     console.log(`${i}x${j}=${i * j}`);
//   }
//   //一共9次
// }

// for (let i = 1; i <= 9; i++) {
//   //9次
//   for (let j = 1; j <= 9; j++) {
//     //9次
//     console.log(`${i}x${j}=${i * j}`);
//   }
//   //一共81次
// }

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

// while
// do {

// } while (

// );

// array.forEach((element) => {});

// let newArray = ["小明", "大王", "RuRu", "LuLu", "球球"];

// console.log(newArray.length);

// console.table(newArray);
// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);
// console.log(newArray[4]);

//因為newArray.length他是去計算有幾個值，那這時候他就是用人腦的方式去算了因此我們才只能用小於
// for (let nameIdex = 0; nameIdex <= 4; nameIdex++) {
//   console.log(newArray[nameIdex]);
// }

//3號中獎
// for (let nameIdex = 0; nameIdex < newArray.length; nameIdex++) {
//   if (nameIdex == 2) {
//     console.log(`恭喜:${newArray[nameIdex]}抽中大獎`);
//   } else {
//     console.log(`${newArray[nameIdex]}:銘謝惠顧`);
//   }
// }

// //單號一組雙號一組的分隊

// console.log(0 % 2); //0
// // 請嘗試看看 && ||
for (let nameIdex = 0; nameIdex < newArray.length; nameIdex++) {
  if (nameIdex % 2 == 0 && nameIdex == 0) {
    console.log(`單數組:${newArray[nameIdex]}`);
  } else {
    console.log(`雙數組:${newArray[nameIdex]}`);
  }
}

//這個請幫我轉成foreach版本的

array.forEach((element) => {});
