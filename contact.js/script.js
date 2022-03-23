                    // AUTOMATIC YEAR UPDATE 
let date = new Date().getFullYear();
let dateTag = document.getElementById("year");
dateTag.innerHTML = `Copyright(C) <br> ${date}`;

 $(function(){
    $("#submit").submit(function(event){
        event.preventDefault()
        var message = `Thank you for the feedback`
        $("#output").append(message)
    });
});
