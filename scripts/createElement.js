define(['addcom'], function (mod) {
    function create(el) {

        const title = el.title;
        const url = el.source;
        const user = el.user;
        const comment = el.comments;
        var newElement = prepareElement(title, url, comment);
        newElement.dataset.id = el._id;

       return newElement;
    }


    function prepareElement(title, url, comment) {

        let div = document.createElement('div');
        div.classList.add('single-photo');
        let h1 = document.createElement('h2');
        h1.textContent = title;
        let img = document.createElement('img');
        img.classList.add('mems');
        img.src = url;
        let opinionBar = document.createElement('div');
        opinionBar.classList.add('opinionBar');
        opinionBar.innerHTML =
           
            '<div class="rating">' +
            '<div class="like ratingButtons" data-id="like"><i class="fas fa-plus"></i></div>' +
            '<div class="dislike ratingButtons" data-id="dislike"><i class="fas fa-minus"></i></div>' +
            '</div>' +
            '<h3>OK</h3>' +
            '<button class="add-com">Dodaj komentarz</button>';

        div.appendChild(h1);
        div.appendChild(img);
        div.appendChild(opinionBar);

        let commnents = document.createElement('div');
        commnents.classList.add('coments');
        let onlyComent = document.createElement('div');
        onlyComent.classList.add('only-coment');



         [].forEach.call(comment, function (com) {
            mod.add(onlyComent, com.text, com.user, false);
        })
        commnents.appendChild(onlyComent);

        commnents.innerHTML += '<div class="form">' +

            ' <form>' +
            ' <input type="text" id="fname" name="firstname" placeholder="Twój nick..">' +
            ' <textarea id="coment" name="coment" placeholder="Wpisz komentarz .."></textarea>' +
            '</form>' +
            '<button class="send">Wyślij</button>' +
            '</div>';

       div.appendChild(commnents);

        return div;


    }

    return {
        create: create
    };

})
