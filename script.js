let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("Invalid Expression");
    clearDisplay();
  }
}

function toggleDarkMode() {
  const body = document.body;
  const label = document.getElementById("modeLabel");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    label.textContent = "🌙 Dark";
  } else {
    label.textContent = "☀️ Light";
  }
}
