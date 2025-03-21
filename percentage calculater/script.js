function calculate(event) {
    event.preventDefault(); 

    var total = document.getElementById('total').value;
    var obtain = document.getElementById('obtain').value;

    total = parseFloat(total);
    obtain = parseFloat(obtain);

 

    var percentage = (obtain / total) * 100;
    document.getElementById('result').innerHTML = `You have got ${percentage.toFixed(2)}%`;
}
