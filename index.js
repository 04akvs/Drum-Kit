var y = document.getElementById("tiles").children;

document.body.addEventListener('keydown', function (e) {
        
    switch (e.keyCode) {
    case 65:
        var sound1 = new Audio("/openhat.wav");
        sound1.play();
        addRemoveClass(e.keyCode);
      break;
  
    case 66:
        var sound2 = new Audio("ride.mp3");
        sound2.play();
        addRemoveClass(e.keyCode);
      break;
  
    case 67:
        var sound3 = new Audio('/snare.wav');
        sound3.play();
        addRemoveClass(e.keyCode);
      break;
  
    case 68:
        var sound4 = new Audio('/tink.wav');
        sound4.play();
        addRemoveClass(e.keyCode);
      break;
  
    case 69:
        var sound5 = new Audio('/tom.wav');
        sound5.play();
        addRemoveClass(e.keyCode);
      break;
    
    case 70:
        var sound6 = new Audio('/hihat.wav');
        sound6.play();
        addRemoveClass(e.keyCode);
      break;
            
    default: console.log(key);
  }
});

function addRemoveClass(num) {
    
    num = num - 64;
    y.item(num).classList.add("playing");
    sleep(200).then(() => {
        y.item(num).classList.remove("playing");
    });
}

let sleep = ms => {  
return new Promise(resolve => setTimeout(resolve, ms));  
};  