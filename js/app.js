document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income');
    const incomeAmount = Number(incomeInput.value);
    const foodInput = document.getElementById('food');
    const foodCost = Number(foodInput.value);
    const rentInput = document.getElementById('rent');
    const rentCost = Number(rentInput.value);
    const clothesInput = document.getElementById('clothes');
    const clothCost = Number(clothesInput.value);
    const expenses = document.getElementById('total-expenses');
    const totalExpenses=foodCost+rentCost+clothCost;
    const expensesAmount =expenses.innerText=totalExpenses;
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText =incomeAmount-expensesAmount;
})
document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput = document.getElementById('save');
    const savingValue = Number(saveInput.value);
    const saving = document.getElementById('saving-amount');
    const incomeInput = document.getElementById('income');
    const incomeAmount = Number(incomeInput.value);
    const savingTotal = incomeAmount*(savingValue/100);
    const savingAmount = saving.innerText=savingTotal;
    const balance = document.getElementById('balance').innerText;
    const balanceAmount = Number(balance);
    const remainingBalance = document.getElementById('remaining-balance')
    const totalRemainingBalance = remainingBalance.innerText = balanceAmount-savingAmount;

})