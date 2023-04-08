//Character to be escaped [.*+?^${}()|[\]\\]
function search(){
let textToSearch = document.querySelector("input").value;
let paragraph = document.getElementById("paragraph")
// console.log(paragraph.innerText);
textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
let pattern = new RegExp(`${textToSearch}`, "gi");
paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}

document.querySelector("input").addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        search();
    }
})