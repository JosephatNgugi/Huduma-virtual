// AUTOMATIC YEAR UPDATE 
let date = new Date().getFullYear();
let dateTag = document.getElementById("year");
dateTag.innerHTML = `Copyright(C) <br> ${date}`;