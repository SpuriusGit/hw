let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;
let remainder = 0;

let buy = prompt('Сколько дроидов желаете приобрести?');
if(buy===null){
    alert('Отменено пользователем!');
}else if((buy*pricePerDroid)>credits){
    alert('Недостаточно средств на счету!');
}else if((buy*pricePerDroid)<credits){
    remainder = credits-(buy*pricePerDroid);
    alert(`Вы купили ${buy} дроидов, на счету осталось ${remainder} кредитов.`);
}