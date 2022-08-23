<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>
<body>
    <h1>Minha Calculadora</h1>

    Primeiro Número <br />
    <input id="n1" type="number" /><br />
    Segundo Número<br />
    <input id="n2" type="number" /><br /><br />
    <button onclick="somar()">Somar</button>
    <button onclick="subtrair()">Subtrair</button>
    <button onclick="multiplicar()">Multiplicar</button>
    <button onclick="dividir()">Dividir</button>
    <br /><br />
    O Resultado é <span></span>

    <script>
        var n1 = document.querySelector('#n1')
        var n2 = document.querySelector('#n2')
        var resultado = document.querySelector('span')

        function somar() {
            resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
        }
        function subtrair() {
            resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
        }
        function dividir() {
            resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
        }
        function multiplicar() {
            resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
        }
    </script>
</body>
</html>
