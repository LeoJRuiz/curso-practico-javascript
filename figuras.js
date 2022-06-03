// Codigo Cuadrado
function perimetroCuadrado (lado){
    return lado * 4
};


function areaCuadrado (lado){
    return lado * lado;
} 

// Codigo Triangulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

// Codigo Circulo
function diametroCirculo(radio){
    return radio * 2;
}
const pi = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio * radio) * pi;
}

//Aqui interactuamos con el HTML 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const valor1 = Number(lado1.value);
    const lado2 = document.getElementById("lado2");
    const valor2 = Number(lado2.value);
    const base = document.getElementById("base");
    const valorb = Number(base.value);

    const perimetra = perimetroTriangulo(valor1, valor2, valorb);
    alert(perimetra);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("base");
    const valorb = base.value;
    const altura = document.getElementById("altura");
    const valora = altura.value;

    const area = areaTriangulo(valorb, valora);
    alert(area);
}

function alturaIso(ladoIso, baseIso){
    return Math.sqrt((ladoIso * ladoIso) - (baseIso * baseIso/4))
    
}
