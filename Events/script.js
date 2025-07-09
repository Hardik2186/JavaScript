let btn2 = document.getElementById("btn2");

btn2.ondblclick = () => {
    console.log('Double Click successfully.'); 
    alert('Button clicked successfully..');
}

let btn1 = document.getElementById("btn1");


//event handling
btn1.onclick= (e) => {
    console.log('Click successfully.'); 
    alert('Button clicked successfully..')
    
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);

}

//addEventListener(event,callback)

const Handle = () => {
    console.log("button clicked successfully :)");
}

btn1.addEventListener("click",Handle)

//removeEventListener(event,callback)

btn1.removeEventListener("click",Handle)