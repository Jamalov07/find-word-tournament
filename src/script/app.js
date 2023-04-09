let greeting = document.querySelector(".greeting");
let info = document.querySelector(".info");
let usernameInput = document.querySelector(".username");
let loginModal = document.querySelector(".loginmodal");
let btnsign = document.querySelector(".btnsign");
let usernamemsg = document.querySelector(".namemsg");
let inGameModal = document.querySelector(".ingame");
let easyModal = document.querySelector(".easymodal");
let mediumModal = document.querySelector(".mediummodal");
let hardModal = document.querySelector(".hardmodal");
let easyicon = document.querySelector(".easyicon");
let mediumicon = document.querySelector(".mediumicon");
let hardicon = document.querySelector(".hardicon");
let welcome = document.querySelector(".welcome");
let welcomeText1 = document.querySelector(".welcometext1");
let welcomeText2 = document.querySelector(".welcometext2");
let easyButton = document.querySelector(".button--piyo");
let mediumButton = document.querySelector(".button--hoo");
let hardButton = document.querySelector(".button--pen");
let helperModal = document.querySelector(".helper");
let wrappergame = document.querySelector(".wrappergame");
let sekund = document.querySelector(".sekund");

const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.setAttribute("class", className);
  if (content) element.innerHTML = content;
  return element;
};

let welcomeText = `Hush kelibsiz, hurmatli o'yinchi. O'yin qoidalari bilan tanishib chiqing.`;
let welcometextStr1 = ` Bu o'yin bolalarning ingliz tili fanini takrorlash va yaxshiroq
o'rganishi uchun ishlab chiqilgan. O'yin qoidalari oddiy, sizga
ma'lum bir vaqt davomida ikki hil tildagi so'zlar umumiy bir guruh
sifatida yoyilgan holatda beriladi. Siz esa ularni bir-biriga
tarjima jihatidan mos keladiganlarini ketma-ket bosib o'z
hisobingizni oshirishingiz mumkin. Vaqt tugamasidan oldin topib
bo'lsangiz siz g'olib deb topilasiz va keyingi bosqichga o'tasiz.
`;
let welcometextStr2 = `Agar ma'lumotlar bilan tanishib chiqqan bo'lsangiz o'yinniboshlash uchun bosqich tanlang`;

let greetingText = "Assalomu alaykum. Hush kelibsiz!";
let infoText = `O'yin davomida sizga murojaat qilishimiz uchun o'zingizga tahallus kiriting.`;
let errorMsg = "Yaroqsiz tahallus";
let count = 0;
let count2 = 0;
let countWelcome = 0;
let countwelcometext1 = 0;
let countwelcometext2 = 0;
let easyModalOpen = false;
let mediumModalOpen = false;
let hardModalOpen = false;

console.log(getInLocalstorage());
if (!getInLocalstorage()) {
  let setText = setInterval(() => {
    greeting.classList.remove("-translate-y-20");
    if (count > greetingText.length) {
      loginModal.classList.remove("-translate-x-[1400px]");
      clearInterval(setText);
      let setInfo = setInterval(() => {
        if (count2 > infoText.length) {
          clearInterval(setInfo);
          setTimeout(() => {
            usernameInput.classList.remove("translate-x-[700px]");
          }, 500);
          setTimeout(() => {
            btnsign.classList.remove("-translate-x-[700px]");
          }, 1000);
        }
        info.innerHTML = `${infoText.slice(0, count2++)}`;
      }, 100);
    }
    greeting.innerHTML = `${greetingText.slice(0, count++)}`;
  }, 100);

  usernameInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    if (e.target.value.split(" ").length > 1) {
      usernamemsg.innerHTML = errorMsg;
    } else {
      usernamemsg.innerHTML = "";
    }
  });

  btnsign.addEventListener("click", (e) => {
    console.log(usernameInput.value);
    if (usernameInput.value.split(" ").length > 1) {
      usernamemsg.innerHTML =
        "Oyinda ishtirok etish uchun yaroqli tahallus tanlashingiz kerak";
    } else {
      window.localStorage.setItem("username", usernameInput.value);
      window.location.reload();
    }
  });
}

if (!getInLocalstorage()) {
  inGameModal.classList.add("hidden");
} else {
  inGameModal.classList.add("flex");
}

function getInLocalstorage() {
  let username = window.localStorage.getItem("username");
  return username;
}

easyicon.addEventListener("click", () => {
  easyModal.classList.toggle("hidden");
  easyModal.classList.toggle("flex");
  easyModal.classList.toggle("-translate-y-[220px]");
});

mediumicon.addEventListener("click", () => {
  mediumModal.classList.toggle("hidden");
  mediumModal.classList.toggle("flex");
  mediumModal.classList.toggle("-translate-y-[220px]");
});
hardicon.addEventListener("click", () => {
  hardModal.classList.toggle("hidden");
  hardModal.classList.toggle("flex");
  hardModal.classList.toggle("-translate-y-[220px]");
});

// if (getInLocalstorage()) {
//   let welcomeInval = setInterval(() => {
//     welcomeText1.innerHTML = "";
//     welcomeText2.innerHTML = "";
//     if (countWelcome > welcomeText.length) {
//       clearInterval(welcomeInval);
//       let welText1InVal = setInterval(() => {
//         if (countwelcometext1 > welcometextStr1.length) {
//           clearInterval(welText1InVal);
//           let welText2InVal = setInterval(() => {
//             if (countwelcometext2 > welcometextStr2.length) {
//               clearInterval(welText2InVal);
//             }
//             welcomeText2.innerHTML = welcometextStr2.slice(
//               0,
//               countwelcometext2++
//             );
//           }, 20);
//         }
//         welcomeText1.innerHTML = welcometextStr1.slice(0, countwelcometext1++);
//       }, 20);
//     }
//     welcome.innerHTML = welcomeText.slice(0, countWelcome++);
//   }, 20);
// }

console.log(easyButton, mediumButton, hardButton);

easyButton.addEventListener("click", async (e) => {
  helperModal.classList.add("hidden");

  easyButton.classList.add("bg-green-500");
  mediumButton.classList.remove("bg-green-500");
  hardButton.classList.remove("bg-green-500");
  wrappergame.innerHTML = "";
  endmodal.classList.add("-translate-x-[1200px]");
  localStorage.setItem("level", 1);
  sekund.innerHTML = "20";

  getStart(1);
});

mediumButton.addEventListener("click", (e) => {
  helperModal.classList.add("hidden");
  mediumButton.classList.add("bg-green-500");
  easyButton.classList.remove("bg-green-500");
  hardButton.classList.remove("bg-green-500");
  wrappergame.innerHTML = "";
  endmodal.classList.add("-translate-x-[1200px]");
  localStorage.setItem("level", 2);
  sekund.innerHTML = "20";
  getStart(2);
});

hardButton.addEventListener("click", (e) => {
  helperModal.classList.add("hidden");
  hardButton.classList.add("bg-green-500");
  easyButton.classList.remove("bg-green-500");
  mediumButton.classList.remove("bg-green-500");
  wrappergame.innerHTML = "";
  endmodal.classList.add("-translate-x-[1200px]");
  localStorage.setItem("level", 3);
  sekund.innerHTML = "20";
  getStart(3);
});

let loading = document.querySelector(".loading");
console.log(loading);

function getStart(num) {
  if (!loading.classList.contains("-translate-y-[200px]")) {
    loading.classList.add("-translate-y-[200px]");
  }
  loading.classList.remove("-translate-y-[200px]");
  loading.innerHTML = 3;
  let strs = [2, 1, 0, "Go", "ok"];
  let count = 0;
  let anon = setInterval(() => {
    console.log(count);
    if (count === 4) {
      getMainRandomValues(num);
      count = 0;
    }
    if (loading.innerHTML === "Go") {
      clearInterval(anon);
      loading.classList.add("-translate-y-[200px]");
      sekundCounter();
    } else {
      loading.innerHTML = strs[count++];
    }
  }, 1000);
}
let endmodal = document.querySelector(".endmodal");
let resultfind = document.querySelector(".resultfind");

function sekundCounter() {
  let sekundVal = setInterval(() => {
    console.log(+sekund.innerHTML);
    if (+sekund.innerHTML) {
      sekund.innerHTML = +sekund.innerHTML - 1;
    } else {
      clearInterval(sekundVal);
      wrappergame.innerHTML = "";
      endmodal.classList.remove("-translate-x-[1200px]");
      //
      console.log(answers);
      let answersCount = Math.ceil(answers.length / 2);
      let countTrue = 0;

      for (let i = 0; i < answers.length; i++) {
        console.log(easy[answers[i]]);
        let level = localStorage.getItem("level");
        console.log(level);
        if (level == 1) {
          // console.log(easy[answers[i]]);
          console.log(
            easy[answers[i]],
            answers[i + 1],
            easy[answers[i + 1]],
            answers[i],
            "buuuu"
          );
          if (
            easy[answers[i]] == answers[i + 1] ||
            easy[answers[i + 1]] == answers[i]
          ) {
            countTrue++;
          }
        } else if (level == 2) {
          console.log(medium[answers[i]]);
          if (medium[answers[i]] === answers[i + 1]) {
            countTrue++;
          }
        } else if (level == 3) {
          console.log(hard[answers[i]]);
          if (hard[answers[i]] === answers[i + 1]) {
            countTrue++;
          }
        }
        console.log(countTrue);
        i++;
      }
      console.log(countTrue);
      resultfind.innerText = `${countTrue}`;

      // SHU  YERDA HAMMASINI JOYLAB CHIQISH KERAK
    }
  }, 1000);
}

//
//
// /
// /
//
//

function getMainRandomValues(num) {
  let elements = [
    "4",
    "8",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96",
  ];

  let route = ["top", "bottom", "left", "right"];
  let newarray = [];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  // ///////////
  function getRandomObjects(num) {
    console.log(num);
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      let arr;
      if (num === 1) {
        arr =
          Object.entries(easy)[getRandomInt(0, Object.keys(easy).length - 1)];
      } else if (num === 2) {
        arr =
          Object.entries(medium)[getRandomInt(0, Object.keys(easy).length - 1)];
      } else if (num === 3) {
        arr =
          Object.entries(hard)[getRandomInt(0, Object.keys(easy).length - 1)];
      }

      if (randomArr.includes(arr)) {
        i--;
      } else {
        randomArr.push(arr);
      }
    }
    // console.log(randomArr);

    let arrOrg = [];
    for (let i = 0; i < randomArr.length; i++) {
      arrOrg.push(...randomArr[i]);
    }
    console.log(arrOrg);
    return arrOrg;
  }
  let arrtoset = getRandomObjects(num);
  let colorCount = 0;
  //  BU YER FOR

  for (let i = 0; i < arrtoset.length; i++) {
    // console.log(i);

    let firstRoute = `${route[getRandomInt(0, 4)]}-${
      elements[getRandomInt(0, elements.length - 1)]
    }`;
    let secondRoute = `${route[getRandomInt(0, 4)]}-${
      elements[getRandomInt(0, elements.length - 1)]
    }`;
    while (
      firstRoute.split("-")[0] === secondRoute.split("-")[0] ||
      ((route[0] === firstRoute.split("-")[0] ||
        route[1] === firstRoute.split("-")[0]) &&
        (route[1] === secondRoute.split("-")[0] ||
          route[0] === secondRoute.split("-")[0])) ||
      ((route[2] === firstRoute.split("-")[0] ||
        route[3] === firstRoute.split("-")[0]) &&
        (route[2] === secondRoute.split("-")[0] ||
          route[3] === secondRoute.split("-")[0])) ||
      newarray.includes(`${firstRoute} ${secondRoute}`) ||
      newarray.includes(`${secondRoute} ${firstRoute}`)
    ) {
      secondRoute = `${route[getRandomInt(0, 4)]}-${
        elements[getRandomInt(0, elements.length - 1)]
      }`;
    }
    newarray.push(`${firstRoute} ${secondRoute}`);

    let colors = ["green-400", "orange-500", "blue-500"];
    if (colorCount === 3) {
      colorCount = 0;
    }
    let div = createElement(
      "div",
      `shadow shadow-white z-40 absolute px-1 cursor-pointer inline-block bg-${colors[colorCount]} ${firstRoute} ${secondRoute}`,
      arrtoset[i]
    );
    colorCount++;

    wrappergame.append(div);
  }
}
let answers = [];
const answersWrapper = document.querySelector(".answers");
wrappergame.addEventListener("click", (e) => {
  console.log(e.target);

  if (
    e.target.innerText.length < 40 &&
    e.target.classList.contains("absolute")
  ) {
    console.log(answers.length);
    if (answers.length % 2 == 0) {
      let elem = createElement(
        "div",
        "flex gap-2 border-y border-white",
        `
      <h1>${e.target.innerText}</h1>
      <h1>bo'sh</h1>
   `
      );
      elem.id = `unique-${Math.ceil((answers.length + 1) / 2)}`;
      answersWrapper.append(elem);
    } else {
      let answerPara = answersWrapper.querySelector(
        `#unique-${Math.ceil(answers.length / 2)}`
      );
      console.log(answerPara);
      let hs = answerPara.getElementsByTagName("h1");
      console.log(hs);
      hs[1].innerText = e.target.innerText;
    }
    answers.push(e.target.innerText);
    wrappergame.removeChild(e.target);
    if (!wrappergame.innerText) {
      console.log("O'yin tugadi");
      hardButton.classList.remove("bg-green-500");
      easyButton.classList.remove("bg-green-500");
      mediumButton.classList.remove("bg-green-500");
    }
  }
});
