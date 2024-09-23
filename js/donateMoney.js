// add money for noakhali

document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyNoakhali = getInputFiledValueById("input-add-money");

    let initialBalance = getTextFieldById("initial-balance");
    const initialTotalNoakhali = getTextFieldById("initial-total-1");

    let newBalance = initialBalance - addMoneyNoakhali;
    const finalTotalNoakhali = initialTotalNoakhali + addMoneyNoakhali;


    document.getElementById("initial-balance").innerText = newBalance;
    document.getElementById("initial-total-1").innerText = finalTotalNoakhali;

    //add to transaction history------------------------------
    const historyItem = document.createElement("div");
    historyItem.className = "w-4/5 mx-auto border border-gray-300 h-28 rounded-xl my-3"
    historyItem.innerHTML =
        `<p class="text-xl font-bold m-5 ">
             ${addMoneyNoakhali} Taka is Donated for flood relief at Noakhali, Bangladesh
        </p>
        <p class="text-lg m-5">
         Date: ${new Date().toString()}
        </p>`;

    document.getElementById("transaction-container").appendChild(historyItem);


})

//add money for feni ----------------------------------


document.getElementById("btn-add-money-2").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyFeni = getInputFiledValueById("input-add-money-2");

    let initialBalance = getTextFieldById("initial-balance");
    const initialTotalFeni = getTextFieldById("initial-total-2");

    let newBalance = initialBalance - addMoneyFeni;
    const finalTotalFeni = initialTotalFeni + addMoneyFeni;

    document.getElementById("initial-balance").innerText = newBalance;
    document.getElementById("initial-total-2").innerText = finalTotalFeni;



})

//add money for quota---------------------------------


document.getElementById("btn-add-money-3").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyQuota = getInputFiledValueById("input-add-money-3");

    let initialBalance = getTextFieldById("initial-balance");
    const initialTotalQuota = getTextFieldById("initial-total-2");

    let newBalance = initialBalance - addMoneyQuota;
    const finalTotalQuota = initialTotalQuota + addMoneyQuota;


    document.getElementById("initial-balance").innerText = newBalance;
    document.getElementById("initial-total-3").innerText = finalTotalQuota;



})

