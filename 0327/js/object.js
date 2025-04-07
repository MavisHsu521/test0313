// let x = 1;
// const y = 2;
// const getSomeThing = () => {
//   return "抓到了";
// };

// let item = ["文字", 1, x, y, getSomeThing()];
// let CJ = ["誠峻", 175, 2];
// CJ["姓名"] = "誠峻";

// console.log(item);

// console.log(CJ.cname);
// console.log(CJ.age);

// 模擬從後端拿到的資料
let item = [
  { id: 1, product_name: "包包", price: 2000 },
  { id: 2, product_name: "皮包", price: 500 },
  { id: 3, product_name: "腰包", price: 99 },
];

console.table(item);

let container = document.querySelector(".container");

console.log(container);
item.forEach((element) => {
  container.innerHTML += `
    <div class="item" '>
<p>${element.product_name}</p>
<p>${element.price}</p>
<button data-product='${element.product_name}' data-id='${element.id}' class="buy-btn">購買</button>
</div> 
  `;
});

let buyBtns = Array.from(document.querySelectorAll(".buy-btn"));

function send() {
  console.log(this.dataset.id);

  console.log(product);
  alert("商品編號" + this.dataset.id);
  alert("您已購買商品" + this.dataset.product);
}

buyBtns.forEach((element) => {
  element.addEventListener("click", send);
});

// buyBtns[0].addEventListener("click", send);

//下次上課的時候要補充如何從id返回並取得我們的商品資訊
