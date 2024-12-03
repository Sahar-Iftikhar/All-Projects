document.getElementById("imag").src="image/of.png";
document.getElementById("text").innerHTML="Off";

    document.getElementById("off").style.backgroundColor="rgb(245, 188, 0)";
    document.getElementById("off").style.color="black";

    function btnOn(){
      document.getElementById("imag").src="image/on.png";  
      document.getElementById("text").innerHTML="On";
      document.getElementById("on").style.backgroundColor="rgb(245, 188, 0)";
      document.getElementById("on").style.color="white";
      document.getElementById("off").style.backgroundColor="white";
      document.getElementById("off").style.color="black";

    }

    function btnOf(){
      document.getElementById("imag").src="image/of.png";
      document.getElementById("text").innerHTML="Off";
      document.getElementById("off").style.backgroundColor="rgb(245, 188, 0)";
      document.getElementById("off").style.color="white";
      document.getElementById("on").style.backgroundColor="white";
      document.getElementById("on").style.color="black";
    }
