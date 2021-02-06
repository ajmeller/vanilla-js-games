const addToTotal = (btn) => {
  const btnTxt = btn.innerHTML;
  const price = getNumberFromText(btnTxt);

  const totalTxt = document.getElementById("vending-total").innerHTML;
  const total = getNumberFromText(totalTxt);

  const newTotal = total + price;
  const displayTotal = `$${newTotal}.00`;

  document.getElementById("vending-total").innerHTML = displayTotal;
};

const getNumberFromText = (text) => {
  const txt = text.slice(text.indexOf("$") + 1);
  const number = parseInt(txt);
  return number;
};

const vendingBtn = document.querySelectorAll(".vending-button");

vendingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addToTotal(e.target);
  });
});

const clear = document.getElementById("clear-total");

clear.addEventListener("click", () => {
  document.getElementById("vending-total").innerHTML = "$0.00";
});
