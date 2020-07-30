document.addEventListener("DOMContentLoaded", function() {


//GET, POST, PATCH, PUT, DELETE
    fetch('http://localhost:3000/cards')
    .then(res => res.json())
    .then(json => json.forEach(card => renderCardNames(card)));



    // Display available bio card names
    function renderCardNames(card){
        let singleCardName = document.getElementById('single-card-name')
        let div = document.createElement('div')
        div.id = card.id 
        div.innerText = ``
        div.innerHTML = `
        <p>${card.card_name}</p>`

        singleCardName.appendChild(div)

    }


})