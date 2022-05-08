// document.getElementById('addItem').addEventListener('click', function() {
//     localStorage.setItem('users', JSON.stringify({name: "Josh Ibbotson", colour: "black", age: "26"})
//     );
//     updateUI();
// });

document.getElementById('description').addEventListener('input', function() {
    localStorage.setItem('Note', JSON.stringify({ title: title.value, description: description.value}));  
})

document.getElementById('description').addEventListener('input', letter=> {
    let values = JSON.parse(localStorage.getItem('Note'));
    document.getElementById('descriptionProjection').textContent = letter.target.values; 
})


// function revealNote () {
//     let values = JSON.parse(localStorage.getItem('Note'.title));
//     document.getElementById('descriptionProjection').textContent = values; 
// }


// function updateUI() {
//     let values = []
//     let keys = Object.keys(localStorage)
//     let i = keys.length;
//     while (i--) {
//         values.push(localStorage.getItem(keys[i]));
//      }
    
//     document.getElementById('descriptionProjection').textContent = values; 
// }

// function updateUI() {
//     let values = JSON.parse(window.localStorage.getItem('Note'));
//     document.getElementById('descriptionProjection').innerHTML = values; 
// console.log (values);
    
// }