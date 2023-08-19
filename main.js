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
let topCot=document.querySelector("#topCot");
let conter=document.querySelector("#contir");
let bady=document.querySelector("body");
let pr=document.querySelector("#pr");
let Welcome=document.querySelector("#Welcome");
let buttons= document.querySelector("button")

b1.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
    
    }

    let imgB3=document.createElement("img");
    let clossBt=document.createElement("button");
    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    clossBt.style.position="absolute";

    fid.style.display="block";
    topCot.scrollIntoView();
    imgB3.setAttribute("src","b3.jpg");
    imgB3.setAttribute("id","imgB");
    fid.appendChild(clossBt);
    fid.appendChild(imgB3);
    Welcome.style.display="none";

    text = document.createTextNode("This just got added");
    pr.appendChild(text)


    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    imgB3.remove();
    text.remove();
    Welcome.style.display="block";
    
});

    
}
b2.onclick =()=>{

    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
    let vid=document.createElement("video");
    let clossBt=document.createElement("button")

    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    

    fid.style.display="block";
    topCot.scrollIntoView();
    vid.setAttribute("src","v1.mp4");
    vid.setAttribute("id","v1");
    vid.autoplay = true
    
  
    
    fid.appendChild(clossBt);
    fid.appendChild(vid);

    
    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    vid.remove();
});

    
}


b3.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
    let vid=document.createElement("video");
    let clossBt=document.createElement("button")

    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    

    fid.style.display="block";
    topCot.scrollIntoView();
    vid.setAttribute("src","v2.mp4");
    vid.setAttribute("id","v1");
    vid.autoplay = true
    
  
    
    fid.appendChild(clossBt);
    fid.appendChild(vid);

    
    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    vid.remove();
});
   


    
}
b4.onclick =()=>{
    window.open("/pag2.html");
    window.open("/pag2.html");
    window.open("/pag2.html");
    window.open("/pag2.html");
    window.open("/pag2.html");
    window.open("/pag2.html");

};



b5.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
    let conter=document.querySelector("#contir");
    conter.className="continar2";
    
};

b6.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   
    let clossBt=document.createElement("button");
    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    clossBt.style.position="absolute";

    fid.style.display="block";
    topCot.scrollIntoView();
    fid.appendChild(clossBt);
    bady.className="nocursor"

    clossBt.addEventListener("click", ()=>{
        fid.style.display="none";
        clossBt.remove();
        bady.className="";
    
        
    });

    
}

b7.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   
    let imgB3=document.createElement("img");
    let clossBt=document.createElement("button");
    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    clossBt.style.position="absolute";

    fid.style.display="block";
    topCot.scrollIntoView();
    imgB3.setAttribute("src","m2.jpeg");
    imgB3.setAttribute("id","imgB");
    
    fid.appendChild(clossBt);
    fid.appendChild(imgB3);


    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    imgB3.remove();

    
});

    
}






b8.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
    let conter=document.querySelector("#contir");
    conter.className="continar2";
   bady.style.backgroundColor="black";
   b1.style.backgroundColor="black";
   b2.style.backgroundColor="black";
   b3.style.backgroundColor="black";
   b4.style.backgroundColor="black";
   b5.style.backgroundColor="black";
   b6.style.backgroundColor="black";
   b7.style.backgroundColor="black";
   b8.style.backgroundColor="black";
   b9.style.backgroundColor="gray";
   b10.style.backgroundColor="black";
   b11.style.backgroundColor="black";
   b12.style.backgroundColor="black";
   b13.style.backgroundColor="black";
   b14.style.backgroundColor="black";
   b15.style.backgroundColor="black";
   


    
}


b9.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   
    bady.style.backgroundColor="#FFFFFF";
    b1.style.backgroundColor="#FFFFFF";
    b2.style.backgroundColor="#FFFFFF";
    b3.style.backgroundColor="#FFFFFF";
    b4.style.backgroundColor="#FFFFFF";
    b5.style.backgroundColor="#FFFFFF";
    b6.style.backgroundColor="#FFFFFF";
    b7.style.backgroundColor="#FFFFFF";
    b8.style.backgroundColor="#FFFFFF";
    b9.style.backgroundColor="#FFFFFF";
    b10.style.backgroundColor="#FFFFFF";
    b11.style.backgroundColor="#FFFFFF";
    b12.style.backgroundColor="#FFFFFF";
    b13.style.backgroundColor="#FFFFFF";
    b14.style.backgroundColor="#FFFFFF";
    b15.style.backgroundColor="#FFFFFF";

    
}


b10.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   


    
}

b11.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   
    let imgB3=document.createElement("img");
    let clossBt=document.createElement("button");
    clossBt.setAttribute("class","btn-close");
    clossBt.setAttribute("aria-label","Close");
    clossBt.setAttribute("id","ClosebT");
    clossBt.style.position="absolute";

    fid.style.display="block";
    topCot.scrollIntoView();
    imgB3.setAttribute("src","m3.jpg");
    imgB3.setAttribute("id","imgB");
    
    fid.appendChild(clossBt);
    fid.appendChild(imgB3);


    clossBt.addEventListener("click", ()=>{
    fid.style.display="none";
    clossBt.remove();
    imgB3.remove();

    
});

    
}


b12.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   


    
}


b13.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   


    
}

b14.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   


    
}


b15.onclick =()=>{
    if (fid.childNodes.length >1) {
        fid.innerHTML = '';
         
    }
   


    
}


b16.onclick =()=>{
    let od=document.createElement("audio");
    od.setAttribute("src","ss.mp3");
    od.autoplay = true
    setTimeout(closs, 5000);
    function closs() {
        window.close();
    }
};
