function Newsletter (fullname, email) {
  this.fullName = fullname;
  this.emailAddress = email;
}
$(document).ready(function() {
  $("#newsletter-form").submit(function(event){
    event.preventDefault();
    let inputtedName = $("#fullname").val();
    let inputtedEmail = $("#email").val();
    let newNewsletter = Newsletter(inputtedName, inputtedName);
    alert("Hello " + fullName + ", thank you for signing up for our newsletter.")


  });
});