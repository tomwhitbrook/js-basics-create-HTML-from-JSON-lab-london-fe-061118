document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
 
})

  document.getElementById("title").innerHTML = movies["Titanic"]["title"];
  
  document.getElementById("director").innerHTML = movies["Titanic"]["director"];

  document.getElementById("genre").innerHTML = movies["Titanic"]["genre"];

  document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"];

  document.getElementById("poster").src = movies["Titanic"]["poster"];

  document.getElementById("description").innerHTML = movies["Titanic"]["description"];

  document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"];




var i;
document.getElementById("cast").innerHTML = " "
for (i = 0; i < movies["Titanic"]["cast"].length; i++) { 
    document.getElementById("cast").innerHTML += movies["Titanic"]["cast"][i]["actor"] + " as ";
    document.getElementById("cast").innerHTML += movies["Titanic"]["cast"][i]["role"] + "<br>";
}

var j;
document.getElementById("reviews").innerHTML = " "
for (j = 0; j < movies["Titanic"]["reviews"].length; j++) { 
    document.getElementById("reviews").innerHTML += movies["Titanic"]["reviews"][j]["username"] + " says ";
    document.getElementById("reviews").innerHTML += movies["Titanic"]["reviews"][j]["content"] + "<br>";
}

document.getElementById("Terminator 2").addEventListener("click", (e) => {

 document.getElementById("title").innerHTML = movies["Terminator 2"]["title"];
  
  document.getElementById("director").innerHTML = movies["Terminator 2"]["director"];

  document.getElementById("genre").innerHTML = movies["Terminator 2"]["genre"];

  document.getElementById("filmRating").innerHTML = movies["Terminator 2"]["filmRating"];

  document.getElementById("poster").src = movies["Terminator 2"]["poster"];

  document.getElementById("description").innerHTML = movies["Terminator 2"]["description"];

  document.getElementById("audienceScore").innerHTML = movies["Terminator 2"]["audienceScore"];


var k;
document.getElementById("cast").innerHTML = " "
for (k = 0; k < movies["Terminator 2"]["cast"].length; k++) {
    document.getElementById("cast").innerHTML += movies["Terminator 2"]["cast"][k]["actor"] + " as ";
    document.getElementById("cast").innerHTML += movies["Terminator 2"]["cast"][k]["role"] + "<br>";
    console.log("dance")
}

var j;
document.getElementById("reviews").innerHTML = " "
for (j = 0; j < movies["Terminator 2"]["reviews"].length; j++) { 
    document.getElementById("reviews").innerHTML += movies["Terminator 2"]["reviews"][j]["username"] + " says ";
    document.getElementById("reviews").innerHTML += movies["Terminator 2"]["reviews"][j]["content"] + "<br>";
}
})

document.getElementById("Titanic").addEventListener("click", (e) => {

  document.getElementById("title").innerHTML = movies["Titanic"]["title"];
  
  document.getElementById("director").innerHTML = movies["Titanic"]["director"];

  document.getElementById("genre").innerHTML = movies["Titanic"]["genre"];

  document.getElementById("filmRating").innerHTML = movies["Titanic"]["filmRating"];

  document.getElementById("poster").src = movies["Titanic"]["poster"];

  document.getElementById("description").innerHTML = movies["Titanic"]["description"];

  document.getElementById("audienceScore").innerHTML = movies["Titanic"]["audienceScore"];




var i;
document.getElementById("cast").innerHTML = " "
for (i = 0; i < movies["Titanic"]["cast"].length; i++) { 
    document.getElementById("cast").innerHTML += movies["Titanic"]["cast"][i]["actor"] + " as ";
    document.getElementById("cast").innerHTML += movies["Titanic"]["cast"][i]["role"] + "<br>";
}

var j;
document.getElementById("reviews").innerHTML = " "
for (j = 0; j < movies["Titanic"]["reviews"].length; j++) { 
    document.getElementById("reviews").innerHTML += movies["Titanic"]["reviews"][j]["username"] + " says ";
    document.getElementById("reviews").innerHTML += movies["Titanic"]["reviews"][j]["content"] + "<br>";
}

})