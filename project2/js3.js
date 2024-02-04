
document.getElementById("enter").onclick=function()
{   let stores=document.getElementById("store");
    let insides=stores.value;
    let seven=stores.value.length;
    let hello=document.getElementById("hell");
    
    if(insides==7)
    {
        let video=document.getElementById("my-video");
        video.style.display="block";
        video.play();
        
        hello.textContent="THALA FOR A REASON 😎" ;
        

    }
    else if(seven==7)
    {
        let video=document.getElementById("my-video");
        video.style.display="block";
        video.play();
        hello.textContent="THALA FOR A REASON 😎" ;
    }
    else
    {    let video=document.getElementById("my-video");
        let audio=document.getElementById("audios")
        audio.play();
        video.pause();
        video.style.display="none";
        hello.textContent="NO THALA FOR YOU 😡";
        
    }
}

