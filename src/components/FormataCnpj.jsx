const FormataCnpj = (valorBruto) => {
    const valor = typeof valorBruto === "string" ? valorBruto : "";
    const numeros = valor.replace(/\D/g, "").slice(0, 14);
    let formatado = numeros;

    if (numeros.length > 2) {
        formatado = numeros.slice(0, 2) + "." + numeros.slice(2);
    }
    if (numeros.length > 5) {
        formatado = formatado.slice(0, 6) + "." + formatado.slice(6);
    }
    if (numeros.length > 8) {
        formatado = formatado.slice(0, 10) + "/" + formatado.slice(10);
    }
    if (numeros.length > 12) {
        formatado = formatado.slice(0, 15) + "-" + formatado.slice(15);
    }

    return formatado;

}

export default FormataCnpj;