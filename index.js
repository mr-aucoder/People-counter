let saveEL=document.getElementById("save-el");
let count_el=document.getElementById("counting");
let count=0;
function increment(){
    count+=1;
    count_el.innerText=count;
}
function decrement(){
    count-=1;
    count_el.textContent=count;

}
function save(){
    let countStr=count + '-';
    saveEL.textContent+=countStr;
}