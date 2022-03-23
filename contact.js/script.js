 
 $(function(){
    $("#submit").submit(function(event){
        event.preventDefault()
        var message = `Thank you for the feedback`
        $("#output").append(message)
    });
});