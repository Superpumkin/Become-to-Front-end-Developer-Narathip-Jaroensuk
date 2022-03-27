var calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateTax);
function calculateTax(){
    var taxList = [
        {
            "baseMaxIncome": 150000,
            "taxRate": 0
        },
        {
            "baseMaxIncome": 300000,
            "taxRate": 5
        },
        {
            "baseMaxIncome": 500000,
            "taxRate": 10
        },
        {
            "baseMaxIncome": 750000,
            "taxRate": 15
        },
        {
            "baseMaxIncome": 1000000,
            "taxRate": 20
        },
        {
            "baseMaxIncome": 2000000,
            "taxRate": 25
        },
        {
            "baseMaxIncome": 5000000,
            "taxRate": 30
        },
        {
            "baseMaxIncome": 0,
            "taxRate": 35
        },
    ];

    var income = parseInt(document.getElementById("income").value);
    var incomeTax = 0;
    var incomeBalance = income; 
    
    var i = 0;
    do {
        var baseIncome = 0;
        var taxRate = taxList[i].taxRate;
        var baseMaxIncome = taxList[i].baseMaxIncome;
        var prevBaseMaxIncome = i > 0 ? taxList[i - 1].baseMaxIncome : 0;

        if (taxRate > 0) {
            if (income >= baseMaxIncome && baseMaxIncome > 0) {
                baseIncome = baseMaxIncome - prevBaseMaxIncome;
            } else {
                baseIncome = incomeBalance;
            }

            var taxInStep = ((baseIncome * taxRate) / 100);
            incomeTax += taxInStep;
        } else {
            baseIncome = baseMaxIncome;
        }

        incomeBalance -= baseIncome;
        i++;
    } while( incomeBalance > 0 && i < taxList.length);

    document.getElementById("result").innerHTML = "ภาษีที่คุณต้องจ่ายคือ: " + incomeTax + " บาท"
}