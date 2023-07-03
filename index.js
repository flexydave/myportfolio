var bar = document.getElementById("bar");
var nav = document.getElementById("nav");

function displayNavBar(){ 
    bar.addEventListener("click",function(){ 
        if(bar.className == "bi bi-list"){ 
            nav.style.height = "200px";
             bar.className = "bi bi-x";

        }
        else{ 
            nav.style.height = "50px";
            bar.className = "bi bi-list";
        }
        
    })
}

window.onresize = function(){ 
    nav.style.height = "50px";
    bar.className = "bi bi-list";
}
window.onload = function(){ 
   
    displayNavBar();
   
}
window.onscroll = function(){ 
    slideOnScroll()
    animateOnScroll();
    
}

var progress = document.getElementsByName("pro");
var counter;

function animateOnScroll(){ 
    if(document.documentElement.scrollTop >= 200){ 
        for(counter = 0; counter <= progress.length; ++counter){ 
             if(counter == 1){ 
                progress[counter].style.width = "90%";
            }
            else if(counter == 2){ 
                progress[counter].style.width = "95%";
            }
            else { 
                progress[counter].style.width = "85%";
            }
        }
    }
    else{ 
        for(counter = 0; counter <= progress.length; ++counter){ 
            if(counter == 1){ 
               progress[counter].style.width = "0%";
           }
           else if(counter == 2){ 
               progress[counter].style.width = "0%";
           }
           else { 
               progress[counter].style.width = "0%";
           }
       }
    }
    
}

var slides = document.getElementsByClassName("slide");

function slideOnScroll(){ 
    if(document.documentElement.scrollTop >= 200 && document.documentElement.scrollTop <= 900){ 
        slides[0].style.left = "0%"
    }
    else if(document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop <= 1500 ){ 
        slides[1].style.left = "0%"
    }
    else if(document.documentElement.scrollTop >= 1800 && document.documentElement.scrollTop <= 2000 ){ 
        slides[2].style.left = "0%"
    }
    else if(document.documentElement.scrollTop >= 2000 && document.documentElement.scrollTop <= 2500 ){ 
        slides[3].style.left = "0%"
        
    }
    else if(document.documentElement.scrollTop >= 2500 ){ 
        slides[4].style.left = "0%"
    }
    // else{ 
    //     for ( counter = 0; counter < slides.length; counter++) {
    //         slides[counter].style.left = "-100%";
            
    //     }
    // }
}


var demo = document.getElementById("demo");
var everySecond = setInterval(animateText, 200);;
var counter2 = 0;
var text = ["hi", "i", "am", "a", "software", "engineer"]
function animateText(){ 

    if(counter2 == 6){ 
        clearInterval(everySecond)
    }
    else if(counter2 == 0){ 
        demo.children[0].innerHTML += text[counter2] + " " + "<br>";
    }
    else if(counter2 == 4){ 
        demo.innerHTML += text[counter2] + " " + "<br>"
    }
    else if(counter2 >= 1){ 
        demo.innerHTML += text[counter2] + " " ;
    }

    else{ 
        demo.children[0].innerHTML += text[counter2] + " ";
    }
    counter2++ 
}
// animateText();



