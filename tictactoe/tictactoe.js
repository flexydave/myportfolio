var minis = document.getElementsByClassName("mini");
var x = "bi bi-x-lg"
var o = "bi bi-circle-fill"
var counter = 0;
var counter2 = 0;
function clickAction(){ 
    for(counter = 0; counter < minis.length; ++counter){ 
        minis[counter].addEventListener("click", function(){ 
           if(counter2 % 2 == 0){ 
                this.children[0].className = x
                indicateX()
                if(checkFirstRow()){ 
                   setTimeout(checkFirstRow(), 5000);
                }
                else if(checkSecondRow()){ 
                    checkSecondRow()
                }
                else if(checkThirdRow()){ 
                    checkThirdRow()
                }
                else if(checkFirstColumn()){ 
                    checkFirstColumn()
                }
                else if(checkSecondColumn()){ 
                    checkSecondColumn()
                }
                else if(checkThirdColumn()){ 
                    checkThirdColumn()
                }
                else if(checkNegativeSlope()){  
                    checkNegativeSlope()
                }
                else if(checkPositiveSlope()){ 
                    checkPositiveSlope()
                }
            }
            else if(counter2 % 2 != 0){ 
                this.children[0].className = o
                indicateX()
                if(checkFirstRow()){ 
                    checkFirstRow();
                }
                else if(checkSecondRow()){ 
                    checkSecondRow()
                }
                else if(checkThirdRow()){ 
                    checkThirdRow()
                }
                else if(checkFirstColumn()){ 
                    checkFirstColumn()
                }
                else if(checkSecondColumn()){ 
                    checkSecondColumn()
                }
                else if(checkThirdColumn()){ 
                    checkThirdColumn()
                }
                else if(checkNegativeSlope()){  
                    checkNegativeSlope()
                }
                else if(checkPositiveSlope()){ 
                    checkPositiveSlope()
                }
                
            }
           
            
            counter2++;
        
        })
    }
   
}
var time = 3000;

function checkFirstRow(){ 
    if(minis[0].children[0].className == x && minis[1].children[0].className == x && minis[2].children[0].className == x){ 
        var a = setTimeout(setXScores, time)
        minis[0].style.backgroundColor = "rgb(97, 240, 30)"
        minis[1].style.backgroundColor = "rgb(97, 240, 30)"
        minis[2].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[0].children[0].className == o && minis[1].children[0].className == o && minis[2].children[0].className == o){ 
       var a = setTimeout(setOScores, time) 
       minis[0].style.backgroundColor = "rgb(97, 240, 30)"
       minis[1].style.backgroundColor = "rgb(97, 240, 30)"
       minis[2].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}
function checkSecondRow(){ 
    if(minis[3].children[0].className == x && minis[4].children[0].className == x && minis[5].children[0].className == x){ 
        var a = setTimeout(setXScores, time)
        minis[3].style.backgroundColor = "rgb(97, 240, 30)"
        minis[4].style.backgroundColor = "rgb(97, 240, 30)"
        minis[5].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[3].children[0].className == o && minis[4].children[0].className == o && minis[5].children[0].className == o){ 
        var a = setTimeout(setOScores, time) 
        minis[3].style.backgroundColor = "rgb(97, 240, 30)"
        minis[4].style.backgroundColor = "rgb(97, 240, 30)"
        minis[5].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}

function checkThirdRow(){ 
    if(minis[6].children[0].className == x && minis[7].children[0].className == x && minis[8].children[0].className == x){ 
        var a = setTimeout(setXScores, time)
        minis[6].style.backgroundColor = "rgb(97, 240, 30)"
        minis[7].style.backgroundColor = "rgb(97, 240, 30)"
        minis[8].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[6].children[0].className == o && minis[7].children[0].className == o && minis[8].children[0].className == o){ 
        var a = setTimeout(setOScores, time) 
        minis[6].style.backgroundColor = "rgb(97, 240, 30)"
        minis[7].style.backgroundColor = "rgb(97, 240, 30)"
        minis[8].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}

function checkFirstColumn(){ 
    if(minis[0].children[0].className == x && minis[3].children[0].className == x && minis[6].children[0].className == x){ 
        var a = setTimeout(setXScores, time)
        minis[0].style.backgroundColor = "rgb(97, 240, 30)"
        minis[3].style.backgroundColor = "rgb(97, 240, 30)"
        minis[6].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[0].children[0].className == o && minis[3].children[0].className == o && minis[6].children[0].className == o){ 
        var a = setTimeout(setOScores, time)  
        minis[0].style.backgroundColor = "rgb(97, 240, 30)"
        minis[3].style.backgroundColor = "rgb(97, 240, 30)"
        minis[6].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}

function checkSecondColumn(){ 
    if(minis[1].children[0].className == x && minis[4].children[0].className == x && minis[7].children[0].className == x){ 
        var a = setTimeout(setXScores, time) 
        minis[1].style.backgroundColor = "rgb(97, 240, 30)"
        minis[4].style.backgroundColor = "rgb(97, 240, 30)"
        minis[7].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[1].children[0].className == o && minis[4].children[0].className == o && minis[7].children[0].className == o){ 
        var a = setTimeout(setOScores, time)  
        minis[1].style.backgroundColor = "rgb(97, 240, 30)"
        minis[4].style.backgroundColor = "rgb(97, 240, 30)"
        minis[7].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}

function checkThirdColumn(){ 
    if(minis[2].children[0].className == x && minis[5].children[0].className == x && minis[8].children[0].className == x){ 
        var a = setTimeout(setXScores, time) 
        minis[2].style.backgroundColor = "rgb(97, 240, 30)"
        minis[5].style.backgroundColor = "rgb(97, 240, 30)"
        minis[8].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[2].children[0].className == o && minis[5].children[0].className == o && minis[8].children[0].className == o){ 
        var a = setTimeout(setOScores, time)  
        minis[2].style.backgroundColor = "rgb(97, 240, 30)"
        minis[5].style.backgroundColor = "rgb(97, 240, 30)"
        minis[8].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}

function checkNegativeSlope(){ 
    if(minis[0].children[0].className == x && minis[4].children[0].className == x && minis[8].children[0].className == x){ 
        var a = setTimeout(setXScores, time) 
        minis[0].style.backgroundColor = "rgb(97, 240, 30)"
        minis[4].style.backgroundColor = "rgb(97, 240, 30)"
        minis[8].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else if(minis[0].children[0].className == o && minis[4].children[0].className == o && minis[8].children[0].className == o){ 
        var a = setTimeout(setOScores, time)  
        minis[0].style.backgroundColor = "rgb(97, 240, 30)"
        minis[4].style.backgroundColor = "rgb(97, 240, 30)"
        minis[8].style.backgroundColor = "rgb(97, 240, 30)"
        return true
    }
    else{ 
        return false
    }
}

function checkPositiveSlope(){ 
    if(minis[2].children[0].className == x && minis[4].children[0].className == x && minis[6].children[0].className == x){ 
        setXScores()
        return true
    }
    else if(minis[2].children[0].className == o && minis[4].children[0].className == o && minis[6].children[0].className == o){ 
        setOScores()
        return true
    }
    else{ 
        return false
    }
}

var getXScore = document.getElementById("x");
var getOScore = document.getElementById("o");

function setXScores(){ 
        var toNumber = Number(getXScore.innerHTML);
        toNumber+=2;
        getXScore.innerHTML = toNumber;
        for(var i = 0; i <= minis.length; ++i){ 
            minis[i].children[0].className = ""
            minis[i].style.backgroundColor = "rgb(19, 19, 51)"
        }
        
}


function setOScores(){ 
    var toNumber = Number(getOScore.innerHTML);
    toNumber+=2;
    getOScore.innerHTML = toNumber;
    for(var i = 0; i <= minis.length; ++i){ 
        minis[i].children[0].className = ""
        minis[i].style.backgroundColor = "rgb(19, 19, 51)"
    }

    
}


function reset(){ 
    for(var i = 0; i <= minis.length; ++i){ 
        minis[i].children[0].className = ""
       
    }
}

var volume = document.getElementById("volume");
var audio = document.getElementById("audio");

function offOnSpeaker(){ 
    volume.addEventListener("click", function(){ 
        if(this.className == "bi-volume-mute-fill"){ 
            this.className ="bi-volume-up-fill"
            audio.play()
            
        }
        else{ 
            this.className = "bi-volume-mute-fill"
            audio.pause()
        }
    })
}

var turn = document.getElementById("turn");
var player = document.getElementsByClassName("gamePlayer")
function indicateX(){ 
    if(player[1].style.border == "1px dashed white"){ 
        player[0].style.border = "1px dashed white"
        player[1].style.border = "none"
        turn.style.left = "20%"
        
    }
    else{ 
        player[1].style.border = "1px dashed white"
        player[0].style.border = "none"
        turn.style.left = "70%"
    }
}

offOnSpeaker()
clickAction();

