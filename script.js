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

  function generateRelated1 () {
    let a = Math.floor(Math.random() * 361);
    let newHSL4 = 'hsl(' + a + ', 100%, 62.5%)';
    let newHSL5 = 'hsl(' + a + ', 100%, 75%)';
    let newHSL6 = 'hsl(' + a + ', 100%, 87.5%)';

    document.getElementById("color4HexCode").innerHTML = newHSL4;
    document.getElementsByClassName("box4")[0].style.background = newHSL4;
    document.getElementsByClassName("box4")[0].style.borderColor = newHSL4;

    document.getElementById("color5HexCode").innerHTML = newHSL5;
    document.getElementsByClassName("box5")[0].style.background = newHSL5;
    document.getElementsByClassName("box5")[0].style.borderColor = newHSL5;

    document.getElementById("color6HexCode").innerHTML = newHSL6;
    document.getElementsByClassName("box6")[0].style.background = newHSL6;
    document.getElementsByClassName("box6")[0].style.borderColor = newHSL6;

    
  }

  document.getElementById("box4Button").addEventListener("click", generateRelated1);


  function generateRelated2 () {
    let a = Math.floor(Math.random() * 361);
    let newHSL4 = 'hsl(' + a + ', 100%, 37.5%)';
    let newHSL5 = 'hsl(' + a + ', 100%, 25%)';
    let newHSL6 = 'hsl(' + a + ', 100%, 12.5%)';

    document.getElementById("color7HexCode").innerHTML = newHSL4;
    document.getElementsByClassName("box7")[0].style.background = newHSL4;
    document.getElementsByClassName("box7")[0].style.borderColor = newHSL4;

    document.getElementById("color8HexCode").innerHTML = newHSL5;
    document.getElementsByClassName("box8")[0].style.background = newHSL5;
    document.getElementsByClassName("box8")[0].style.borderColor = newHSL5;

    document.getElementById("color9HexCode").innerHTML = newHSL6;
    document.getElementsByClassName("box9")[0].style.background = newHSL6;
    document.getElementsByClassName("box9")[0].style.borderColor = newHSL6;

   
  }

  document.getElementById("box7Button").addEventListener("click", generateRelated2);


  function generateComplimentary () {
    let a = Math.floor(Math.random() * 361);
    let newHSL4 = 'hsl(' + a + ', 100%, 50%)';
    let b = a + 180;
    let c = a - 180;
    let newHSL5 = 'hsl(' + b + ', 100%, 50%)';
    let newHSL6 = 'hsl(' + c + ', 100%, 50%)';

    document.getElementById("color10HexCode").innerHTML = newHSL4;
    document.getElementsByClassName("box10")[0].style.background = newHSL4;
    document.getElementsByClassName("box10")[0].style.borderColor = newHSL4;

    if (a > 180) {
      document.getElementById("color11HexCode").innerHTML = newHSL6;
    document.getElementsByClassName("box11")[0].style.background = newHSL6;
    document.getElementsByClassName("box11")[0].style.borderColor = newHSL6;
    }
    else {
      document.getElementById("color11HexCode").innerHTML = newHSL5;
    document.getElementsByClassName("box11")[0].style.background = newHSL5;
    document.getElementsByClassName("box11")[0].style.borderColor = newHSL5;
    }
  }

  document.getElementById("box10Button").addEventListener("click", generateComplimentary);

  function generateAnalogous () {
    let a = Math.floor(Math.random() * 361);
    let b = a + 22.5;
    let c = a - 22.5;
    let newHSL4 = 'hsl(' + a + ', 100%, 50%)';
    let newHSL5 = 'hsl(' + b + ', 100%, 50%)';
    let newHSL6 = 'hsl(' + c + ', 100%, 50%)';

    

    let f = 22.5 - a;
    let g = 360 - f;
    let newHSL7 = 'hsl(' + b + ', 100%, 50%)';
    let newHSL8 = 'hsl(' + g + ', 100%, 50%)';

    let d = 360 - a;
    let e = 22.5 - d;
    let newHSL9 = 'hsl(' + e + ', 100%, 50%)';
    let newHSL10 = 'hsl(' + c + ', 100%, 50%)';

    if (
      (a >= 22.5) && (a <= 337.5)
    ) {
      document.getElementById("color12HexCode").innerHTML = newHSL5;
      document.getElementsByClassName("box12")[0].style.background = newHSL5;
      document.getElementsByClassName("box12")[0].style.borderColor = newHSL5;
  
      document.getElementById("color13HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box13")[0].style.background = newHSL4;
      document.getElementsByClassName("box13")[0].style.borderColor = newHSL4;
  
      document.getElementById("color14HexCode").innerHTML = newHSL6;
      document.getElementsByClassName("box14")[0].style.background = newHSL6;
      document.getElementsByClassName("box14")[0].style.borderColor = newHSL6;

    }
    else if (
      (a >= 0) && (a < 22.5)
    ) {
      document.getElementById("color12HexCode").innerHTML = newHSL7;
      document.getElementsByClassName("box12")[0].style.background = newHSL7;
      document.getElementsByClassName("box12")[0].style.borderColor = newHSL7;
  
      document.getElementById("color13HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box13")[0].style.background = newHSL4;
      document.getElementsByClassName("box13")[0].style.borderColor = newHSL4;
  
      document.getElementById("color14HexCode").innerHTML = newHSL8;
      document.getElementsByClassName("box14")[0].style.background = newHSL8;
      document.getElementsByClassName("box14")[0].style.borderColor = newHSL8;

    }
    else {
      document.getElementById("color12HexCode").innerHTML = newHSL9;
      document.getElementsByClassName("box12")[0].style.background = newHSL9;
      document.getElementsByClassName("box12")[0].style.borderColor = newHSL9;
  
      document.getElementById("color13HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box13")[0].style.background = newHSL4;
      document.getElementsByClassName("box13")[0].style.borderColor = newHSL4;
  
      document.getElementById("color14HexCode").innerHTML = newHSL10;
      document.getElementsByClassName("box14")[0].style.background = newHSL10;
      document.getElementsByClassName("box14")[0].style.borderColor = newHSL10;
    }

  }

  document.getElementById("box12Button").addEventListener("click", generateAnalogous);

  function generateTriadic () {
    let a = Math.floor(Math.random() * 361);
    let b = a + 80;
    let c = a - 80;
    let newHSL4 = 'hsl(' + a + ', 100%, 50%)';
    let newHSL5 = 'hsl(' + b + ', 100%, 50%)';
    let newHSL6 = 'hsl(' + c + ', 100%, 50%)';


    let d = 360 - a;
    let e = 80 - d;
    let newHSL7 = 'hsl(' + e + ', 100%, 50%)';

    let f = 80 - a;
    let g = 360 - f;
    let newHSL8 = 'hsl(' + g + ', 100%, 50%)';

    if (
      (a >= 80) && (a <= 280)
    ) {
      document.getElementById("color15HexCode").innerHTML = newHSL5;
      document.getElementsByClassName("box15")[0].style.background = newHSL5;
      document.getElementsByClassName("box15")[0].style.borderColor = newHSL5;
  
      document.getElementById("color16HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box16")[0].style.background = newHSL4;
      document.getElementsByClassName("box16")[0].style.borderColor = newHSL4;
  
      document.getElementById("color17HexCode").innerHTML = newHSL6;
      document.getElementsByClassName("box17")[0].style.background = newHSL6;
      document.getElementsByClassName("box17")[0].style.borderColor = newHSL6;
    }
    else if (
      (a >= 0) && (a < 80)
    ) {
      document.getElementById("color15HexCode").innerHTML = newHSL5;
      document.getElementsByClassName("box15")[0].style.background = newHSL5;
      document.getElementsByClassName("box15")[0].style.borderColor = newHSL5;
  
      document.getElementById("color16HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box16")[0].style.background = newHSL4;
      document.getElementsByClassName("box16")[0].style.borderColor = newHSL4;
  
      document.getElementById("color17HexCode").innerHTML = newHSL8;
      document.getElementsByClassName("box17")[0].style.background = newHSL8;
      document.getElementsByClassName("box17")[0].style.borderColor = newHSL8;

    }
    else {
      document.getElementById("color15HexCode").innerHTML = newHSL7;
      document.getElementsByClassName("box15")[0].style.background = newHSL7;
      document.getElementsByClassName("box15")[0].style.borderColor = newHSL7;
  
      document.getElementById("color16HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box16")[0].style.background = newHSL4;
      document.getElementsByClassName("box16")[0].style.borderColor = newHSL4;
  
      document.getElementById("color17HexCode").innerHTML = newHSL6;
      document.getElementsByClassName("box17")[0].style.background = newHSL6;
      document.getElementsByClassName("box17")[0].style.borderColor = newHSL6;

    }

  }
  document.getElementById("box15Button").addEventListener("click", generateTriadic);

  function generateTetradic() {
    let a = Math.floor(Math.random() * 361);
    let b = a + 60;
    let c = a + 120;
    let d = a - 60;
    let newHSL4 = 'hsl(' + a + ', 100%, 50%)';
    let newHSL5 = 'hsl(' + b + ', 100%, 50%)';
    let newHSL6 = 'hsl(' + c + ', 100%, 50%)';
    let newHSL7 = 'hsl(' + d + ', 100%, 50%)';


    let e = 360 - a;
    let f = 120 - e;
    let i = 0 + f;
    let newHSL8 = 'hsl(' + i + ', 100%, 50%)';


    let g = 60 - a;
    let h = 360 - g;
    let newHSL9 = 'hsl(' + h + ', 100%, 50%)';


    let j = 360 - a;
    let k = 60 - j;
    let l = 0 + k;
    let newHSL10 = 'hsl(' + l + ', 100%, 50%)';


    if (
      (a >= 60) && (a <= 240)
    ) {
      document.getElementById("color18HexCode").innerHTML = newHSL7;
      document.getElementsByClassName("box18")[0].style.background = newHSL7;
      document.getElementsByClassName("box18")[0].style.borderColor = newHSL7;

      document.getElementById("color19HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box19")[0].style.background = newHSL4;
      document.getElementsByClassName("box19")[0].style.borderColor = newHSL4;

      document.getElementById("color20HexCode").innerHTML = newHSL5;
      document.getElementsByClassName("box20")[0].style.background = newHSL5;
      document.getElementsByClassName("box20")[0].style.borderColor = newHSL5;

      document.getElementById("color21HexCode").innerHTML = newHSL6;
      document.getElementsByClassName("box21")[0].style.background = newHSL6;
      document.getElementsByClassName("box21")[0].style.borderColor = newHSL6;

    }
    else if (
      (a >= 0) && (a < 60)
    ) {
      document.getElementById("color18HexCode").innerHTML = newHSL9;
      document.getElementsByClassName("box18")[0].style.background = newHSL9;
      document.getElementsByClassName("box18")[0].style.borderColor = newHSL9;

      document.getElementById("color19HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box19")[0].style.background = newHSL4;
      document.getElementsByClassName("box19")[0].style.borderColor = newHSL4;

      document.getElementById("color20HexCode").innerHTML = newHSL5;
      document.getElementsByClassName("box20")[0].style.background = newHSL5;
      document.getElementsByClassName("box20")[0].style.borderColor = newHSL5;

      document.getElementById("color21HexCode").innerHTML = newHSL6;
      document.getElementsByClassName("box21")[0].style.background = newHSL6;
      document.getElementsByClassName("box21")[0].style.borderColor = newHSL6;

    }
    else if (
      (a > 240) && (a <= 300)
    ) {
      document.getElementById("color18HexCode").innerHTML = newHSL7;
      document.getElementsByClassName("box18")[0].style.background = newHSL7;
      document.getElementsByClassName("box18")[0].style.borderColor = newHSL7;

      document.getElementById("color19HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box19")[0].style.background = newHSL4;
      document.getElementsByClassName("box19")[0].style.borderColor = newHSL4;

      document.getElementById("color20HexCode").innerHTML = newHSL5;
      document.getElementsByClassName("box20")[0].style.background = newHSL5;
      document.getElementsByClassName("box20")[0].style.borderColor = newHSL5;

      document.getElementById("color21HexCode").innerHTML = newHSL8;
      document.getElementsByClassName("box21")[0].style.background = newHSL8;
      document.getElementsByClassName("box21")[0].style.borderColor = newHSL8;
    }
    else {
      document.getElementById("color18HexCode").innerHTML = newHSL7;
      document.getElementsByClassName("box18")[0].style.background = newHSL7;
      document.getElementsByClassName("box18")[0].style.borderColor = newHSL7;

      document.getElementById("color19HexCode").innerHTML = newHSL4;
      document.getElementsByClassName("box19")[0].style.background = newHSL4;
      document.getElementsByClassName("box19")[0].style.borderColor = newHSL4;

      document.getElementById("color20HexCode").innerHTML = newHSL10;
      document.getElementsByClassName("box20")[0].style.background = newHSL10;
      document.getElementsByClassName("box20")[0].style.borderColor = newHSL10;

      document.getElementById("color21HexCode").innerHTML = newHSL8;
      document.getElementsByClassName("box21")[0].style.background = newHSL8;
      document.getElementsByClassName("box21")[0].style.borderColor = newHSL8;

    }

  }
  document.getElementById("box18Button").addEventListener("click", generateTetradic);