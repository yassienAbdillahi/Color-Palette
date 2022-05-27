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