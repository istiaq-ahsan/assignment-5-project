// add money for noakhali

document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyNoakhali = getInputFiledValueById("input-add-money");
    let initialBalance = getTextFieldById("initial-balance");

    if (addMoneyNoakhali > 0 && addMoneyNoakhali <= initialBalance) {

        const initialTotalNoakhali = getTextFieldById("initial-total-1");

        let newBalance = initialBalance - addMoneyNoakhali;
        const finalTotalNoakhali = initialTotalNoakhali + addMoneyNoakhali;


        document.getElementById("initial-balance").innerText = newBalance;
        document.getElementById("initial-total-1").innerText = finalTotalNoakhali;
        my_modal_5.showModal();

        //add to transaction history------------------------------
        let historyItem = document.createElement("div");
        historyItem.className = "w-4/5 mx-auto border border-gray-300 rounded-xl my-3"
        historyItem.innerHTML =
            `<p class="text-xl font-bold m-5 ">
             ${addMoneyNoakhali} Taka is Donated for flood at Noakhali, Bangladesh
        </p>
        <p class="text-lg m-5">
         Date: ${new Date().toString()}
        </p>`;

        document.getElementById("transaction-container").appendChild(historyItem);
    }
    else {
        alert("Invalid Donation Amount");
    }





})

//add money for feni ----------------------------------


document.getElementById("btn-add-money-2").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyFeni = getInputFiledValueById("input-add-money-2");
    let initialBalance = getTextFieldById("initial-balance");

    if (addMoneyFeni > 0 && addMoneyFeni <= initialBalance) {
        const initialTotalFeni = getTextFieldById("initial-total-2");

        let newBalance = initialBalance - addMoneyFeni;
        const finalTotalFeni = initialTotalFeni + addMoneyFeni;

        document.getElementById("initial-balance").innerText = newBalance;
        document.getElementById("initial-total-2").innerText = finalTotalFeni;

        my_modal_5.showModal();

        //add to transaction history------------------------------
        let historyItem = document.createElement("div");
        historyItem.className = "w-4/5 mx-auto border border-gray-300 rounded-xl my-3"
        historyItem.innerHTML =
            `<p class="text-xl font-bold m-5 ">
         ${addMoneyFeni} Taka is Donated for flood relief at Feni, Bangladesh
    </p>
    <p class="text-lg m-5">
     Date: ${new Date().toString()}
    </p>`;

        document.getElementById("transaction-container").appendChild(historyItem);

    }
    else {
        alert("Invalid Donation Amount");
    }
})

//add money for quota---------------------------------


document.getElementById("btn-add-money-3").addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyQuota = getInputFiledValueById("input-add-money-3");
    let initialBalance = getTextFieldById("initial-balance");

    if (addMoneyQuota > 0 && addMoneyQuota <= initialBalance) {
        const initialTotalQuota = getTextFieldById("initial-total-3");

        let newBalance = initialBalance - addMoneyQuota;
        const finalTotalQuota = initialTotalQuota + addMoneyQuota;


        document.getElementById("initial-balance").innerText = newBalance;
        document.getElementById("initial-total-3").innerText = finalTotalQuota;

        my_modal_5.showModal();

        //add to transaction history------------------------------
        let historyItem = document.createElement("div");
        historyItem.className = "w-4/5 mx-auto border border-gray-300 rounded-xl my-3"
        historyItem.innerHTML =
            `<p class="text-xl font-bold m-5 ">
         ${addMoneyQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
    </p>
    <p class="text-lg m-5">
     Date: ${new Date().toString()}
    </p>`;

        document.getElementById("transaction-container").appendChild(historyItem);
    }
    else {
        alert("Invalid Donation Amount");
    }

})

