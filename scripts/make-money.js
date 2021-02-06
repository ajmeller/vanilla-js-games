const submit = document.getElementById("make-money");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  const moneyForm = document.getElementById("make-money");
  const moneyData = new FormData(moneyForm);

  const coinType = moneyData.get("coinType");
  const coinNum = moneyData.get("coinNum");

  let i = coinNum;

  while (i > 0) {
    addNewCoin(coinType);
    i--;
  }
});

const addNewCoin = (coinType) => {
  const newCoin = document.createElement("span");
  newCoin.classList.add("coin", coinType.toLowerCase());

  const coinLetter = document.createElement("span");
  coinLetter.innerText = coinType.slice(0, 1);
  coinLetter.classList.add("coin-letter");
  newCoin.append(coinLetter);

  document.getElementById("coin-area").append(newCoin);

  newCoin.addEventListener("click", (e) => {
    newCoin.remove();
  });

  newCoin.addEventListener("mouseenter", (e) => {
    newCoin.style.opacity = "0.75";
  });

  newCoin.addEventListener("mouseleave", (e) => {
    newCoin.style.opacity = "1";
  });
};
