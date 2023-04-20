imagesSrc = ["./Assets/slide1.png", "/Assets/slide2.png", "/Assets/slide3.png"];

let boxImage = document.getElementsByTagName("img")[1];
let index = 0;
let arrowOne = document.getElementsByClassName(
  "fa-sharp fa-solid fa-arrow-right"
)[0];

let arrowTwo = document.getElementsByClassName(
  "fa-sharp fa-solid fa-arrow-left"
)[0];

let ponints = document.getElementsByClassName(" fa-circle");

let form = document.getElementsByTagName("form")[0];

let stickyLink = document.getElementById("sticky-link");

let inputs = document.getElementsByTagName("input");
let submitBtn = document.getElementById("submit");
let textares = document.getElementsByTagName("textarea")[0];
let errorMeg = document.getElementById("error");
let interval;

const next = () => {
  if (index < imagesSrc.length - 1) {
    index++;
    boxImage.src = imagesSrc[index];
    ponints[index].className = "fa-solid fa-circle";
    ponints[index - 1].className = "fa-regular fa-circle";
  }
};

const previous = () => {
  if (index > 0) {
    index--;
    boxImage.src = imagesSrc[index];
    ponints[index + 1].className = "fa-regular fa-circle";
    ponints[index].className = "fa-solid fa-circle";
  }
};

function startIntrval() {
  interval = setInterval(function () {
    if (index < ponints.length - 1) {
      next();
    } else if (index === ponints.length - 1) {
      while (index > 0) {
        previous();
      }
    }
  }, 6000);
}

function stopIntrval() {
  clearInterval(interval);
}

(function autoIntrval() {
  startIntrval();
})();

arrowOne.addEventListener("click", () => {
  stopIntrval();
  next();
  startIntrval();
});

arrowTwo.addEventListener("click", () => {
  stopIntrval();
  previous();
  startIntrval();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", () => {
  let inputvalue1 = inputs[1].value;
  let inputvalue2 = inputs[2].value;
  let textareaValue = textares.value;
  let pattren1 = /^[^\d]*$/;
  let pattren2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (inputvalue1 === "") {
    errorMeg.innerHTML = "Please provide a name";
  } else if (pattren1.test(inputvalue1) === false) {
    errorMeg.innerHTML = "Name must not containe numbers!";
  } else if (inputvalue2 === "") {
    errorMeg.innerHTML = "Please provide an email";
  } else if (pattren2.test(inputvalue2) === false) {
    errorMeg.innerHTML = "Email is not valid!";
  } else if (textareaValue === "") {
    errorMeg.innerHTML = "Please provide a message";
  } else {
    errorMeg.innerHTML = "Message had been sent sucessfuly!";
    errorMeg.style.color = "green";
    inputs[1].value = "";
    inputs[2].value = "";
    textares.value = "";
    setTimeout(() => {
      errorMeg.innerHTML = "";
    }, 2000);
  }
});

stickyLink.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

const scrolling = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    stickyLink.style.display = "block";
  } else {
    stickyLink.style.display = "none";
  }
};

window.onscroll = () => scrolling();
