const count = document.getElementById('count');
const add = document.getElementById('add');
const sud = document.getElementById('sub');
const reset = document.getElementById('reset');

add.addEventListener('click', () => {
    count.innerHTML++;
    addColor();
});

sub.addEventListener('click', () => {
    count.innerHTML--;
    addColor();
});

reset.addEventListener('click', () => {
    count.innerHTML = 0;
    addColor();
});

function addColor(){
    if(count.innerHTML > 0){
        count.style.color = "green";
    }
    else if(count.innerHTML < 0){
        count.style.color = "red";
    }
    else{
        count.style.color = "black"
    }
}