let selectButton = document.getElementById("addBtn");
let selectNameInput = document.getElementById("inputName");
let selectContentInput = document.getElementById('inputContent');
let selectTodoDiv = document.getElementById('todo');


selectButton.addEventListener('click',(e)=>{
  let nameValue=selectNameInput.value;
  let contentValue=selectContentInput.value;
  let createdDiv = document.createElement('div');
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText='X';
  createdDiv.innerText=`${nameValue}: ${contentValue}   `;
  createdDiv.appendChild(deleteBtn);
  selectTodoDiv.appendChild(createdDiv);
  selectNameInput.value='';
  selectContentInput.value='';
});

function onclick(event){
  const clicked=event.target;
  if (clicked.tagName==='BUTTON'){
    const parentDiv = clicked.parentElement;
    parentDiv.parentElement.removeChild(parentDiv);
  }
}

selectTodoDiv.addEventListener('click',onclick);


