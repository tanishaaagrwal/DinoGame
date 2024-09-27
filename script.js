var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if(character.classList.contains("animate")) return;
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft < 70 && blockLeft > 30 && characterTop <= 20){
        block.style.animation = "none";
        alert("Game Over. Score: " + Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1.5s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
