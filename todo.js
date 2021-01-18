const toDoForm = document.querySelector(".js-toDoForm"),
  // input = form.querySelector("input")
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "ToDos";
let toDos = []; //todo 목록 array

function saveToDos() {
  //toDos를 localStorage에 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //localStorage에는 string으로만 저장하려 하므로 JSON.stringify()를 통해 localStorage에 Javascript Object를 string으로 저장해야함
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); //html li요소에서 삭제
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  }); //filter함수는 개별로 실행하는 함수에 return되는 조건에 만족되는 요소를 따로 Array로 생성한다
  console.log(cleanToDos);
  toDos = cleanToDos; // toDos에 선택된 toDo가 삭제된 cleanToDos를 대입(toDos가 const여선 안됨)
  saveToDos(); //새로 갱신된 toDos를 localStorage에 저장
}

function paintToDo(text) {
  const li = document.createElement("li"); //DOM을 통해 HTML li 요소 생성
  const delBtn = document.createElement("button"); //DOM을 통해 HTML button 요소 생성
  const span = document.createElement("span"); //DOM을 통해 HTML span 요소 생성
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn); //li에 delBtn 추가
  li.appendChild(span); //li에 span 추가
  li.id = newId; //li에 id 부여
  toDoList.appendChild(li); //ul에 li 추가
  const toDosObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDosObj);
  saveToDos();
}

function loadToDos() {
  //localStorage에 있는 toDos를 불러옴
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //console.log(loadedToDos); 출력하면 String으로 나옴
    const parsedToDos = JSON.parse(loadedToDos); //localStorage에 있는 string 자료를 Javascript object로 불러옴
    //console.log(parsedToDos); object로 출력되서 나옴
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    }); //parsedToDos Array 요소 각각에 forEach()함수를 이용해 적용할 함수를 실행
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
