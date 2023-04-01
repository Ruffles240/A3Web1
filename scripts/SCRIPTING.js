const toggleButton = document.getElementById("dark_mode");
const myDiv = document.body;

// Define two image URLs
const image1 = "../images/img2.avif";
const image2 = "../images/dark_mode.jpg";

let darkToggle=false;

function myFunction() {




  if(!darkToggle){
  document.getElementById('intro').style.backgroundImage = 'url("images/dark_mode.jpg")';
  document.body.style.color = 'white';
  document.getElementById('dark_mode').style.color="white"
  
  document.body.style.backgroundColor = "var(--main_night)";
  

  darkToggle=true;

  document.querySelector('header').style.backgroundColor="var(--header_night)";
  document.getElementById('dark_mode').innerHTML = "Day Mode";
  document.getElementById('dark_mode').style.backgroundColor="var(--header_night)";
  document.getElementById('education').classList.remove("dayBackGround1")
  document.getElementById('education').classList.add("nightBackGround1");
 
 
  }

  else
  
  {
    document.getElementById('intro').style.backgroundImage = 'url("images/img2.avif")';
    document.body.style.color = 'black';
    

    document.body.style.backgroundColor= "var(--main_day)";
    document.getElementById('dark_mode').style.color="black";
    darkToggle=false;
    document.querySelector('header').style.backgroundColor="var(--header_day)";
    document.getElementById('dark_mode').innerHTML = "Night Mode";
    document.getElementById('dark_mode').style.backgroundColor = "var(--header_day)";
    document.getElementById('education').classList.remove("nightBackGround1");
    document.getElementById('education').classList.add("dayBackGround1");
  }

}