/*
function generateAndSetRandomColorForBox1 () {
    let hexDigits = '0123456789ABCDEF';
    let newHex = '#';
    for (let i = 0; i < 6; i++) {
  newHex += hexDigits[Math.floor(Math.random() * 16)]; 
    }
    document.getElementById("color1HexCode").innerHTML = newHex;
    document.getElementsByClassName("box1")[0].style.background = newHex;
    document.getElementsByClassName("box1")[0].style.borderColor = newHex;
  }
  
  function generateAndSetRandomColorForBox2 () {
    let hexDigits = '0123456789ABCDEF';
    let newHex = '#';
    for (let i = 0; i < 6; i++) {
  newHex += hexDigits[Math.floor(Math.random() * 16)]; 
    }
    document.getElementById("color2HexCode").innerHTML = newHex;
    document.getElementsByClassName("box2")[0].style.background = newHex;
    document.getElementsByClassName("box2")[0].style.borderColor = newHex;
  }
  
  function generateAndSetRandomColorForBox3 () {
    let hexDigits = '0123456789ABCDEF';
    let newHex = '#';
    for (let i = 0; i < 6; i++) {
  newHex += hexDigits[Math.floor(Math.random() * 16)]; 
    }
    document.getElementById("color3HexCode").innerHTML = newHex;
    document.getElementsByClassName("box3")[0].style.background = newHex;
    document.getElementsByClassName("box3")[0].style.borderColor = newHex;
  }
  
  
  document.getElementById("box1Button").addEventListener("click", generateAndSetRandomColorForBox1);
  document.getElementById("box2Button").addEventListener("click", generateAndSetRandomColorForBox2);
  document.getElementById("box3Button").addEventListener("click", generateAndSetRandomColorForBox3);
  
  
  document.getElementById("body").addEventListener("keydown", generateAndSetRandomColorForBox1);
  document.getElementById("body").addEventListener("keydown", generateAndSetRandomColorForBox2);
  document.getElementById("body").addEventListener("keydown", generateAndSetRandomColorForBox3);
  */

  
  function generateAndSetRandomColorForBox1 () {
    let a = Math.floor(Math.random() * 361);
    let newHSL = 'hsl(' + a + ', 100%, 50%)';
    document.getElementById("color1HexCode").innerHTML = newHSL;
    document.getElementsByClassName("box1")[0].style.background = newHSL;
    document.getElementsByClassName("box1")[0].style.borderColor = newHSL;
  }

  document.getElementById("box1Button").addEventListener("click", generateAndSetRandomColorForBox1);



  function generateAndSetRandomColorForBox2 () {
    let a = Math.floor(Math.random() * 361);
    let newHSL = 'hsl(' + a + ', 100%, 50%)';
    document.getElementById("color2HexCode").innerHTML = newHSL;
    document.getElementsByClassName("box2")[0].style.background = newHSL;
    document.getElementsByClassName("box2")[0].style.borderColor = newHSL;
  }

  document.getElementById("box2Button").addEventListener("click", generateAndSetRandomColorForBox2);


  function generateAndSetRandomColorForBox3 () {
    let a = Math.floor(Math.random() * 361);
    let newHSL = 'hsl(' + a + ', 100%, 50%)';
    document.getElementById("color3HexCode").innerHTML = newHSL;
    document.getElementsByClassName("box3")[0].style.background = newHSL;
    document.getElementsByClassName("box3")[0].style.borderColor = newHSL;
  }

  document.getElementById("box3Button").addEventListener("click", generateAndSetRandomColorForBox3);


  document.getElementById("body").addEventListener("keydown", generateAndSetRandomColorForBox1);
  document.getElementById("body").addEventListener("keydown", generateAndSetRandomColorForBox2);
  document.getElementById("body").addEventListener("keydown", generateAndSetRandomColorForBox3);
/*
  function generateRelatedToBox1 () {
    let a = document.getElementById("color1HexCode").innerHTML;
    let b = a[4] + a[5] + a[6];
    let newHSL4 = 'hsl(' + b + ', 100%, 62.5%)';
    let newHSL5 = 'hsl(' + b + ', 100%, 75%)';
    let newHSL6 = 'hsl(' + b + ', 100%, 87.5%)';

    document.getElementById("color4HexCode").innerHTML = newHSL4;
    document.getElementsByClassName("box4")[0].style.background = newHSL4;
    document.getElementsByClassName("box4")[0].style.borderColor = newHSL4;

    document.getElementById("color5HexCode").innerHTML = newHSL5;
    document.getElementsByClassName("box5")[0].style.background = newHSL5;
    document.getElementsByClassName("box5")[0].style.borderColor = newHSL5;

    document.getElementById("color6HexCode").innerHTML = newHSL6;
    document.getElementsByClassName("box6")[0].style.background = newHSL6;
    document.getElementsByClassName("box6")[0].style.borderColor = newHSL6;

    document.getElementById("color4HexCode").style.display = "block";
    document.getElementById("color5HexCode").style.display = "block";
    document.getElementById("color6HexCode").style.display = "block";
  }

  document.getElementById("box1Button").addEventListener("dblclick", generateRelatedToBox1);
  */