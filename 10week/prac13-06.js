onmessage = function(e) {
    var sum;
    var num1 = e.data.num1;
    var num2 = e.data.num2;
    sum = num1 * num2;
    postMessage(sum);
}