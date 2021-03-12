let total = 0;
for(let i = 0;i<1;i++){
    let count = prompt('Введите число');
    if(count === null){
        alert(`Сумма чисел = ${total}`);
    }else {
        count = +count;
        if(isNaN(count)){
            i--;
            alert('Введено не число');
        }
        else{
            i--;
            total+=count;
        }
    }
}

