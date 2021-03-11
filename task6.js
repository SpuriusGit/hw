let total = 0;
for(;;){
    let count = prompt('Введите число');
    if(count === null){
        alert(`Сумма чисел = ${total}`);
        break;
    }else {
        count = +count;
        if(isNaN(count)){
            alert('Введено не число');
        }
        else{
            total+=count;
        }
    }
}

