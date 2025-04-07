// let cookieContainer = document.querySelector(".cookie-container");
// let acceptAll = document.querySelector("#accept-all");

// acceptAll.addEventListener("click", () => {
//   cookieContainer.style = "display:none";
// });

// // console.log(document.cookie);

// document.cookie.split(";");

// let cookieArray = document.cookie.split(";");

// console.log(cookieArray[0]);
// cookieArray.forEach((cookie) => {
//   console.log(cookie);
// });

function getCookiesBasic() {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split(";");
  const result = [];

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i];
    const parts = cookie.split("=");
    // console.log(parts);

    const name = parts[0];
    const value = decodeURIComponent(parts[1] || "");

    result.push({ name, value });
  }

  return result;
}

// console.log(getCookiesBasic());

function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");

    // console.log(cookieName);

    if (cookieName.trim() == name) {
      //   console.log(cookieName);
      //   console.log(cookieValue);
      console.log("他是存在的");

      cookieContainer.style = "display:none";

      return cookieValue;
    }
  }

  return null;
}

function addCookie() {
  //   console.log(this.dataset.key);
  const oneYear = 365 * 24 * 60 * 60;
  document.cookie = `cookie_consent='${this.dataset.key}',max-age=${oneYear};path=/`;

  cookieContainer.style = "display:none";
  //   getCookie("cookie_consent");
}

//!!原始的程式碼
// acceptAll.addEventListener("click", () => {
//   const oneYear = 365 * 24 * 60 * 60;
//   document.cookie = `cookie_consent=all,max-age=${oneYear};path=/`;
//   //   getCookie("cookie_consent");
// });

// acceptNecessary.addEventListener("click", () => {
//   const oneYear = 365 * 24 * 60 * 60;
//   document.cookie = `cookie_consent='必要的',max-age=${oneYear};path=/`;
//   //   getCookie("cookie_consent");
// });

function deleteCookie(name) {
  const expireDate = new Date(0);
  console.log(expireDate.toUTCString());
  document.cookie = `${name}=;expires=${expireDate.toUTCString()}; path=/; max-age=0`;
}

let cookieContainer = document.querySelector(".cookie-container");
let acceptAll = document.querySelector("#accept-all");
let acceptNecessary = document.querySelector("#accept-necessary");

// 事件監聽
acceptAll.addEventListener("click", addCookie);

acceptNecessary.addEventListener("click", addCookie);

// deleteCookie("cookie_consent"); //這是用來測試時刪除資料的;

// 問題在這邊 我多打了一個;符號
// getCookie("cookie_consent;");
getCookie("cookie_consent");
