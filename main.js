let num = [];
let clearAll = document.querySelector(".clear-all");
let del = document.querySelector(".del");
let equal = document.querySelector(".equal");
let divs = document.querySelectorAll(".controls div");
let result = document.querySelector(".result-cont .result");
let operationWarn = document.querySelector(".operation");
let digitsWarn = document.querySelector(".digits");
let body = document.querySelector(".body");
let theme = document.querySelector(".theme");
let controls = document.querySelector(".controls");
let final = 0;
let finish = false;
divs.forEach((ele) => {
  ele.onclick = function () {
    if (finish === true) {
      result.innerHTML = num.join("");
      finish = false;
    }
    if (ele.title !== "") {
      if (ele.classList[0] == "del") {
        num.pop();
        result.lastChild.remove();
      } else if (ele.children.length == 1 && ele.classList[0] !== "del") {
        let nwe = document.createElement("i");
        for (let i = 0; i < ele.children[0].classList.length; i++) {
          nwe.classList.add(`${ele.children[0].classList[i]}`);
        }
        num.push(ele.title);
        result.appendChild(nwe);
      } else if (ele.children.length == 0 && ele.classList[0] !== "del") {
        let nwe = document.createElement("span");
        nwe.innerHTML = ele.title;
        num.push(ele.title);
        result.appendChild(nwe);
      }
    }
    if (num.length > 12) {
      result.style.fontSize = "2rem";
    } else{
      result.style.fontSize = "2.7rem"
    } 
    if (num.length > 16) {
      result.style.fontSize = "1.45rem";
    }
    // if (num.length > 20) {
    //   result.style.fontSize = "1.4rem";
    // }
    if (num.length > 22) {
      operationWarn.style.display = "block";
      result.innerHTML = "Not Allowed";
    } else {
      operationWarn.style.display = "none";
    }
  };
});
equal.onclick = function () {
  if (finish === true) {
    result.innerHTML = num.join("");
    finish = false;
  }
  if (true) {
    if (isNaN(parseInt(num))) {
      operationWarn.style.display = "block";
    } else {
      operationWarn.style.display = "none";
    }
  }
  result.innerHTML = eval(num.join(""));
  num = [];
  final = 0;
  finish = true;
};
clearAll.onclick = function () {
  result.innerHTML = "";
  num = [];
};
theme.onclick = function () {
  body.classList.toggle("dark");
  theme.classList.toggle("dark");
  controls.classList.toggle("dark");
  body.classList.toggle("light");
  theme.classList.toggle("light");
  controls.classList.toggle("light");
  if (body.classList.contains("light")) {
    document.body.style.backgroundColor = "#080808";
  } else if (body.classList.contains("dark")) {
    document.body.style.backgroundColor = "white";
  }
};
