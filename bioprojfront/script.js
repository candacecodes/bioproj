document.addEventListener("DOMContentLoaded", function() {

    fetch('http://localhost:3000/decks')
    .then(res => res.json())
    .then(json => json.forEach(deck => renderDecks(deck)));
    // .then(json => deck => renderDeck(deck));


//GET, POST, PATCH, PUT, DELETE

function renderDecks(deck){
    let deckCard = document.getElementById('deck-card-display')
    let div = document.createElement('div')
    div.id = deck.id
    div.innerText = ``
    div.innerHTML = `
    <p>${deck.deck_name}</p>`
    deckCard.appendChild(div)
}

// function deleteDeck(deck) {
//     fetch(`http://localhost:3000/decks/${deck.id}`,{
//       method:'DELETE'
//     })
//     .then(res => res.json())
//     .then(json=>{
//      let cardName = document.getElementById('card-name')
//      let imageSrc = document.getElementById('image-src')
//      let description = document.getElementById('description')

//      let editBtn = document.getElementById('edit-btn')
//      let deleteBtn = document.getElementById('delete-btn')


//      cardName.innerText = `` 
//      imageSrc.src = `` 
//      description.innerText = ``

//  })

 // update the available bio cards => pessimistic rendering 

// }

//cards 
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

        let addToDeckBtn = document.createElement("BUTTON");
        addToDeckBtn.innerText = "Add to Deck"
        description.appendChild(addToDeckBtn);

        addToDeckBtn.addEventListener("click", () => addToDeck(card))

        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerText = "Delete"
        description.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => deleteCard(card))
    }

    function addToDeck(card){
        fetch(`http://localhost:3000/decks/1`,{
            method:'POST'
          })
          .then(res => res.json())
          .then(json=>{
            let singleDeckCardName = document.getElementById('single-deckcard')
            let div = document.createElement('div')
            div.id = deckcard.id 
            div.innerText = ``
            div.innerHTML = `
            <p>${deckcard.card.card_name}</p>`
   
       })


       let singleDeckCardName = document.getElementById('single-deckcard')
       let div = document.createElement('div')
       div.id = deckcard.id 
       div.innerText = ``
       div.innerHTML = `
       <p>${deckcard.card.card_name}</p>`


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
             card: {
            "card_name": e.target.cardName.value,
            "image_src": e.target.imageSrc.value,
            "description": e.target.description.value,
            "note": e.target.note.value,
            "deck_ids": [11]
             }
         })
       })
     }



})