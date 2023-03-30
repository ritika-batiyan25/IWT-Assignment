let nbtn=document.querySelector('button');
nbtn.addEventListener('click',showmsg);
function showmsg(){
    alert("Namasteeee World!!");
}

let nbtn1=document.querySelector('button');
nbtn1.addEventListener('click',inputmsg);
function inputmsg(){
    let name =prompt('Enter the name of the student');
    nbtn1.textContent='Roll No. 1:' + name;
}