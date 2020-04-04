let ID = 1;

let cards = {
    // "1":{
    //     ques: "cabron",
    //     ans: "bobo"
    // }
}


// functionality to add card
addCard = () =>{
    let question = document.getElementById('question').value;
    let answer = document.getElementById('answer').value;

    

    if(Object.keys(cards).length === 0 && ID === 1){ // contar length de cards cuando esta vacio
        cards[ID] = {ques: question, ans: answer};
    }
    else{
        ID = ID + 1;
        cards[ID] = {ques: question, ans: answer};
    }


    console.log(cards);

    let item = question;

    showNewCard(item, question, answer); // always show new card

    console.log(item)

   

    
}

// show new card
showNewCard = (item, question, answer) =>{
    document.querySelector('.card-template').innerHTML = `
    <button id="flip">Flip</button>
    <p
    style = "font-size:80px;
    font-style:italic;">
    ${item}</p>
    `;

    // flip to see the answer
    document.getElementById('flip').addEventListener('click', ()=>{
        if(item === question){
            item = answer;
        }
        else{
            item = question;
        }
        document.querySelector('.card-template').innerHTML = `
        <button id="flip">Flip</button>
        <p
        style = "font-size:80px;
        font-style:italic;">
        ${item}</p>
        `;
    });


    
}

// show template to add a card
showTemplate = () =>{
    document.querySelector('.card-template').innerHTML = `
    <br><br>
    <label>Question</label>
    <input type="text" id = "question" placeholder="Enter a question">
    <br><br><br>
    <label>Answer</label>
    <input type="text" id = "answer" placeholder="Answer your question">
    <br><br>
    <button id="add-card">Add</button>
    `;    

    // add a card to an object 
    document.getElementById('add-card').addEventListener('click', addCard);
}

nextCard = ()=>{

    if(ID !== Object.keys(cards).length){
        ID = ID + 1;

        document.querySelector('.card-template').innerHTML = `
        <button id="flip">Flip</button>
        <p
        style = "font-size:80px;
        font-style:italic;">
        ${cards[ID].ques}</p>
        `;
    }
    // FLIP to see the answer
    let item = cards[ID].ques;

    document.getElementById('flip').addEventListener('click', ()=>{
        if(item === cards[ID].ques){
            item = cards[ID].ans;
        }
        else{
            item = cards[ID].ques;
        }
        document.querySelector('.card-template').innerHTML = `
        <button id="flip">Flip</button>
        <p
        style = "font-size:80px;
        font-style:italic;">
        ${item}</p>
        `;
    });

    
    

}

prevCard = ()=>{

    if(ID !== 1){
        ID = ID - 1;

        document.querySelector('.card-template').innerHTML = `
        <button id="flip">Flip</button>
        <p
        style = "font-size:80px;
        font-style:italic;">
        ${cards[ID].ques}</p>
        `;
    }
    // FLIP to see the answer
    let item = cards[ID].ques;

    document.getElementById('flip').addEventListener('click', ()=>{
        if(item === cards[ID].ques){
            item = cards[ID].ans;
        }
        else{
            item = cards[ID].ques;
        }
        document.querySelector('.card-template').innerHTML = `
        <button id="flip">Flip</button>
        <p
        style = "font-size:80px;
        font-style:italic;">
        ${item}</p>
        `;
    });

}

clearCards = ()=>{
    document.querySelector('.card-template').innerHTML = '';
    cards = {};
}






// show a card template with event listener by hitting 'add new button'
document.querySelector('#show-card-template').addEventListener('click', showTemplate);

document.getElementById('next').addEventListener('click', nextCard);

document.getElementById('prev').addEventListener('click', prevCard);

document.getElementById('clear-cards').addEventListener('click', clearCards);



// document.getElementById('flip').addEventListener('click', ()=>{
//     if(item === question){
//         item = answer;
//     }
//     else{
//         item = question;
//     }
//     document.querySelector('.card-template').innerHTML = `
//     <button id="flip">Flip</button>
//     <p
//     style = "font-size:80px;
//     font-style:italic;">
//     ${item}</p>
//     `;
// });
