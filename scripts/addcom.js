define('addcom', function (addcom) {

    function add(el, essence, userName, flag) {

        //console.log(el.nextSibling);
        // console.log(essence);
        const single = document.createElement('div');
        single.classList.add('single-coment');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figCaption = document.createElement('figcaption');
        figCaption.textContent = userName;
        img.setAttribute('src', 'img/avatar.png');
        figure.appendChild(img);
        figure.appendChild(figCaption);

        const text = document.createElement('div');
        text.classList.add('coment-text');
        const span = document.createElement('p');
        span.textContent = essence;

        text.appendChild(span);
        single.appendChild(figure);
        single.appendChild(text);

        console.log(single);
        console.log(el);
        el.appendChild(single);



    }




    return {
        add: add

    };
})
