function handleSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var submissionMessage = "Form submitted!\n";
  submissionMessage += "Name: " + name + "\n";
  submissionMessage += "Email: " + email + "\n";
  submissionMessage += "Message: " + message;

  alert(submissionMessage);

  return false;
}
