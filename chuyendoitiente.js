function doSth() {
    let input = parseInt(document.getElementById("input").value);
    let From = parseInt(document.getElementById("From").value);
    let To = parseInt(document.getElementById("To").value);
    document.getElementById("result").innerText = (input*From/To).toFixed(3);
}