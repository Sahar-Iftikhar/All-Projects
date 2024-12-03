let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mon = document.getElementById("mon");  
let date = document.getElementById("date");  
let year = document.getElementById("year"); 

setInterval(()=>{
  let currentTime = new Date();

  // console.log(currentTime.getHours());
  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
  mon.innerHTML = (currentTime.getMonth()) + currentTime.getMonth();
   // Get current month (add 1 since getMonth() is zero-based)  
   mon.innerHTML = (currentTime.getMonth() + 1 < 10 ? "0" : "") + (currentTime.getMonth() + 1);  
  
   // Get current day  
   date.innerHTML = (currentTime.getDate() < 10 ? "0" : "") + currentTime.getDate();  
 
   // Get current year  
   year.innerHTML = currentTime.getFullYear();  
},1000)
