


// reveals note creator form//
const plus = document.getElementById('circle')
plus.addEventListener("click", revealNoteCreator)

function revealNoteCreator() {
    document.getElementById("mainContainer").style.display = "flex";
}

// takes form values and puts it into localstorage//
document.getElementById('description').addEventListener('input', function() {

    const time = new Date().toLocaleString();
    localStorage.setItem('Note', JSON.stringify({ title: title.value, description: description.value}));
    localStorage.setItem('Time', JSON.stringify({ date: time}));
});

// creates note from local storage data and maker note creator hidden//
document.getElementById('submitFormBtn').addEventListener('click', revealNote());

function revealNote() {
    let titleReveal = JSON.parse(localStorage.getItem('Note')).title;
    document.getElementById('titleProjection').textContent = titleReveal;

    let descriptionReveal = JSON.parse(localStorage.getItem('Note')).description;
    document.getElementById('descriptionProjection').textContent = descriptionReveal; 
    
    let timeReveal = JSON.parse(localStorage.getItem('Time')).date;
    document.getElementById('timeProjection').textContent = timeReveal;

    document.getElementById("mainContainer").style.display = "none";

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
