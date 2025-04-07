// !!陣列可以放的資料類型(文字、數字、變數、常數、函式)
// let x = 1;
// const y = 2; 
// const getSomeThing = () => {
//     return("抓到了")
// };

// let item = [ "文字" , 100 , x , y , getSomeThing() ]
// console.log(item);

// !!模擬從後端的資料提取
// 物件的用法寫法 { product_name: "後背包" , price: 1980 } 
// 使用id是萬一物件名有重複需要用id來辨別
let item = [
    { id: 1 , product_name: "後背包" , price: 1980 },
    { id: 2 , product_name: "零錢包" , price: 880 },
    { id: 3 , product_name: "托特包" , price: 1280 },
];

let container = document.querySelector(".container");

item.forEach((element,index) => {
    if ( index == 0 ) {
        container.innerHTML = ""
    }
    container.innerHTML +=
        `<div class="item">
             <p>${element.product_name}</p>
             <p>${element.price + "元"}</p>
             <button class="buy-btn" data-id="${element.id}" data-product="${element.product_name}">購買</button>
        </div>`
});

let buyBtns = Array.from(document.querySelectorAll(".buy-btn"));

function btnAlert () {
    alert("您已成功購買"+this.dataset.product)
};

buyBtns.forEach(element => {
    element.addEventListener("click",btnAlert)
});