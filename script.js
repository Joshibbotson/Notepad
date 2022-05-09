// reveals note creator form//
const plus = document.getElementById('circle')
plus.addEventListener("click", revealNoteCreator)

function revealNoteCreator() {
    document.getElementById("mainContainer").style.display = "flex";
    document.getElementById("createNote").style.display = "none";

}


// takes form values and puts it into localstorage//
document.getElementById('description').addEventListener('input', function() {

    const time = new Date().toLocaleString();
    localStorage.setItem('Note', JSON.stringify({ title: title.value, description: description.value}));
    localStorage.setItem('Time', JSON.stringify({ date: time}));
});

//remove "Write here..."" text and alters css text color to black from grey
document.getElementById('description').addEventListener('click', removeText,{once:true})
document.getElementById('description').addEventListener('focus', removeText,{once:true})

function removeText() {
    document.getElementById('description').value = "";
    document.querySelector('textarea').style.color = "black";}
    




// creates note from local storage data and maker note creator hidden//
document.getElementById('submitFormBtn').addEventListener('click', inputNoteData());

function inputNoteData() {
    let titleReveal = JSON.parse(localStorage.getItem('Note')).title;
    document.getElementById('titleProjection').textContent = titleReveal;

    let descriptionReveal = JSON.parse(localStorage.getItem('Note')).description;
    document.getElementById('descriptionProjection').textContent = descriptionReveal; 
    
    let timeReveal = JSON.parse(localStorage.getItem('Time')).date;
    document.getElementById('timeProjection').textContent = timeReveal;
    
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("createNote").style.display = "flex";

}
// exit button from note creator form//
document.getElementById('exitBtn').addEventListener('click', exitNoteCreator);

function exitNoteCreator() {
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("createNote").style.display = "flex";
}











// function updateUI() {
//     let values = []
//     let keys = Object.keys(localStorage)
//     let i = keys.length;
//     while (i--) {
//         values.push(localStorage.getItem(keys[i]));
//      }
    
//     document.getElementById('descriptionProjection').textContent = values; 
// }
