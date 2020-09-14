function message(msg){
    document.getElementById('output').innerHTML=msg
}

function displayDate(){
    document.getElementById("demo").innerHTML=Date()
}

function message(msg){
    document.getElementById('output').innerHTML=msg
}

function buttonClick(){
    var answer=200
    document.getElementById('stuff').innerHTML=answer
}

function buttonClick2(){
    var answer=300
    document.getElementById('stuff').innerHTML=answer
}
 function hide(){
     let x=document.getElementById("img1")
     let y=document.getElementById('stext')
     y.style.display="none"

     x.style.display="none"
 }

 function unhide(){
     let x=document.getElementById("img1")
     let y=document.getElementById('stext')
     x.style.display="block"
     y.style.display="block"
 }