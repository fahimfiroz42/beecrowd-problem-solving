function checkDigitsInName(name) {
    if (typeof name !== "string") {
      return "Invalid Input";
    }
    let convertName = name.split("");
    let numbers = "0123456789";
    for (let char of convertName) {
      if (numbers.includes(char)) {
        return true;
      }
    }
    return false;
  }