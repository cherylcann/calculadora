function calculator(type, element) {

    var calc = document.getElementById("calc");
    var text = calc.innerText;
    var ultimaLetra = text.charAt(text.length - 1);

    if (type === "cls") {
        return calc.innerText = "0";
    } else if (type === "delete") {
        if (text.length < 2 || text === "Error :(") return calc.innerText = "0";
        var newText = text.split("");
        newText.pop();
        return calc.innerText = newText.join("");
    } else if (type === "result") {

        try {

            var problem = text.replace(/÷/g, "/").replace(/x/g, "*");
            var result = eval(problem);

            return calc.innerText = result;

        } catch (err) {
            console.log(err);
            return calc.innerText = "Error :("
        }
    } else if (["+", "x", "-", "÷", "."].includes(ultimaLetra) && ["+", "x", "-", "÷", "."].includes(type)) return;

    if (text === "0" || text === "Error :(") return calc.innerText = type;

    calc.innerText = calc.innerText + type;
}