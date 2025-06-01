const btn=document.getElementById('btn');
const label1=document.getElementById('label');
const label2=document.getElementById('labe2');
const label3=document.getElementById('labe3');

const min=1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;

btn.onclick=function(){
    randomnum1=Math.floor(Math.random()*max)+min;
    randomnum2=Math.floor(Math.random()*max)+min;
    randomnum3=Math.floor(Math.random()*max)+min;
    label1.textContent=randomnum1;
    label2.textContent=randomnum2;
    label3.textContent=randomnum3;
}