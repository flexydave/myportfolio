var cam = document.getElementById("cam");
var emoji = document.getElementById("emoji");
var link = document.getElementById("link");
var input = document.getElementById("input")
var mic = document.getElementById("mic");


function moveIcon(){ 
    if(input.value == ""){ 
        cam.style.right = "20px";
        link.style.right = "60px";
        mic.className = "bi bi-mic-fill";
    }
    else if(input.value == " "){ 
        cam.style.right = "20px";
        link.style.right = "60px";
        mic.className = "bi bi-mic-fill";
    }
    else{ 
        cam.style.right = "-20px";
        link.style.right = "20px";
        mic.className = "bi bi-cursor-fill";
    }
    
}


var dialogue = document.getElementById("dialogue");
var cM,span1,span2;

var date;
var hour;
var minute;
function send(){ 
    if(mic.className == "bi bi-cursor-fill"){ 
         date = new Date();
        minute = date.getMinutes();
        hour = date.getHours();
        cM = document.createElement("div");
        span1 = document.createElement("span")
        span2 = document.createElement("span")
        cM.className = "chatbox";
        span1.innerHTML = hour-12 + ":" + minute + " PM";
        span2.className = "bi bi-check2-all";
        cM.innerHTML =  input.value.replace(/<[^>] +>/g, '');
        cM.appendChild(span1);
        cM.appendChild(span2);
        dialogue.appendChild(cM);
        input.value = "";
        moveIcon();
        setTimeout(receive, 6000)
    }
    else{ 
        return false
    }

}


var array = ["am fine and you", "my name is preciouse, wat abt u??", "oh nice to meet u dave", "bye dave!!!"];
var counter = 0;
function receive(){ 
    date = new Date();
    minute = date.getMinutes();
    hour = date.getHours();
    cM = document.createElement("div");
    span1 = document.createElement("span")
    cM.className = "chatbox receiver";
    span1.innerHTML = hour-12 + ":" + minute + " PM";
    cM.innerHTML = array[counter];
    cM.appendChild(span1);
    dialogue.appendChild(cM);
    ++counter;
}

