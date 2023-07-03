// ...........................................displayingg the nav-bar ......................................

var ul = document.getElementById("ul");
var media = document.getElementById("media");
var bar = document.getElementById("bar");
var nav = document.getElementById("nav")


function openNavBar(){ 
    bar.addEventListener("click",function(){ 
        if(nav.style.height=="80vh"){ 
            nav.style.height="15vh"
            ul.style.left="100%"
            media.style.left="150%"
            bar.children[0].className="bi-list"
        }
        else{ 
            nav.style.height="80vh"
            ul.style.left="0%"
            media.style.left="0%"
            
            bar.children[0].className="bi-x"
        }
    })
}

window.onload = function(){ 
    openNavBar(); 
}


// ....................................making the nav-bar fixed .......................................

function toFixed(){ 
    if(document.documentElement.scrollTop >= 10){ 
        nav.style.position="fixed";
        nav.style.zIndex="1";
        nav.style.boxShadow="0 0 30px rgb(55, 55, 145)"
    }
    else{ 
        nav.style.position="";
        nav.style.zIndex="";
        nav.style.boxShadow=""
    }
}

window.onscroll = function(){ 
    toFixed();
    activeLink();
}



// ........................................making the links active ....................................

var links = document.getElementsByName("active");
var counter;
function activeLink(){ 
    if(document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 400){ 
       for(counter = 0; counter <= links.length; ++counter){ 
        links[counter].style.color = ""
        // links[counter].style.borderBottom=""
        if(counter == 0){ 
            links[counter].style.color = "rgb(255, 212, 23)"
        }
       }
    }
    else if(document.documentElement.scrollTop >= 400 && document.documentElement.scrollTop <= 1600){ 
        for(counter = 0; counter <= links.length; ++counter){ 
            links[counter].style.color = ""
            if(counter == 1){ 
                links[counter].style.color = "rgb(255, 212, 23)"
            }
           }
    }
    else if(document.documentElement.scrollTop >= 1600 && document.documentElement.scrollTop <= 2200){ 
        for(counter = 0; counter <= links.length; ++counter){ 
            links[counter].style.color = ""
            if(counter == 2){ 
                links[counter].style.color = "rgb(255, 212, 23)"
            }
           }
    }
    else if(document.documentElement.scrollTop >= 2200 && document.documentElement.scrollTop <= 3200){ 
        for(counter = 0; counter <= links.length; ++counter){ 
            links[counter].style.color = ""
            if(counter == 3){ 
                links[counter].style.color = "rgb(255, 212, 23)"
            }
           }
    }
    else if(document.documentElement.scrollTop >= 3200){ 
        for(counter = 0; counter <= links.length; ++counter){ 
            links[counter].style.color = ""
            if(counter == 4){ 
                links[counter].style.color = "rgb(255, 212, 23)"
            }
           }
    }
    else{ 
        for(counter = 0; counter <= links.length; ++counter){ 
            links[counter].style.color = ""
           }
    }
}