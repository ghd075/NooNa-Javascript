const btn = document.getElementById('btn');   // 버튼
let addValue = document.getElementById('addValue'); // 할일 입력
let result = document.getElementById('result'); // 추가된 할일

// 할일 추가시
function addTodo() {
  if(!addValue.value) {
    alert('내용을 입력하세요!');
    addValue.focus();
  } else {
    
    let list = document.createElement('li');
    let del = document.createElement('button');
    list.innerHTML = addValue.value;
    result.appendChild(list);   // 추가된 할일에 할일 리스트 추가하기
    list.appendChild(del);  // 할일 리스트 추가시 삭제버튼도 추가
    del.innerText = "x";      //삭제버튼에 들어갈 'x'자 문자
    del.style.fontSize = "20px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.style.position='relative';
    del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
  
    addValue.value = '';      // 할일 입력창 초기화
    addValue.focus();         // 강제 커서 깜빡임
    list.addEventListener('click', function(){
      list.style.textDecoration = 'line-through';
      list.style.color = 'red';   // 클릭시 색변환
    });
  }

}

// 할일 목록 삭제시
function deleteList(e) {    // 삭제 버튼(x) 클릭 시
  let removeOne = e.target.parentElement; // 선택한 목록 한개만 지우기(부모 객체를 지운다.)
  removeOne.remove();
}

//모두 삭제시
function allClearList(e){
  if(confirm("정말 삭제하시겠습니까?") === true){ //취소메시지가 true(ok)일때
      if(result.innerText == ''){                      //목록칸이 비어있다면
          alert("삭제할 목록이 없습니다");            //삭제할 목록이 없다는 경고창뜨기
      }else{                                         //삭제할 목록이 있다면
          result.innerText = '';                       //전체 삭제
      }
  }else{                                      //취소메시지가 false(no)일때
      return false;                           //삭제 취소
  }
}