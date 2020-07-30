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
        div.addEventListener("click", () => renderSingleCard(card))

    }

    function renderSingleCard(card) {
        let cardName = document.getElementById('card-name')
        let imageSrc = document.getElementById('image-src')
        let description = document.getElementById('description')

        cardName.innerText = card.card_name 
        imageSrc.src = card.image_src 
        description.innerText = card.description 

        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerText = "delete"
        description.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => deleteCard(card))
    }

    function deleteCard(card) {
       fetch(`http://localhost:3000/cards/${card.id}`,{
         method:'DELETE'
       })
       .then(res => res.json())
       .then(json=>{
        let cardName = document.getElementById('card-name')
        let imageSrc = document.getElementById('image-src')
        let description = document.getElementById('description')

        let editBtn = document.getElementById('edit-btn')
        let deleteBtn = document.getElementById('delete-btn')


        cardName.innerText = `` 
        imageSrc.src = `` 
        description.innerText = ``

    })

    // update the available bio cards => pessimistic rendering 

}

const createCardForm = document.getElementById('create-card-form')
createCardForm.addEventListener('submit', (e) => createCard(e))

   function createCard(e) {
       e.preventDefault()

       fetch(`http://localhost:3000/cards`, {
         method: 'POST',
         headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
       },
     
         body: JSON.stringify({
           "card_name": e.target.cardName.value,
           "image_src": e.target.imageSrc.value,
           "description": e.target.description.value,
           "note": e.target.note.value
         })
       })
     }



})