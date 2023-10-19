function displaySalaryDetails() {
    var basic = document.getElementById("basicsal").value;
    var da = document.getElementById("da").value = basic * (5 / 100);
    var hra = document.getElementById("hra").value = basic * (10 / 100);
    var tra = document.getElementById("travel").value = basic * (5 / 100);
    var pf = document.getElementById("pf").value = basic * (5 / 100);
    var net = document.getElementById("netsalary").value = da + hra + tra + pf;
    var gross = document.getElementById("grosssalary").value = net - pf;
}