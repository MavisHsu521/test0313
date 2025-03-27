let newArray = ["小花", "小新", "小葵", "柚子", "橘子"];
newArray.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(`單數組:${element}`);
  } else {
    console.log(`雙數組:${element}`);
  }
});

newArray.forEach(function (element, index) {
  if (index % 2 == 0) {
    console.log(`單數組:${element}`);
  } else {
    console.log(`雙數組:${element}`);
  }
});
