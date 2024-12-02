console.log(document);

function testTheDom() {
    console.log("testing the dom");

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for (let node of nodes) {
        console.log(node.textContent);
    }

    var checkingNode = document.getElementById("checking");
    console.log(checkingNode.textContent);
    //checkingNode.textContent = "Changed!";
    balance = parseInt(checkingNode.textContent);
    balance += 100;
    checkingNode.textContent = balance;
}

function depositChecking() {
    var td = document.getElementById("checking");
    var checking = parseInt(td.textContent);
    checking += 100;
    td.textContent = checking;
}

function depositSavings() {
    var td = document.getElementById("savings");
    var savings = parseInt(td.textContent);
    if (savings == 0) {
        var title = document.getElementById("bankAccountTitle");
        title.textContent = "Bank Accounts";
    }
    savings += 100;
    td.textContent = savings;
}

function emptySavings() {
    var td = document.getElementById("savings");
    td.textContent = 0;
    var title = document.getElementById("bankAccountTitle");
    title.textContent = "Alert: Savings Empty";
}