//Accordian in the third container
workContainer.forEach((element, index) => {
    element.addEventListener('mouseenter', ()=>{
        //Get the height of the paragraph. We use this height to dynamically change the height of the containers
        let height = p[index].getBoundingClientRect().height+85;
        element.style.height = `${height}px`;
        element.style.backgroundColor = '#fff';
        element.style.borderColor = 'f8f8f8';
        hideWorkDescription[index].style.maxHeight = `${height}px`;
        hideWorkDescription[index].classList.add('active');
    });
    element.addEventListener('mouseleave', ()=>{
        element.style.height ='75px';
        element.style.backgroundColor = '';
        element.style.borderColor = '#ebebeb';
        hideWorkDescription[index].style.maxHeight = '0px';
        hideWorkDescription[index].classList.remove('active');
    });
});

//drag and drop horizontal scroll funtion of overflow---------------------------------------------
function horizontalScroll(theElement){
    let isDown = false;
    let startX;
    let scrollLeft;

    theElement.addEventListener('mousedown', (e)=>{
        isDown = true;
        startX = e.pageX - theElement.offsetLeft;
        scrollLeft = theElement.scrollLeft;
    })
    theElement.addEventListener('mouseleave', ()=>{
        isDown = false;
    })
    theElement.addEventListener('mouseup', ()=>{
        isDown = false
    })
    theElement.addEventListener('mousemove', (e)=>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - theElement.offsetLeft;
        const walk = x - startX;
        theElement.scrollLeft = scrollLeft - walk;
    })
}
horizontalScroll(ourData);
horizontalScroll(dataDivMain);

//nav background change on scroll feature---------------------------------------------------
window.onscroll = ()=>{
    navFunction();
}
function navFunction(){
    let nav = document.querySelector('.iccs-navbar');
    let doc = document.body.scrollTop;
    let docEle = document.documentElement.scrollTop;
    if(window.innerWidth > 500){
        if(doc > 50 && doc < 615 || docEle > 50 && docEle < 615){
            nav.style.backgroundColor = '#fff';
            nav.style.color = "#000";
        }else if(doc > 615 || docEle > 615){
            nav.style.backgroundColor = '#000';
            nav.style.color = "#fff";
        }else{
            nav.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            nav.style.color = "#fff";
        }
    }else{
        nav.style.backgroundColor = '#000';
        nav.style.color = "#fff";
    }
}

//hamburger and nav display function--------------------------------------------------
const navSlide = ()=>{    
    hamburger.addEventListener('click', ()=>{
        //Toggle nav
        nav.classList.toggle('nav-active');
        //Animate Links
        menuListItems.forEach((element, index) => {
            if(element.style.animation){
                element.style.animation='';
            }else{
                element.style.animation = `menuListFade 0.5s ease forwards ${index/7}s`;
            }
        });
        //Burger animation
        hamburger.classList.toggle('toggle');
    });
}

navSlide();

//UX addition to navlink - underline
menuLi.forEach((element, index) => {
    element.addEventListener('mouseover', ()=>{
        element.classList.add('understrike');
        element.style.transform = "translateY(-20%) scale(1.2)";
    });
    element.addEventListener('mouseout', ()=>{
        element.classList.remove('understrike');
        element.style.transform = "translateY(0%) scale(1)";
    })
});

//Drag to scroll effect
    //function to check if overflowX of the container is true
function overflowCondition(outerContainer, innerContainerArray){
    let allElementWidth = 0;
    let isGreater = false;
    let containerWidth = outerContainer.getBoundingClientRect().width;
    innerContainerArray.forEach((element) => {
        allElementWidth+=element.getBoundingClientRect().width;
    });
    if(containerWidth < allElementWidth){
        isGreater = true;
    }else{
        isGreater = false;
    }
    return isGreater;
}

    //function to set the top and left of the hint
function cursor (e){
    hint.style.top = e.pageY + 'px';
    hint.style.left = e.pageX + 'px';
}

    //function to call the hint and make it move with the direction
function dragToScrollHint(element, hint, overflowCond){
    element.addEventListener('mousemove', (e)=>{
        if(MouseEvent && overflowCond){
            hint.style.opacity = "1";
            cursor(e);
        }
    });
    element.addEventListener('mouseleave', ()=>{
        hint.style.opacity = "0";
    })
}

dragToScrollHint(ourData, hint, overflowCondition(outerOurDiv, ourDivArray));
dragToScrollHint(dataDivMain, hint, overflowCondition(outDataDiv, divArray));