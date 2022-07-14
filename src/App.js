import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [modal,setModal]=useState(true);
  const onChange = (event) => { setTodo(event.target.value) }
  const onSumbmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }



    setTodo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 함수를 보낼때 react.js 는 함수의 첫번째 argument로 현재 state로 보낸다
    // setToDos(function(currnetArray)
    // {return   [toDo,...currnetArray]
    // })

  };
 


  // 클릭시 todos삭제 변수

  const removeTodo = (index) => {
    const newTodos = toDos.filter((toDo, _index) => _index !== index)
    setToDos(newTodos);
  }
  //수정 하는 변수
  const fixTodo = (event) =>{
    setToDos(event.target.value);
  }


  //  const copy = [...toDos];
  //  const removeTodo= copy.splice(i,1);

  var today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  var dateString = year + '-' + month + '-' + day;

  // localStorage에 넣는방법.
//  const toDosString=JSON.stringify(toDos);
//  window.localStorage.getItem("할일",toDosString)
let person = JSON.stringify(toDos);
JSON.stringify(person)
localStorage.setItem('todos', JSON.stringify(person))

  return (
    <div className="App">
      <h1>MY ToDos({toDos.length})</h1>
      <h4>{dateString}</h4>
      <form onSubmit={onSumbmit}>
        <input type="text"
          size={30} onChange={onChange}
          placeholder='오늘할일을 적어보자 이 돼지뇨속아'
          value={toDo} />
        <button>Add To Do</button>
      
      </form>
      <hr />
      {modal==true ? <Modal/> : null }
      <ul>
        
        

        {
          toDos.map(function (item, index) {
           
            return (
             
              <li key={index}>{item}
               {/* <button onClick={() => {
              //   let copy = [...toDos];
              //   copy.splice(index, 1);
              //   setToDos(copy);
              // }}>👌</button> */}
                <button onClick={() => { removeTodo(index) }} >삭제</button>
                {/* <button onClick={()=>{fixTodo(index) }}>수정</button> */}
</li>

            )
          })
          // }
          //  {toDos.map((item,index)=> (
          //   <li>{item}</li>
          //   ))
          // }
        }
      </ul>


    </div>

  );
}
function Modal(props){
  return(
    <div className='modal'>
        <h3> write your todolist !!</h3>
       
    </div>
    
  )
}

export default App;
