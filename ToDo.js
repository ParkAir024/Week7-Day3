console.log('Padawans Dom manipulation')
const body = document.body
const btn = document.createElement('button')

toggleTheme('black', 'white', 'Flash Bang')

btn.innerText = 'Dark Mode'
body.appendChild(btn)

btn.addEventListener('click', () => {
    if (body.style.backgroundColor === 'black') {
        toggleTheme('white', 'black', 'Dark Mode')
    } else {
        toggleTheme('black', 'white', 'Flash Bang')
    }
})

function toggleTheme(bgColor, txtColor, nextTheme) {
    body.style.backgroundColor = bgColor
    body.style.color = txtColor
    btn.innerText = nextTheme
}

function titleCase(string){
    let output = ''
    const words = string.split(' ')
    for (let i = 0; i< words.length; i++){
      output += words[i][0].toUpperCase() + words[i].substring(1) + ' '
    }
    return output.trim(' ')
  }

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const taskTitle = document.getElementById('task-field').value;
    const taskDescription = document.getElementById('description-field').value;
    const todoItem = document.createElement('div');
    todoItem.innerHTML = `<strong>${titleCase(taskTitle)}</strong>: ${taskDescription}`;

    todoItem.addEventListener('click', function() {
        this.remove();
    });

    document.body.appendChild(todoItem);

    taskForm.reset();
});

document.body.addEventListener('click', function (event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'DIV') {
        clickedElement.classList.toggle('done');
    }
});
