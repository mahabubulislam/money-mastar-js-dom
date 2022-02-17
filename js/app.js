function getValue(inputID){
    const input = document.getElementById(inputID);
    const inputAmount = Number(input.value);
    return inputAmount;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getValue('income');
    const foodCost = getValue('food');
    const rentCost = getValue('rent');
    const clothCost =  getValue('clothes');
    const expenses = document.getElementById('total-expenses');
    const totalExpenses=foodCost+rentCost+clothCost;
    const expensesAmount =expenses.innerText=totalExpenses;
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText =incomeAmount-expensesAmount;
 
     // const incomeInput = document.getElementById('income');
    // const foodInput = document.getElementById('food');
    // const foodCost = Number(foodInput.value);
    // const rentInput = document.getElementById('rent');
    // const rentCost = Number(rentInput.value);
    // const clothesInput = document.getElementById('clothes');
    // const clothCost = Number(clothesInput.value);
    // const expenses = document.getElementById('total-expenses');
    // const totalExpenses=foodCost+rentCost+clothCost;
    // const expensesAmount =expenses.innerText=totalExpenses;
    // const balance = document.getElementById('balance');
    // const balanceAmount = balance.innerText =incomeAmount-expensesAmount; 
})


document.getElementById('save-btn').addEventListener('click',function(){
    const savingValue = getValue('save');
    const saving = document.getElementById('saving-amount');
    const incomeAmount = getValue('income');
    const savingTotal = incomeAmount*(savingValue/100);
    const savingAmount = saving.innerText=savingTotal;
    const balance = document.getElementById('balance').innerText;
    balanceAmount = Number(balance);
    remainingBalance = document.getElementById('remaining-balance')
    remainingBalance.innerText = balanceAmount-savingAmount;

})