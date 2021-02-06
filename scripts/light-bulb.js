const turnOn = () => {
  let light = document.getElementById("light-bulb");
  light.style.backgroundColor = "#fff89f";
  light.setAttribute("light", "on");
};

const on = document.getElementById("on");
on.addEventListener("click", () => turnOn());

const turnOff = () => {
  let light = document.getElementById("light-bulb");
  light.style.backgroundColor = "#6a6f80";
  light.setAttribute("light", "off");
};

const off = document.getElementById("off");
off.addEventListener("click", () => turnOff());

const toggleLight = () => {
  let currentVal = document.getElementById("light-bulb").getAttribute("light");

  if (currentVal === "on") {
    turnOff();
  } else {
    turnOn();
  }
};

const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => toggleLight());

const bulbOut = () => {
  const btns = document
    .querySelector(".light-buttons")
    .querySelectorAll("button");

  btns.forEach((btn) => {
    btn.setAttribute("disabled", true);
  });

  document.getElementById("light-bulb").remove();
  document.querySelector(".light-buttons").style.height = "100%";
};

const end = document.getElementById("end");
end.addEventListener("click", () => bulbOut());
