//Função sem nenhum parâmetro
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos DOM</title>
    <style>
        div#area {
            font: normal 20pt Arial;
            background: rgb(22, 190, 22);
            color: white;
            width: 200px;
            height: 200px;
            line-height: 200px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="area">
        Interaja...
    </div>

    <script>
        var a = window.document.getElementById('area')
        a.addEventListener('click', clicar)
        
        function clicar() {
            a.innerText = 'Clicou!'
        }
        
// Função com parâmetros e retorno

        function clicar(a) {
            a.innerText = 'Clicou!'
            return a
        }
        
// Arrow fuction

  const function = (a) => a * 2
        
