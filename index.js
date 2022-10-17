document.getElementById("btnAdd").addEventListener("click", addNotes);
document.getElementById("note").addEventListener("input", disableButton);
let totalTasks = 0;
let checkedTasks = 0;

function disableButton() {
  let inputValue = document.getElementById("note").value;
  document.querySelector("#btnAdd").disabled = inputValue == "";
}
function marks(event) {
  const checkInput = event.target;

  if (checkInput.checked) {
    checkedTasks++;
    taskDone.innerHTML = `Задач выполнено ${checkedTasks}/${totalTasks}`;
  } else {
    checkedTasks--;
    taskDone.innerHTML = `Задач выполнено ${checkedTasks}/${totalTasks}`;
  }
}

function addNotes() {
  let whriteNote = document.getElementById("note");
  let note = whriteNote.value;
  totalTasks++;

  if (note == "") {
    document.querySelector("#btnAdd").disabled = true;
  } else {
    let ul = document.getElementById("ulList");
    let li = document.createElement("li");
    let delButton = document.createElement("button");
    let checkInput = document.createElement("input");
    let taskDone = document.getElementById("taskDone");

    checkInput.addEventListener("change", marks);

    checkInput.setAttribute("id", "checkMark");
    checkInput.setAttribute("type", "checkbox");
    whriteNote.value = "";
    delButton.setAttribute("id", "delBtn");
    delButton.innerHTML = "Delete";

    taskDone.innerHTML = `Задач выполнено ${checkedTasks}/${totalTasks}`;
    li.innerHTML = note;
    li.prepend(checkInput);
    li.appendChild(delButton);

    let randomId = Math.floor(Math.random() * 100);
    li.setAttribute("id", `list + ${randomId}`);
    ul.appendChild(li);
    document.querySelector("#btnAdd").disabled = true;

    const deleteNotes = () => {
      checkedTasks--;
      totalTasks--;
      taskDone.innerHTML = `Задач выполнено ${checkedTasks}/${totalTasks}`;
      const deleteElem = document.getElementById(`list + ${randomId}`);
      deleteElem.remove();
    };
    delButton.addEventListener("click", deleteNotes);
  }
}

