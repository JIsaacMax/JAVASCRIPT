// var ouvido = window.document.getElementById('areadacao')

//         ouvido.addEventListener('click', clicar)
//         ouvido.addEventListener('mouseout', enter)
//         ouvido.addEventListener('mouseout', sair)


        function clicar(){
            var clicagem = window.document.getElementById('clicagem');
            clicagem.innerText = 'Clicou!';
        }
        
        function enter(){
            var tofora= document.createElement('p')
            tofora.setAttribute('id', 'haha')
            var naoqualquercoisa = document.getElementById('haha')
            naoqualquercoisa.innerText = '<p>BUMBUMGULOSO</p>'
        }

        for(let rep; rep<10; rep++){
            setTimeout(8)
        }