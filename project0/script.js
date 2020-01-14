const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var inputValue = prompt("What will you do?", "")
  var txtNode = document.createTextNode(inputValue)

  /**
  CHECKBOX INPUT
  **/
  var checkBox = document.createElement('input')
  // Set type attribute
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('class', classNames.TODO_CHECKBOX)
  checkBox.setAttribute('name', 'todo')
  checkBox.setAttribute('onclick', 'showChecked(this)')

  /**
  DELETE INPUT
  **/
  var delBtn = document.createElement('input')
  // Set type setAttribute
  delBtn.setAttribute('type', 'button')
  delBtn.setAttribute('class', classNames.TODO_DELETE)
  delBtn.setAttribute('value', 'Delete')

  // Initialize li tag
  var li = document.createElement('li')
  li.className = classNames.TODO_ITEM

  // Include checkBox into li item
  li.appendChild(checkBox)
  // Inlucde text into li item
  li.appendChild(txtNode)
  // Include delBtn into li item
  li.appendChild(delBtn)
  // Add li item into list
  list.appendChild(li)

  // Count the amount of li tag
  itemCountSpan.innerHTML = list.getElementsByTagName('li').length
  // Init the amount of unchecked boxes
  uncheckedCountSpan.innerHTML = list.getElementsByTagName('li').length
}

function showChecked(cbox){
  if (cbox.checked){
    //cbox.setAttribute("checked", "checked")
    cbox.checked = true
  } else {
    //cbox.removeAttribute("checked")
    cbox.checked = false
  }
  uncheckedCountSpan.innerHTML = list.getElementsByTagName('li').length - document.querySelectorAll('input[name="todo"]:checked').length
}
