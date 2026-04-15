function tempConverter() {
  let promptAgain = "yes";
  while (promptAgain === "yes") {
    let celsiusInput = prompt("Enter temperature in Celsius:");
    let celsius = Number(celsiusInput);
    if (!celsius) {
      alert("Invalid entry");
    } else {
      let fahrenheit = (celsius * 9) / 5 + 32;
      alert(`${celsius}°C is equivalent to ${fahrenheit}°F`);
    }
    promptAgain = prompt("Want another conversion? (yes/no)");
  }
}

export { tempConverter };
