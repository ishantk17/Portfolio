
//typewriter animation
var TxtType = function(el, toRotate, period) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 2000;
   this.txt = '';
   this.tick();
   this.isDeleting = false;
};

TxtType.prototype.tick = function() {
   var i = this.loopNum % this.toRotate.length;
   var fullTxt = this.toRotate[i];

   if (this.isDeleting) {
   this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
   this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

   var that = this;
   var delta = 200 - Math.random() * 100;

   if (this.isDeleting) { delta /= 2; }

   if (!this.isDeleting && this.txt === fullTxt) {
   delta = this.period;
   this.isDeleting = true;
   } else if (this.isDeleting && this.txt === '') {
   this.isDeleting = false;
   this.loopNum++;
   delta = 500;
   }

   setTimeout(function() {
   that.tick();
   }, delta);
};

window.onload = function() {
   var elements = document.getElementsByClassName('typewrite');
   for (var i=0; i<elements.length; i++) {
       var toRotate = elements[i].getAttribute('data-type');
       var period = elements[i].getAttribute('data-period');
       if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period);
       }
   }
   // INJECT CSS
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
   document.body.appendChild(css);
};
// changing theme
var yellowBtn=document.getElementById("yellowbtn");
var blueBtn=document.getElementById("bluebtn");
var crimsonBtn=document.getElementById("crimsonbtn");
var nav=document.getElementsByClassName("navbar");
var Btn1=document.querySelectorAll(".btn-lg");
var SecondLine=document.querySelectorAll(".secondline");
var SkillSection=document.querySelectorAll(".SkillSection");

yellowBtn.addEventListener("click",function(){
  document.querySelector(".navbar").style.backgroundColor="#ffc107";
  for(var i=0;i<3;i++){
   if(Btn1[i].classList.contains("btn-danger")){
       Btn1[i].classList.remove("btn-danger");
       Btn1[i].classList.add("btn-warning");
     }
     else if(Btn1[i].classList.contains("btn-primary")){
       Btn1[i].classList.remove("btn-primary");
       Btn1[i].classList.add("btn-warning");
     }
     document.querySelectorAll("#servicescontent i")[i].style.color="#ffc107";
  }
  for(var j=0;j<8;j++){
      SecondLine[j].style.color="#ffc107";
  }
  for(var k=0;k<5;k++){
   SkillSection[k].style.backgroundColor="#ffc107";
  }
  document.querySelector("#text3 span").style.color="yellow !important" ;
  document.querySelector("#text3 span").style.color="#ffc107 "
  document.querySelector("footer span").style.color="#ffc107";
  document.querySelectorAll("#servicescontent i")[1].style.color="#ffc107";
 
  
});
blueBtn.addEventListener("click",function(){
  document.querySelector(".navbar").style.backgroundColor="#0d6efd";
  for(var i=0;i<3;i++){
   if(Btn1[i].classList.contains("btn-danger")){
       Btn1[i].classList.remove("btn-danger");
       Btn1[i].classList.add("btn-primary");
     }
     else if(Btn1[i].classList.contains("btn-warning")){
       Btn1[i].classList.remove("btn-warning");
       Btn1[i].classList.add("btn-primary");
     }
     document.querySelectorAll("#servicescontent i")[i].style.color="#0d6efd";
  }
  for(var j=0;j<8;j++){
   SecondLine[j].style.color="#0d6efd";
  }
  for(var k=0;k<5;k++){
   SkillSection[k].style.backgroundColor="#0d6efd";
  }
  
  
  document.querySelector("footer span").style.color="#0d6efd";
}); 
crimsonBtn.addEventListener("click",function(){
  document.querySelector(".navbar").style.backgroundColor="crimson";
  for(var i=0;i<3;i++){
   if(Btn1[i].classList.contains("btn-primary")){
       Btn1[i].classList.remove("btn-primary");
       Btn1[i].classList.add("btn-danger");
     }
     else if(Btn1[i].classList.contains("btn-warning")){
       Btn1[i].classList.remove("btn-warning");
       Btn1[i].classList.add("btn-danger");
     
     }
     document.querySelectorAll("#servicescontent i")[i].style.color="crimson";
  }
  for(var j=0;j<8;j++){
   SecondLine[j].style.color="crimson";
  }
  for(var k=0;k<5;k++){
   SkillSection[k].style.backgroundColor="crimson";
  }
  document.querySelector("footer span").style.color="crimson";
});
  

