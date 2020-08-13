let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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
alert(appData.budget / 30);

if (appData.budget <= 100) {
     console.log("Минимальный уровень достатка");
} else if (appData.budget > 100 && appData.budget <= 2000) {
    console.log("Средний уровень достатка");
} else if (appData.budget > 2000) {
    console.log("Высокий уровень достатка");
}

