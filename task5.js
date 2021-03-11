const China = 150;
const Chili = 250;
const Australia = 165;
const India = 90;
const Jamaica = 130;

let question = prompt('В какую страну вам доставить?').toLowerCase();

switch(question){
    case 'китай': alert(`Доставка в ${question} будет стоить ${China} кредитов`); break;
    case 'чили': alert(`Доставка в ${question} будет стоить ${Chili} кредитов`); break;
    case 'австралия': alert(`Доставка в ${question} будет стоить ${Australia} кредитов`); break;
    case 'индия': alert(`Доставка в ${question} будет стоить ${India} кредитов`); break;
    case 'ямайка': alert(`Доставка в ${question} будет стоить ${Jamaica} кредитов`); break;
    default: alert('В вашей стране доставка не доступна');
}