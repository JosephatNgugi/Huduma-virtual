function Newsletter (email) {

  this.emailAddress = email;
}
$(document).ready(function() {
  $("#newsletter-form").submit(function(event){
    event.preventDefault();
    // let inputtedName = $("#fullname").val();
    let inputtedEmail = $("#email").val();
    let newNewsletter = Newsletter(inputtedEmail);
    let message = "Thank you for subscribing!";
    $('#output').append(message);

    // alert()


  });
});