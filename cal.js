let p=document.querySelector("p");
function validate(x) {
    p.textContent=p.textContent === "0" ? x : p.textContent + x;
    
}
function getResult(){
    p.textContent=eval(p.textContent)
}
function vanish(){
 p.textContent="";
}