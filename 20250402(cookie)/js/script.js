// !!按同意全部按鈕後，隱私權宣告區塊消失
// function hide() {
//   cookieContainer.style = "display:none";
// }
// let cookieContainer = document.querySelector(".cookie-container");
// let acceptAll = document.querySelector("#accept-all");
// acceptAll.addEventListener("click", hide);
// **函式箭頭寫法
// acceptAll.addEventListener("click", () => {
//   cookieContainer.style = "display:none";
// });

// !!讀取cookie
// document.cookie.split(";");

// let cookieArray = document.cookie.split(";");
// cookieArray.forEach((cookie) => {
//   console.log(cookie);
// });

function getCookiesBasic() {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split(";");
  const result = [];

  for (i = 0; (i = cookieArray.length); i++) {
    const cookie = cookieArray[0];
    const parts = cookieString.split("=");
    console.log(parts);
  }
}
getCookiesBasic();
