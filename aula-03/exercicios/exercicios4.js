function inverter(n) {
    if (n === "") {
        return n;
    } else {
        return inverter(n.substr(1)) + n[0];
    }
}

console.log(inverter("vem ser tech ifood")); 
