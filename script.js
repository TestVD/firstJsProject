let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько обойдется?","");
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); 
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.budget <= 100) {
        console.log("Минимальный уровень достатка");
   } else if (appData.budget > 100 && appData.budget <= 2000) {
       console.log("Средний уровень достатка");
   } else if (appData.budget > 2000) {
       console.log("Высокий уровень достатка");
   }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месц с вашего депозита: " + appData.monthIncome);
    }
}

function chooseOptExpenses() {
    let a;
    for (let i = 0; i < 3; i++) {
        a = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i+1] = a;
    }
}

start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
