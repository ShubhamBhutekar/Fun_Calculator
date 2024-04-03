let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {

    displayValue = '';
    document.getElementById('display').value = '';
    localStorage.clear();
}

function calculate() {
    try {

        const result = eval(displayValue);
        document.getElementById('display').value = result;
        // displayValue = result.toString(); 
        var history = localStorage.getItem('display') || '';
        history += displayValue + ' = ' + result;
        localStorage.setItem('result', history);
    }
    catch (error) {
        document.getElementById('display').value = 'Error';
    }

}


function openCandy() {

    if (myCandy.style.display == "block") {
        document.getElementById("myCandy").style.display = "none";
    }

    else {
        document.getElementById("myCandy").style.display = "block";
    }

}

function createIceCandy() {
    const iceCandy = document.createElement('div');
    iceCandy.classList.add('ice-candy');
    iceCandy.style.left = `${Math.random() * window.innerWidth}px`;
    document.getElementById('ice-container').appendChild(iceCandy);
    setTimeout(() => {
        iceCandy.remove();
    }, 5000);
}
// Create ice candies at random intervals
setInterval(createIceCandy, 1000);





