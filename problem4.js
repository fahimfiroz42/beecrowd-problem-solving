function sendNotification(email) {
    if (!email.includes("@")) {
      return "Invalid Email";
    }
  
    let emailArray = email.split("@");
    let userName = emailArray[0];
    let domainName = emailArray[1];
  
    let notification = userName + " sent you an email from " + domainName;
    return notification;
  }
  