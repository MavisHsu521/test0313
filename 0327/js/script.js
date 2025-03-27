// if for 流程控制相關
// let buyBtns = Array.from(document.querySelectorAll(".buy-btn"));

// console.log(buyBtns[0]);

// 函數寫在上面

function btnAlert() {
  alert("你已成功購買");
}
// 另外一種做法
// const btnAlert = () => {
//   alert("你已成功購買");
// };

// buyBtns[0].addEventListener("click", function () {
//   alert("你已成功購買");
// });

// buyBtns[0].addEventListener("click", btnAlert);

// buyBtns[0].addEventListener("click", () => {
//   alert("你已成功購買");
// });

// console.log(buyBtns);
// alert("你已成功購買");

//函數的名稱(帶入的資料)
// confirm("你確定這樣的行為是對的嗎");

//!!認真想像一下後端的情況
let container = document.querySelector(".container");
//假設後端送來了3筆資料

// for (let item = 1; item <= 3; item++) {
//   container.innerHTML = `${container.innerHTML}<div class="item">
// <p>商品${item}</p>
// <button class="buy-btn">購買</button>
// </div>`;
// }

// for (let item = 1; item <= 3; item++) {
//   container.innerHTML =
//     container.innerHTML +
//     `<div class="item">
// <p>商品${item}</p>
// <button class="buy-btn">購買</button>
// </div>`;
// }

for (let item = 1; item <= 3; item++) {
  if (item == 1) {
    container.innerHTML = "";
  }
  container.innerHTML += `<div class="item">
<p>商品${item}</p>
<button class="buy-btn">購買</button>
</div>`;
}

let buyBtns = Array.from(document.querySelectorAll(".buy-btn"));

console.log(buyBtns);

buyBtns.forEach((element) => {
  element.addEventListener("click", btnAlert);
});

/* <div class="item">
<p>商品1</p>
<button class="buy-btn">購買</button>
</div> */
