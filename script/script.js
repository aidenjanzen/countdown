document.addEventListener("DOMContentLoaded", function(){
var countDownDate = new Date("Dec 6, 2023 19:25:00").getTime();

var x = setInterval(function () {

    var todayDate = new Date().getTime();

    var timeUntil = countDownDate - todayDate; 

    var days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = String(days).padStart(2, '0') + ":" + String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0'); //puts the script into the <P> with the id demo
    
    if (days < 61 && days > 59){
        document.getElementById("text").innerHTML = "two months left! she loves you "
    }
    else if (days < 30 && days > 25) {
        document.getElementById("text").innerHTML = "one month left, feels like no time at all!"
    }
    else if (days < 21 && days > 19){
        document.getElementById("text").innerHTML = "three weeks left, she's coming back to you "
    }
    else if (days < 14 && days > 12){
        document.getElementById("text").innerHTML = "two weeks left, almost there! "
    }    
    else if (days < 7 && days > 5){
        document.getElementById("text").innerHTML = "one week left, so close! "
    }  
    else if (days < 5 && days > 4){
        document.getElementById("text").innerHTML = "five days left!! "
    }   
    else if (days < 4 && days > 3){
        document.getElementById("text").innerHTML = "four days left!! "
    } 
    else if (days < 3 && days > 2){
        document.getElementById("text").innerHTML = "three days left!! "
    } 
    else if (days < 2 && days > 1){
        document.getElementById("text").innerHTML = "two days left!! "
    } 
    else if ((days < 1 && days >= 0) && (hours < 24 && hours >0)){
        document.getElementById("text").innerHTML = "one day left!!! "
    }   
    else if (timeUntil < 0) {
        clearInterval(x);
        document.getElementById("text").innerHTML = "my baby is coming home \u2661";
    }

}, 1000);

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {   
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

var iframe = document.querySelector("iframe");
iframe.addEventListener("mouseover", function() {
    cursor.style.display = 'none';
  })
iframe.addEventListener("mouseleave", function() {
    cursor.style.display = 'block';
})

});