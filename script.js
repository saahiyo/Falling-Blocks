document.addEventListener("DOMContentLoaded", function() {

var container = document.querySelector(".container");
var count = 252;
for(let i = 0; i < count ; i ++){
   let box = document.createElement("div")
       box.className = "box";
       container.appendChild(box)
};

   var boxes = document.querySelectorAll(".box");
   boxes.forEach(function(box) {
     let duration = Math.random() * 3;
     let changeColor = Math.random() * 360;
     box.addEventListener("mouseover", function() {
       box.classList.add("active");
       box.style.animationDuration = (1 + duration) + 's';
       box.style.filter = 'hue-rotate('+changeColor+'deg)'
     });
   });
  
 


 });