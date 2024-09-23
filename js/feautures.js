document.getElementById("show-donation-page").addEventListener("click", function () {
    document.getElementById("show-donation-page").classList.add("bg-yellow-300");
    document.getElementById("show-history-page").classList.remove("bg-yellow-300");

    showSectionById("donation-page");
})

document.getElementById("show-history-page").addEventListener("click", function () {
    document.getElementById("show-donation-page").classList.remove("bg-yellow-300");
    document.getElementById("show-donation-page").classList.add('border-gray-500');
    document.getElementById("show-history-page").classList.add("bg-yellow-300");
    showSectionById("history-page");
})