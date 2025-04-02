// !!註解:函數的結構為 函數的名稱(帶入的資料)
// alert("你已成功購買");
// confirm("你確定要購買嗎?");


// let buyBtns = Array.from(document.querySelectorAll(".buy-btn"));
// console.log(buyBtns[0]);

// !!註解:事件監聽器(滑鼠點擊、鍵盤壓下)+函數寫在裡面
// buyBtns[0].addEventListener("click", function () {
//     alert("你已成功購買");
// });

// !!註解:事件監聽器(滑鼠點擊、鍵盤壓下)+函數寫在上面
// function btnAlert () {
//     alert("你已成功購買");
// };
// !!註解：另一種定義函數的方式
// const btnAlert = () => {
//     alert("你已成功購買");
// };
// buyBtns[0].addEventListener("click",btnAlert);

// !!註解:事件監聽器(滑鼠點擊、鍵盤壓下)+函數箭頭寫法在裡面
// buyBtns[0].addEventListener("click", () => {
//     alert("你已成功購買");
// });

// !!練習從後端抓資料
let container = document.querySelector(".container");
// 第一種寫法
// for (let item = 1 ; item < 4 ; item++ ){
//     container.innerHTML = `${container.innerHTML}
//     <div class="item">
//     <p>商品 ${item}</p>
//     <button class="buy-btn">購買</button>
//     </div>`;
// };

// 第二種寫法
// for (let item = 1 ; item < 4 ; item++ ){
//     container.innerHTML = container.innerHTML +
//     `<div class="item">
//     <p>商品 ${item}</p>
//     <button class="buy-btn">購買</button>
//     </div>`;
// };

// 第三種寫法
for (let item = 1 ; item < 4 ; item++ ){
    if ( item == 1 ) {
        container.innerHTML = ""
    }
    container.innerHTML +=
    `<div class="item">
    <p>商品 ${item}</p>
    <button class="buy-btn">購買</button>
    </div>`;
};

let buyBtns = Array.from(document.querySelectorAll(".buy-btn"));
function btnAlert () {
    alert ("你已成功購買")
};

buyBtns.forEach(element => {
    element.addEventListener("click",btnAlert)
});
