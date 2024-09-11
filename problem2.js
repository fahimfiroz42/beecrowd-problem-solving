
function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
      return "Invalid Input";
    }
  
    if (
      typeof obj.name !== "string" ||
      typeof obj.testScore !== "number" ||
      typeof obj.schoolGrade !== "number" ||
      typeof obj.isFFamily !== "boolean"
    ) {
      return "Invalid Input";
    }
    if (obj.testScore > 50 || obj.schoolGrade > 30) {
      return "Invalid Input";
    }
  
    let totalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
      totalScore += 20;
    }
    if (totalScore >= 80) {
      return true;
    } else {
      return false;
    }
  }