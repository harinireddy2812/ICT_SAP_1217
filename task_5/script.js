let transactions = [];

let income = 0;
let expense = 0;

const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");
const listEl = document.getElementById("list");

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (text === "" || amount === "") {
        alert("Please enter description and amount");
        return;
    }

    const transaction = {
        text,
        amount,
        type
    };

    transactions.push(transaction);
    updateUI();

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}

function updateUI() {
    listEl.innerHTML = "";
    income = 0;
    expense = 0;

    transactions.forEach(item => {
        const li = document.createElement("li");
        li.classList.add(item.type === "income" ? "income-item" : "expense-item");

        li.innerHTML = `
            <span>${item.text}</span>
            <span>${item.type === "income" ? "+" : "-"}₹${item.amount}</span>
        `;

        listEl.appendChild(li);

        if (item.type === "income") {
            income += item.amount;
        } else {
            expense += item.amount;
        }
    });

    incomeEl.textContent = income;
    expenseEl.textContent = expense;
    balanceEl.textContent = income - expense;
}
