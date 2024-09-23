
function getInputFiledValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);

    return inputValue;
}

function getTextFieldById(id) {
    const balanceNumber = parseFloat(document.getElementById(id).innerText);

    return balanceNumber;
}

function showSectionById(id) {

    document.getElementById("donation-page").classList.add('hidden');
    document.getElementById("history-page").classList.add('hidden');

    document.getElementById(id).classList.remove("hidden");
}
