function calculator(type, element) {

    var calc = document.getElementById("calc");
    var text = calc.innerText;

    if (type === "cls") {
        return calc.innerText = "0";
    } else if (type === "delete") {
        if (text.length < 2) return calc.innerText = "0";
        var newText = text.split("");
        newText.pop();
        return calc.innerText = newText.join("");
    } else if (type === "result") {
        try {

            var problem = text.replace("÷", "/").replace("x", "*");
            var result = eval(problem);

            return calc.innerText = result;

        } catch (err) {

            return calc.innerText = "Error :("
        }
    }

    if (text === "0" || text === "Error :(") return calc.innerText = type;

    calc.innerText = calc.innerText + type;
}