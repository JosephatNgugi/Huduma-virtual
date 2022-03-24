function Newsletter (email) {

  this.emailAddress = email;
}
$(document).ready(function() {
  $("#newsletter-form").submit(function(event){
    event.preventDefault();    
    let inputtedEmail = $("#email").val();
    let newNewsletter = Newsletter(inputtedEmail);
    let message = "Thank you for subscribing!";
    alert(message);
   


  });
});