//FIRST CODE OF UNKNOWN SOURCE
// var flowin=document.getElementById("animatesandbox");
// var observer=new IntersectionObserver((
//     entries)=>{entries((entry)=>{
// console.log(entry)
// if(entry.isIntersecting){
//     entry.target.classList.add('animate__bounce');
// }else{
//     entry.target.classList.remove('animate__bounce');
// }
//     });
// });
// flowin((el)=>PerformanceObserverEntryList.observe(el));


//LONG VIDEO
// const scrollElements= document.querySelectorAll(".js-scroll");

// const elementInview = (el, didivend =1) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (
//         elementTop <=(window.innerHeight || document.documentElement.clientHeight)/dividend);
// };

// //ORIGINAL ANIMATE ON SCROLL CODE
// const observer=new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{console.log(entry)
// if(entry.isIntersecting){
//     entry.target.classList.add("animate__bounce");

// }else{entry.target.classList.remove("animate__bounce")}
// });
// });

// const hiddenElements=document.querySelectorAll("animate__animated");
// hiddenElements.forEach((el)=>observer.observe(el));








//WORKING CODE FOR ANIMATE ON SCROLL
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{console.log(entry)
if(entry.isIntersecting){
    entry.target.classList.replace("animate__bounceOut","animate__fadeInLeft");

}
// else{entry.target.classList.replace("animate__fadeInLeft","animate__bounceOut")}
});
});


    var backg=document.querySelectorAll(".animate__animated");
    backg.forEach((el)=>observer.observe(el));





// UNFINISHED HIGHLIGHT ON HOVER ON PRICE BOXES
// var pricebox=document.querySelectorAll("#pricebox");
// pricbox.addEventListener("mouseenter",pricColor);
// pricebox.forEach((el)=>{
//         e.preventDefault();
//    // e.target.style.border="2px solid #ef6603";
//     e.target.classList.add(" featured");
// }
// )

// UNSUCCESSFUL HIGHLIGHT ON HOVER ON PRICE BOXES
// var pricebox=document.querySelectorAll("pricebox");
// for(var x=0;x<service.length;x++){
//     var pricbox=pricebox[x];
//     pricbox.addEventListener("mouseenter",pricColor);
//     function pricColor(e){
//         e.preventDefault();
//    // e.target.style.border="2px solid #ef6603";
//     pricebox.classList.add("featured");
// }

// pricbox.addEventListener("mouseleave",pricDiscolor);
//     function pricDiscolor(e){
//         e.preventDefault();
//         // e.target.style.border="none";
//     pricebox.classList.remove("featured");
// }
// }




// border: 2px solid #ef6603;





var service= document.querySelectorAll("#servic");
for(var x=0;x<service.length;x++){
    var servic=service[x];
    servic.addEventListener("mouseenter",servicDark);
    function servicDark(e){
    e.target.style.backgroundColor="rgba(42, 44, 57)";
}

servic.addEventListener("mouseleave",servicLight);
    function servicLight(e){
    e.target.style.backgroundColor="#fff";
  
}
}







//UNFINISHED COUNTUP CODE
// var count=document.getElemetById("count");
// count.addEventListener("click",coUnt);
// function coUnt(e){
//     var current=e.target.innerHtml;
//     setInterval(function(){
//         current++;
//     },1000)
// }




// UNSUCCESSFUL HIGHLIGHT ON HOVER ON SERVICE BOXES
// var servicebox= document.querySelectorAll("#servicebox");
// for(var x=0;x<service.length;x++){
//     var servicbox=servicebox[x];
//     servicbox.addEventListener("mouseenter",servicboxDark);
//     function servicboxDark(e){
//     e.target.style.backgroundColor="#363636";
// }

// servicbox.addEventListener("mouseleave",servicboxLight);
//     function servicboxLight(e){
//     e.target.style.backgroundColor="#fff";
  
// }
// }
















// var service= document.querySelectorAll("#servic");
// for(var x=0;x<service.length;x++){
//     var servic=service[x];
//     servic.addEventListener("mouseenter",servicDark);
//     function servicDark(e){
//     e.target.style.backgroundColor="#363636";
// }

// servic.addEventListener("mouseleave",servicLight);
//     function servicLight(e){
//     e.target.style.backgroundColor="#fff";
  
// }
// }


































































