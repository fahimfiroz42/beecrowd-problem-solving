
function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0) {
      return "Invalid Input";
    } else if (income < expenses) {
      return "Invalid Input";
    }
  
    let restOfIncome = income - expenses;
  
    let taxOnIncome = restOfIncome * 0.2;
    return taxOnIncome;
  }