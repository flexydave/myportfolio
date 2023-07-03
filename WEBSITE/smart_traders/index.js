// ...............................open nav-Bar........................................

var ul = document.getElementById("ul");

var links = document.getElementById("links");

var menu = document.getElementById("menu");





function openNavBar(){ 
    menu.addEventListener("click",function(){ 
        if(links.style.height=="100%"){ 
            links.style.height="10%"
            ul.style.left="1000px"
            menu.className="bi-list"
        }
        else{ 
            links.style.height="100%"
            ul.style.left="0px"
            menu.className="bi-x"
        }
       
    })

}

window.onresize = function(){ 
    links.style.height="10%"
     ul.style.left="1000px"
    menu.className="bi-list"
}
    
window.onload=function(){ 
    openNavBar();
    activeMedia();
    activeLinks();
}


// ...................................... make the nav-bar position to be fixed....................................... 

function displayFixed(){ 
        if(document.documentElement.scrollTop>=10){ 
            links.style.top="0px"
            links.style.backgroundColor="rgb(8, 8, 29)"
          
        }
        else{ 
            links.style.top="100px"  
            links.style.backgroundColor=" rgba(8, 8, 29,0.9)"
           
        }
}


//   ..........................................making the media active....................................... 

var media = document.getElementsByName("media")
var counter;
function activeMedia(){ 
    for(counter=0; counter<=media.length; ++counter){ 
        if(counter==0){ 
            media[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=media.length; ++counter){ 
                    media[counter].style.backgroundColor=""
                    if(counter==0){ 
                        media[counter].style.backgroundColor="rgb(119, 119, 240)"
                    }
                }
            })
        }

        else if(counter==1){ 
            media[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=media.length; ++counter){ 
                    media[counter].style.backgroundColor=""
                    if(counter==1){ 
                        media[counter].style.backgroundColor="rgb(119, 119, 240)"
                    }
                }
            })
        }

        else if(counter==2){ 
            media[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=media.length; ++counter){ 
                    media[counter].style.backgroundColor=""
                    if(counter==2){ 
                        media[counter].style.backgroundColor="rgb(119, 119, 240)"
                    }
                }
            })
        }
        
    }
}





// ....................................animating on scroll................................................

var flex = document.getElementById("flex");

var about = document.getElementById("about");

function floatUp(){ 
    if(document.documentElement.scrollTop>=400 && document.documentElement.scrollTop<=500 ){ 
        flex.style.bottom="0"
        flex.style.zIndex="auto"
    }

    else if(document.documentElement.scrollTop>=500){ 
        about.style.bottom="0"
        
    }
   
}
window.onscroll=function(){ 
    displayFixed();
    floatUp();
    displayArrowKey();
}

   
// ...............................................displaying the arrow key onscroll of the page ......................................

var backToTop = document.getElementById("backToTop");
function displayArrowKey(){ 
    if(document.documentElement.scrollTop >= 500){ 
        backToTop.style.opacity="1"
    }
    else{ 
        backToTop.style.opacity="0"
    }
}

// ...............................................active links ...............................................
var link = document.getElementsByName("link")
function activeLinks(){ 
    for(counter=0; counter<=link.length; ++counter){ 
        if(counter==0){ 
            link[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=link.length; ++counter){ 
                    link[counter].style.borderBottom=""
                    link[counter].style.color=""
                    link[counter].style.opacity="0.8"
                    if(counter==0){ 
                        link[counter].style.borderBottom="2px solid rgb(119, 119, 240)"
                        link[counter].style.color="rgb(119, 119, 240)"
                        link[counter].style.opacity="1"
                    }
                }
            })
        }

        else if(counter==1){ 
            link[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=link.length; ++counter){ 
                    link[counter].style.borderBottom=""
                    link[counter].style.color=""
                    link[counter].style.opacity="0.8"
                    if(counter==1){ 
                        link[counter].style.borderBottom="2px solid rgb(119, 119, 240)"
                        link[counter].style.color="rgb(119, 119, 240)"
                        link[counter].style.opacity="1"
                    }
                }
            })
        }

        else if(counter==2){ 
            link[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=link.length; ++counter){ 
                    link[counter].style.borderBottom=""
                    link[counter].style.color=""
                    link[counter].style.opacity="0.8"
                    if(counter==2){ 
                        link[counter].style.borderBottom="2px solid rgb(119, 119, 240)"
                        link[counter].style.color="rgb(119, 119, 240)"
                        link[counter].style.opacity="1"
                    }
                }
            })
        }
        else if(counter==3){ 
            link[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=link.length; ++counter){ 
                    link[counter].style.borderBottom=""
                    link[counter].style.color=""
                    link[counter].style.opacity="0.8"
                    if(counter==3){ 
                        link[counter].style.borderBottom="2px solid rgb(119, 119, 240)"
                        link[counter].style.color="rgb(119, 119, 240)"
                        link[counter].style.opacity="1"
                    }
                }
            })
        }
        else if(counter==4){ 
            link[counter].addEventListener("click",function(){ 
                for(counter=0; counter<=link.length; ++counter){ 
                    link[counter].style.borderBottom=""
                    link[counter].style.color=""
                    link[counter].style.opacity="0.8"
                    if(counter==4){ 
                        link[counter].style.borderBottom="2px solid rgb(119, 119, 240)"
                        link[counter].style.color="rgb(119, 119, 240)"
                        link[counter].style.opacity="1"
                    }
                }
            })
        }
        
    }
}