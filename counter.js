
let myp = document.querySelector("p");
let inc_btn = document.getElementById("btn_three");
let rest_btn = document.getElementById("btn_two");
let dec_btn = document.getElementById("btn_one");

counter = localStorage.getItem("newCounter");
myp.innerHTML= counter;
if(counter > 0){
    myp.style.color = "green";
}
else if(counter < 0){
    myp.style.color = "red";
}
else{
    myp.style.color = "black";
}

inc_btn.onclick = function(){
    myp.innerHTML= ++counter;
    
    if(counter > 0){
        myp.style.color = "green";
    }
    else if(counter < 0){
        myp.style.color = "red";
    }
    else{
        myp.style.color = "black";
    }
    localStorage.setItem("newCounter", counter);
}

rest_btn.onclick = function(){
    counter = 0;
    myp.innerHTML = counter;
    myp.style.color = "black";
    localStorage.setItem("newCounter", counter);
}

dec_btn.onclick = function(){
    myp.innerHTML = --counter;
    
    if(counter < 0){
        myp.style.color = "red";
    }
    else if(counter > 0){
        myp.style.color = "green";
    }
    else{
        myp.style.color = "black";
    }
    localStorage.setItem("newCounter", counter);
}