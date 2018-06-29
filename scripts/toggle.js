define('toggle', function (tog) {

    const show = function (kom) {

        const getHeight = function () {

            //tutaj pobieram wysokość któa przyda się przy animacji
            //najpierw element się pojawia, odczytuje heihjt i znika, 
            // to są milisekundy więc na ekrnie nic nie widac

            kom.style.display = 'block';
            const height = kom.scrollHeight + 'px';
            kom.style.display = '';
            return height;
        };


        const height = getHeight(kom);
        kom.classList.add('inactive');
        kom.style.height = height;

        window.setTimeout(function () {

            kom.style.height = '';
        }, 500);

    };


    const hide = function (kom) {

        //bierzemy wyskokosc 
        //w sumie tego heghta w show zaraz usuwam więc musze ta wartośc tak jakby pobrać
        //aby było na naczym zrobić animacje
        kom.style.height = kom.scrollHeight + 'px';

        window.setTimeout(function () {

            kom.style.height = '0';
        }, 10);

        //gdy jest juz po animacji usuwany klase
        window.setTimeout(function () {

            //gdy animacja dobiegnie konca usuwam klase 
            kom.classList.remove('inactive');
        }, 500);
    }

    const toggle = function (kom) {

        if (kom.classList.contains('inactive')) {

            hide(kom);
            return;
        } else show(kom);

    };

    return {

        toggle: toggle
    };

})
