function showText(){

    document.getElementById("result").innerHTML="Hello"

}

function dineCheck(){

    var av=parseInt(document.getElementById("av").value)
    var au=parseInt(document.getElementById("au").value)
    var ch=parseInt(document.getElementById("ch").value)
    var h=document.getElementById("h").value
    if (h==="on"){
        h=true
    }else{
        h=false
    }

    
    console.log("works")

    let cannot="Cannot"
    let can  ="Can"
    //remove undefined
    if (isNaN(au)|| au===""){
        au=0
    } else if(isNaN(ch)||ch===""){
        ch=0
    } else if(isNaN(h)||h===""){
        h=false
    } else if(isNaN(av)||av===""){
        av=0
}
    console.log(1,av,au,ch,h)
    //check total group size
    if (av+au>5 || ch>4||av+au+ch>5){
        return document.getElementById("result").innerHTML="Cannot"

    }
    //check if any unvaccinated
    if ((av+au>2)&&au>=1){
        console.log(2)

        return document.getElementById("result").innerHTML="Cannot"
    }

    //check if same household
    if (h===false){
        console.log(3)

        if (ch>av){
            return document.getElementById("result").innerHTML="Cannot"
        }

    }
    return document.getElementById("result").innerHTML="Can"



}