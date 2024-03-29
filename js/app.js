// Function for get input
function getValue(inputID) {
    const input = document.getElementById(inputID);
    const inputAmount = Number(input.value);
    return inputAmount;

}
// Expenses Calculate

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getValue('income');
    const foodCost = getValue('food');
    const rentCost = getValue('rent');
    const clothCost = getValue('clothes');
    if (incomeAmount < 0 || foodCost < 0 || rentCost < 0 || clothCost < 0) {
        alert('Enter Positive number')
    }
    else if (isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
        alert('Enter number only')
    }
    else {
        const expenses = document.getElementById('total-expenses');
        const totalExpenses = foodCost + rentCost + clothCost;
        if (totalExpenses > incomeAmount) {
            alert("Your expenses can't greater than your income")
        }
        else {
            const expensesAmount = expenses.innerText = totalExpenses;
            const balance = document.getElementById('balance');
            const balanceAmount = balance.innerText = incomeAmount - expensesAmount;
        }
    }
})

// Saving amount

document.getElementById('save-btn').addEventListener('click', function () {
    const savingValue = getValue('save');
    const saving = document.getElementById('saving-amount');
    const incomeAmount = getValue('income');
    const savingTotal = incomeAmount * (savingValue / 100);
    const savingAmount = savingTotal;
    const balance = document.getElementById('balance').innerText;
    const balanceAmount = Number(balance);
    const remainingBalance = document.getElementById('remaining-balance')

    if (savingAmount > balanceAmount) {
        alert("You can't save amount more than your balance")
    }
    else if (isNaN(savingAmount) || savingValue < 0) {
        alert('Please Enter only number greater than 0')
    }
    else {
        remainingBalance.innerText = balanceAmount - savingTotal;
        saving.innerText = savingTotal
    }
})