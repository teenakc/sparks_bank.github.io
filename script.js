function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
        alert("The amount you entered is more than your balance! Please enter valid amount.")
    }
    else
    {
            function sendMoney() {
            var enterName = document.getElementById("enterName").value;
            var enterAmount = parseInt(document.getElementById("enterAmount").value);
            var enterSName = document.getElementById("enterSName").value;
            var findSenderBankAccount = enterSName + "BankBalance";
            var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
            if (enterAmount > enterSAmount) {
                alert("Please enter valid amount!")
            }
            else {
                var findUserBankAccount = enterName + "BankBalance";
                var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
                var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
                document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
                document.getElementById(findUserBankAccount).innerHTML = finalAmount;
                alert(`Transaction Completed Successfully!  
                Rs.${enterAmount} is sent to ${enterName}`)

                // TRANSACTION HISTORY
                var createPTag = document.createElement("li");
                var textNode = document.createTextNode(`Rs ${enterAmount} sent from ${enterSName}@gmail.com
                to ${enterName}@gmail.com on ${Date()}.`);
                createPTag.appendChild(textNode);
                var element = document.getElementById("transaction-history-body");
                element.insertBefore(createPTag, element.firstChild);
            }
        }
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Transaction Completed Successfully!!  
        Rs.${enterAmount} sent to ${enterName}@gmail.com.`)

        // TRANSACTION DETAILS 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${enterAmount} sent from ${enterSName}'s account 
        to ${enterName}'s on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}