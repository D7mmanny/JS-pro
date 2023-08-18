let b1=document.querySelector("#B1");
let b2=document.querySelector("#B2");
let b3=document.querySelector("#B3");
let b4=document.querySelector("#B4");
let b5=document.querySelector("#B5");
let b6=document.querySelector("#B6");
let b7=document.querySelector("#B7");
let b8=document.querySelector("#B8");
let b9=document.querySelector("#B9");
let b10=document.querySelector("#B10");
let b11=document.querySelector("#B11");
let b12=document.querySelector("#B12");
let b13=document.querySelector("#B13");
let b14=document.querySelector("#B14");
let b15=document.querySelector("#B15");
let b16=document.querySelector("#B16");
let fid=document.querySelector("#fid");




b1.onclick =()=>window.open();
b2.onclick =()=>{
    let od=document.createElement("audio");
    od.setAttribute("src","ss.mp3");
    od.autoplay = true
    setTimeout(closs, 5000);
    function closs() {
        window.close();
    }
};


b3.onclick =()=>{
    let imgB3=document.createElement("img");
    let clossBt=document.createElement("button")

    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    clossBt.style.position="absolute";

    fid.style.display="block";
    imgB3.setAttribute("src","b3.jpg");
    
    fid.appendChild(clossBt);
    fid.appendChild(imgB3);

    
    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    imgB3.remove();
});

    
}
b4.onclick =()=>{
    let vid=document.createElement("video");
    let clossBt=document.createElement("button")

    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    

    fid.style.display="block";
    vid.setAttribute("src","v1.mp4");
    vid.autoplay = true
    
  
    
    fid.appendChild(clossBt);
    fid.appendChild(vid);

    
    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    vid.remove();
});

    
}


