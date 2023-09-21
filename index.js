function rollTheDice(faces) {
    let rand = math.floor(math.random() * faces); 
    if (rand == 0) rand++;
    document.getElementById("rollResult").innerHTML = rand;
}

function testRollTheDice() {
    let success = true;
    const sixRoll = rollTheDice(6);
    if (sixRoll >= 1 && sixRoll <= 6) success = true;
    const tenRoll = rollTheDice(10)
    if (tenRoll >= 1 && tenRoll <= 10) success = true;
    alert(success);
}