


function changeBackgroundColor(color1, color2) {
    let body = document.getElementById("body");
    
    if (body.style.backgroundColor === 'rgb(245, 209, 152)')
    {

        body.style.backgroundColor = color2;
    }
    else 
    {
        body.style.backgroundColor = color1;
        console.log(body.style.backgroundColor)
    }
   
}
