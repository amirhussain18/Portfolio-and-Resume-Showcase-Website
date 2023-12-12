let labels = document.querySelectorAll(".navbar .navbtn");
let logo = document.querySelector(".navbar h2");
let divs = document.querySelectorAll(".content > div");
let sidebar = document.querySelector(".sidebar");
let barbtn = document.querySelector(".navbar > i");
let sidenav = document.querySelector(".sidenav");
let barclosebtn = document.querySelector(".sidenav > i");
let sidebtns = document.querySelectorAll(".sidenav .sidenavbtns span");
let contactlist = document.querySelector("#contactlist");

function hideContent(el){
    el.style.display = "none";
}
function showContent(el){
    el.style.display = "inline-block";
}
function unclickIt(el){
    el.style.transform = "scale(1)";
    el.style.textShadow = "2px 2px 4px black";
    el.clicked = false;
}
function clickIt(el){
    el.style.transform = "scale(1.2)";
    el.style.textShadow = "0px 0px 8px rgba(255, 255, 255, 0.9)";
    el.clicked = true;
}
function hovered(el){
    if (!el.clicked){
        el.style.transform = "scale(1.2)";
    }
}
function unHovered(el){
    if (!el.clicked){
        el.style.transform = "scale(1)";
    }
}

for (el of divs){
    hideContent(el);
}
showContent(divs[0]);

for(el of labels){
    unclickIt(el);
}
clickIt(labels[0]);

for(let i=0; i<labels.length; i++){
    
    labels[i].addEventListener("click", ()=>{
        for(label of labels){
            unclickIt(label);
        }
        clickIt(labels[i]);

        for (el of divs){
            hideContent(el);
        }
        showContent(divs[i]);
    });

    labels[i].addEventListener("mouseenter", ()=>{
        hovered(labels[i]);
    })
    labels[i].addEventListener("mouseleave", ()=>{
        unHovered(labels[i]);
    })
}

if (visualViewport.width <= 600){

    clickIt(logo);
    hideContent(divs[0]);
    hideContent(contactlist);

    for (let i=0; i<sidebtns.length; i++){
        sidebtns[i].addEventListener("click", ()=>{
            unclickIt(logo);
            unclickIt(barbtn);
            for (el of sidebtns){
                unclickIt(el);
            }
            clickIt(sidebtns[i]);
            for(el of divs){
                hideContent(el);
            }
            hideNav();
            hideContent(sidebar);
            showContent(divs[i]);
        });
    }

    logo.addEventListener("click", ()=>{
        for (el of divs){
            hideContent(el);
        }
        for (el of sidebtns){
            unclickIt(el);
        }
        clickIt(logo);
        sidebar.style.display = "flex";
    })
}


function showNav(){
    sidenav.style.display = "block";
    setTimeout(()=>{
        sidenav.style.transform = "translateX(0rem)";
    },10);
}

function hideNav(){
    sidenav.style.transform = "translateX(18rem)";
    setTimeout(()=>{
        sidenav.style.display = "none";
    }, 500);
}

hideNav();
barbtn.addEventListener("click", ()=>{
    showNav();
    clickIt(barbtn);
})
barclosebtn.addEventListener("click", ()=>{
    hideNav();
    unclickIt(barbtn);
})