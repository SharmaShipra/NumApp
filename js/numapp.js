let check = 0;
let check_string = 0;

function getcolor() {
    var v = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    console.log(v);
    return v;
}

function SetLoader() {
    document.getElementById("loader").style.display = "inline-block";
}

function DisableLoader() {
    document.getElementById("loader").style.display = "none";
}


function Popup(para, num) {
    if (confirm(`Do you want to print series till ${num} number`)) {
        SetLoader();
        setTimeout(function () {
            DisableLoader();
            para(num);
        }, 1000);
    }
    else {
        DisableLoader();
        palindrom(num);
    }
}

function submit() {
    check = 0;
    check_string = 0;
    let number = document.getElementById("num").value;
    if (number == "") {
        alert("Please enter a value");
    }
    else {
        SetLoader();
        setTimeout(function () {
            DisableLoader();
            Prime(number);
        }, 1000);
    }
}

function Prime(num) {
    let flag = 0;
    
    debugger;
    if (isNaN(num)) {
        AppendResult(`${num} is not a number!`);
        palindrom(num);
    }
    
    else if (!Number.isInteger(Number(num))) 
    {
        AppendResult(`${num} is not a whole number! So prime number cannot be calulated &#10060;`);
        Popup(primeseries, num);
    }
    else {
        for (a = 2; a < num && flag != 1; a++) {
            if (num % a == 0)
                flag = 1;
        }
        if (flag == 1) {
            AppendResult(`Number ${num} is not Prime &#10060;`);
        }
        else {
            AppendResult(`Number ${num} is Prime &#9989;`);
            check++;
        }
        Popup(primeseries, num);
    }
}

function AppendResult(currentResult) {

    SetLoader();
    setTimeout(function () {
        DisableLoader();
    }, 1000);
    let result = document.getElementById("Result").innerHTML;
    result += `<p style="background-color:${getcolor()};color:white;padding:7px;border-radius:6px">${currentResult}</p>`;

    document.getElementById("Result").innerHTML = result;
}

function primeseries(num) {
    //let p_series = "";
    let p_series=[];
    if (isNaN(num)) {
        AppendResult(`${num} is not a number!`);
    }
    else {

        for (a = 2; a <= num; a++) {
            let flag = 0;
            for (i = 2; i < a; i++) {
                if (a % i == 0) {
                    flag = 1;
                }
            }
            if (flag == 0) {
                //p_series = p_series + " " + a.toString();
                p_series.push(a);
            }
        }
        AppendResult(`Prime Number series upto ${num} is as follows ${p_series.join(", ")}`);
        palindrom(num);
    }
}

function palindrom(num) {
    if (isNaN(num) || !Number.isInteger(num))              //checks for palindrome string
    {
        let n = num.length;
        let rev = "";
        for (i = n - 1; i >= 0; i--) {
            rev = rev + num[i];
        }
        if (num == rev) {
            AppendResult(`${num} is palindrome string &#9989;`);
            check_string = 1;
        }
        else {
            AppendResult(`${num} is not palindrome string &#10060;`);
        }
    }
    else                     //checks for palindrome number
    {
        let temp = num;
        let rev = 0;
        let rem = 0;
        while (temp > 0) {
            rem = temp % 10;
            temp = parseInt(temp / 10);
            rev = rev * 10 + rem;
        }

        if (num == rev) {
            AppendResult(`${num} is palindrome &#9989;`);
            check++;
        }

        else {
            AppendResult(`${num} is not palindrome &#10060;`);
        }
    }
    fibo(num);
}

function fibo(num) {
    if (isNaN(num)) {
        AppendResult(`${num} is not a number. Fibonacci  Series, Armstrong and factorial can't be calculated.`);
        fcheck(num);
    }
    else {
        let a = 1;
        let b = 1;
        let sum = 0;
        //let fib = '1' + ' ' + '1';
        let fib=[];
        fib.push(1);
        fib.push(1);
        while (a + b <= num) {
            sum = a + b;
            a = b;
            b = sum;
            //fib = fib + ' ' + sum.toString();
            fib.push(sum);
        }
        AppendResult(`Fibonacci series till ${num} is as follows: ${fib.join(', ')}`);
        armstrong(num);
    }
}

function armstrong(num) {
    if (isNaN(num)) {
        AppendResult(`${num} is not a number`);
    }
    else {
        temp = num;
        let digit = 0;
        sum = 0;
        while (temp > 0) {
            digit = temp % 10;
            temp = parseInt(temp / 10);
            sum += digit * digit * digit;
        }
        if (sum == num) {
            AppendResult(`${num} is armstrong number &#9989;`);
            check++;
        }
        else {
            AppendResult(`${num} is not armstrong number &#10060;`);
        }
        AppendResult(`${num}'s factorial is ${fact(num)}`);
        fcheck(num);
    }
}

function fact(num) {
    n = num;
    while (n > 0) {
        if (n == 1) {
            return 1;
        }
        else {
            return (n * fact(n - 1));
        }
    }
}

function fcheck(num) {
    document.getElementById("check").style.display = "inline-block"
    if (isNaN(num)) {
        if (check_string == 1) {
            document.getElementById("check").innerHTML = "Success &#9989;"
        }
        else {
            document.getElementById("check").innerHTML = "Fail &#10060;";
        }
    }
    else {
        if (check >= 2) {
            document.getElementById("check").innerHTML = "Success &#9989;";
        }
        else {
            document.getElementById("check").innerHTML = "Fail &#10060;";
        }
    }
}

function clearresult() {
    document.getElementById("Result").innerHTML = "";
    document.getElementById("check").style.display = "none";
}
function reset() {
    clearresult();
}