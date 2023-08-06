function timer() {
    function criaSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const timer = document.querySelector('.timer');
    let segundos = 0;
    let timerf;

    function iniciaTimer() {
        timerf = setInterval(() => {
            segundos++;
            timer.innerHTML = criaSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            timer.classList.remove('pausado');
            clearInterval(timerf);
            iniciaTimer();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timerf);
            timer.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timerf);
            timer.innerHTML = '00:00:00';
            segundos = 0;
            timer.classList.remove('pausado');
        }
    });
}

timer();

