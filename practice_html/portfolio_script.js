var code=document.getElementById("code")
var bar=document.getElementById("bar")
var links=document.getElementById("links")
var ul=document.getElementById("ul")
var nav=document.getElementById("nav")
var counter
// // .................... responsive navBar..........................
code.addEventListener("click",function(){ 
    
    if(bar.className=="bi-x"){ 
        ul.style.opacity="1"
        ul.style.left="-2000px"
       
        bar.className="bi-list"
        links.style.height="0vh"
      
    }
    else{ 
        ul.style.opacity="1"
        ul.style.left="0"
        links.style.height="300px"
        ul.style.lineHeight="100%"
      
       bar.className="bi-x"
    
    }
    
})

// var RemoveNavBar=function(){ 
//     for(counter=0;counter<=link.length;++counter){ 
//         link[counter].addEventListener("click",function(){ 
//             ul.style.opacity="1"
//             ul.style.left="-2000px"
           
//             bar.className="bi-list"
//             links.style.height="0vh"
            
//         })
//     }
// }




// ..............................both select and incrementing values.window....................................



 window.onload=function(){ 
    
    var countDown=document.getElementsByName("countDown")
    var a=700
    function incre(){ 
        
        if(document.documentElement.scrollTop>=1000){ 
            for(var i=0;i<=countDown.length;++i){ 
                countDown[i].innerHTML=a
            if(a==1001){ 
            clearInterval(incre)
            
            }
             if(i==1){ 
                countDown[i].innerHTML=a+599
            }
            else if(i==2){ 
                countDown[i].innerHTML=a-501
             
            }
            else if(i==3){ 
                countDown[i].innerHTML=a-700
                
            }
            else if(i==4){ 
                countDown[i].innerHTML=a-501
            }
            else{ 
                ++a
            }
            
            }
            
        }
       
        }
        
    var incre=setInterval(incre,0)
    
    responsiveSlider();
    RemoveNavBar()
 }

    
//  ...................................... getting to know your the page you are presently.............................


var link=document.getElementsByName("link")

function presentPage(){ 
    if(document.documentElement.scrollTop==0 || document.documentElement.scrollTop<=600 ){ 
        for(var i=0;i<=link.length;++i){ 
            for(var i=0;i<=link.length;++i){ 
                link[i].style.color=""
                if(i==0){ 
                    link[i].style.color="red"
                }
            }
        }
    }
    else if(document.documentElement.scrollTop==700 || document.documentElement.scrollTop<=1500){ 
        for(var i=0;i<=link.length;++i){ 
            link[i].style.color=""
            if(i==1){ 
                link[i].style.color="red"
            }
        }
    }
    else if(document.documentElement.scrollTop==1600 || document.documentElement.scrollTop<=3600){ 
        for(var i=0;i<=link.length;++i){ 
            link[i].style.color=""
            if(i==2){ 
                link[i].style.color="red"
            }
        }
    }
    else if(document.documentElement.scrollTop==3700 || document.documentElement.scrollTop<=4700){ 
        for(var i=0;i<=link.length;++i){ 
            link[i].style.color=""
            if(i==3){ 
                link[i].style.color="red"
            }
        }
    }
    else if(document.documentElement.scrollTop>=4800){ 
        for(var i=0;i<=link.length;++i){ 
            link[i].style.color=""
          
            if(i==4 || i==5){ 
                link[i].style.color="red"
            }
           
        }
        
    }
    else{ 
        for(var i=0;i<=link.length;++i){ 
                link[i].style.color=""
                
            
        }
    }
}
  window.onscroll=function(){ 
    presentPage()
  } 
   





//   ........................................carouselling the images...........................................


  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.children.length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  window.addEventListener("resize",function(){ 
      sliderWidth = slider.offsetWidth;
  })


  var prevSlide = function(){ 
      if(count > 1){ 
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
      }
      else if(count = 1){ 
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
      }
  }


  
  var nextSlide= function(){ 
      if(count < items){ 
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
      }
      else if(count = items){ 
          count = items - 1;
          slideList.style.left = "0px";
          count = 1;
      }
  }

  next.addEventListener("click",function(){ 
      nextSlide();
  })

  prev.addEventListener("click",function(){ 
      prevSlide();
  })





    setInterval(function(){ 
            nextSlide()
        },5000)


        
          
        

        var responsiveSlider = function(){ 
            var slider = document.getElementById("slider");
            var sliderWidth = slider.offsetWidth;
            var slideList = document.getElementById("slideWrap");
            var count = 1;
            var items = slideList.querySelectorAll("li").length;
            var prev = document.getElementById("prev");
            var next = document.getElementById("next");
            window.addEventListener("resize",function(){ 
                sliderWidth = slider.offsetWidth;
            });

            var prevSlide = function(){ 
                if(count > 1){ 
                    count = count - 2;
                    slideList.style.left = "-" + count * sliderWidth + "px";
                    count++
                }
                else if(count = 1){ 
                    count = items - 1;
                    slideList.style.left = "-" + count * sliderWidth + "px";
                    count++
                }
            }

            var nextSlide = function(){ 
                if(count < items){ 
                    slideList.style.left = "-" + count * sliderWidth + "px";
                    count++;
                }
                else if(count = items){ 
                    slideList.style.left = "0px";
                    count = 1;
                }
            }
            next.addEventListener("click",function(){ 
                nextSlide()
            })

            prev.addEventListener("click",function(){ 
                prevSlide()
            })

            setInterval(function(){ 
                nextSlide()
            },8000)
        }


    

     

      
    
                 
                  
    
    

    



