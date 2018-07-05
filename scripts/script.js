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

                toggle.toggle(kom);

            });

        })


        const sends = document.querySelectorAll('.send');
           [].forEach.call(sends, function (el) {

            el.addEventListener('click', function (event) {
                const coment = el.parentNode.parentNode.firstChild;
                const val = el.parentNode.children[0].children[2].value;
                const user = el.parentNode.children[0].children[0].value;
                const singlePhoto = coment.parentNode.parentElement;
                console.log(el.parentNode);

                if (user.length == 0) {

                    el.parentNode.querySelector('#userError').style.display = "inline-block";

                } else if (val.length == 0) {
                    //$('#userError').css('display': 'block');
                    el.parentNode.querySelector('#contentError').style.display = "inline-block";



                } else {
                    el.parentNode.querySelector('#userError').style.display = "none";
                    el.parentNode.querySelector('#contentError').style.display = "none";
                    addcom.add(coment, val, user, true);
                    el.previousElementSibling.children[0].value = "";
                    el.previousElementSibling.children[2].value = "";
                }
            })
        });

        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector("#main-menu");
        const btn = document.querySelector('.btn');
        const container = document.querySelector('#container');
        const singlePhoto = document.querySelector('.single-photo');
        const elements = document.querySelectorAll('.rating');

        function addRate(event, ele) {

            if (ele.getAttribute('disabled') == "disable") {
                if (event.target.dataset.id == "dislike") {
                    [].forEach.call(obj, function (a) {

                        if (a._id == ele.parentNode.parentElement.dataset.id) {
                            a.rating -= 1;
                            ele.nextElementSibling.textContent = a.rating > 0 ? '+' + a.rating : a.rating;
                        }
                    })
                    event.target.classList.add('clickRateDislike');
                    ele.nextElementSibling.style.display = "block";


                } else {
                    [].forEach.call(obj, function (a) {

                        if (a._id == ele.parentNode.parentElement.dataset.id) {
                            a.rating += 1;
                            ele.nextElementSibling.textContent = a.rating > 0 ? '+' + a.rating : a.rating;
                        }
                    })

                    event.target.classList.add('clickRateLike');
                    ele.nextElementSibling.style.display = "block";

                }

                ele.setAttribute('disabled', 'enable');
            }


        }

         [].forEach.call(elements, function (ele) {

            ele.addEventListener('click', function (event) {

                addRate(event, ele);
            })




        })

        hamburger.addEventListener('click', function () {

            menu.classList.toggle('active');
            container.classList.toggle('container-move');


        });

        btn.addEventListener('click', function () {
            menu.classList.remove('active');
            container.classList.remove('container-move');
        });

    })

});
