const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
      }
    } else if (value === "AC") {
      string = "";
      input.value = "";
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});

document.getElementById("themeSwitcher").addEventListener("change", () => {
  document.body.classList.toggle("light");
});
