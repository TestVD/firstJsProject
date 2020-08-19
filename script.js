'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); 
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.budget <= 100) {
            console.log("Минимальный уровень достатка");
       } else if (appData.budget > 100 && appData.budget <= 2000) {
           console.log("Средний уровень достатка");
       } else if (appData.budget > 2000) {
           console.log("Высокий уровень достатка");
       }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        let a;
        for (let i = 0; i < 3; i++) {
            a = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i+1] = a;
        }
    },
    chooseIncome: function() {
        let item = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        if(typeof(item) != "string" || item == "" || item == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = item.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function (item, i) {
            alert("Способы дополнительного заработка: " + (++i) + ": " + item);
        });
    }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
