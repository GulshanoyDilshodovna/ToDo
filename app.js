//selectors

const form = document.querySelector('form')
const inpuText = document.getElementById('input-text')
const addBtn = document.getElementById('add-btn')
const todoCards = document.querySelector('.cards')

inpuText.focus()
//events

//form events
form.addEventListener('submit', addTodo)

//functions

//add todo
function addTodo(e){
    e.preventDefault()
    // create div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('card')
    todoDiv.innerHTML = `
       <p class="todo-text">${inpuText.value}</p>
        <button class="check-btn btn" id="check-btn">
          <i class="fas fa-check"></i>
        </button>
        <button class="edit-btn btn" id="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="trash-btn btn" id="trash-btn">
          <i class="fas fa-trash"></i>
        </button>
    `
    //appenChild
    todoCards.appendChild(todoDiv)

    inpuText.value = ''
}

document.addEventListener('click', (e)=>{
   if(e.target.classList.value == 'trash-btn btn'){
       const trashBtn = document.querySelector('.trash-btn')
       trashBtn.parentElement.remove()
   }
})

