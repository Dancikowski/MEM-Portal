require(['createElement', 'toggle', 'addcom'], function (mod, toggle, addcom) {

    $.getJSON('scripts/api.json', function (obj) {

    [].forEach.call(obj, function (element) {


            let newPhoto = mod.create(element);
            document.querySelector('#container').appendChild(newPhoto);
        })

        const addBtn = document.querySelectorAll('.add-com');


            [].forEach.call(addBtn, function (el) {
            el.addEventListener('click', function (event) {
                event.preventDefault();
                const kom = el.parentNode.nextElementSibling;
                console.log(kom);
                toggle.toggle(kom);

            });

        })

        console.log(obj[0].rating);







        const sends = document.querySelectorAll('.send');
           [].forEach.call(sends, function (el) {

            el.addEventListener('click', function (event) {
                const coment = el.parentNode.parentNode.firstChild;
                const val = el.parentNode.children[0].children[1].value;
                const user = el.parentNode.children[0].children[0].value;
                const singlePhoto = coment.parentNode.parentElement;
                addcom.add(coment, val, user, true);
                el.previousElementSibling.children[0].value = "";
                el.previousElementSibling.children[1].value = "";


            })
        });

        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector("#main-menu");
        const btn = document.querySelector('.btn');
        const container = document.querySelector('#container');
        const singlePhoto = document.querySelector('.single-photo');





        const elements = document.querySelectorAll('.rating');
        console.log(elements);

                [].forEach.call(elements, function (ele) {
            ele.addEventListener('click', function (event) {

                if (event.target.dataset.id == "dislike") {
                    document.querySelector('.like').classList.remove('clickRateLike');
                    event.target.classList.toggle('clickRateDislike');

                } else {
                    document.querySelector('.dislike').classList.remove('clickRateDislike');
                    event.target.classList.toggle('clickRateLike');
                }

            })
        })









        hamburger.addEventListener('click', function () {

            menu.classList.toggle('active');
            container.classList.toggle('container-move');
            console.log("Add meme");

        });

        btn.addEventListener('click', function () {
            menu.classList.remove('active');
            container.classList.remove('container-move');
        });

    })

});
