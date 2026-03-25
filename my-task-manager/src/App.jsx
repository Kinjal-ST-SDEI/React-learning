import { useState } from "react";

/*

function App() {
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h1>My Task Tracker</h1>
      <p>Today is: {today}</p>
      <button onClick={() => alert('Action initiated!')}>
        Add New Task
      </button>
    </div>
  );
}

export default App;

*/
function App() {
  // const today = new Date().toLocaleDateString();
  const task = 7;
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState("");
  // const [editText, setEditText]=useState("");
  // const [editIndex, setEditIndex]=useState(null);
  const [editMode, setEditMode] = useState({});

// => {}
  const handleEdit = (index) => {
    setEditMode(cur => ({ ...cur, id: index }));
    const updatedList = taskList.map((item, i) => {
      if (i === index) {
        return editMode.text;
      }
      return item;
    });
    setTaskList(updatedList);
    setEditMode({});
  }


  const addTask = () => {
    if (text != "") {
      setTaskList([...taskList, text]);
      setText("");
    }
  }
  const deleteTask = (currentIndex) => {
    const updatedList = taskList.filter((_, index) => index !== currentIndex);
    setTaskList(updatedList);
  }
  // const edit = (index) => {
  //   setEditIndex(index);

  // }
  return (
    <div>
      <div>{console.log(setEditMode.cur)}</div>
      <h1 className="text-6xl font-bold text-center p-8">My Todo App</h1>
      {/* <p>Today is: {today}</p> */}
      <p className="text-center text-3xl font-bold pb-2">You have {taskList.length} tasks to complete today </p>
      <div className="mt-7 text-center">
        <input className="p-2 m-2 bg-slate-500 rounded text text-white" type="text text-center" value={text} onChange={(event) => setText(event.target.value)} />
        <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 active:scale-95" onClick={addTask}>Add New Task</button>
      </div>
      {/* <p>You are currently Typing: {text}</p> */}

      <ul className="bg-white ">
        {taskList.map((item, index) => (
          <li className="m-2 p-2 card rounded bg-gray-500 text-gray-100 border border-black relative" key={index}>
            {editMode.id === index ?
              <div className="">
                <input className="p-2 m-2 bg-slate-100 rounded text text-black" defaultValue={editMode.text} onChange={(event) => {editMode.text = event.target.value}}></input>
                <div className="absolute bottom-1 right-2">
                  <button className="m-1 px-3 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 active:scale-95" onClick={()=>handleEdit(index)}>Save</button>
                  <button className="m-1 px-3 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 active:scale-95" onClick={()=>setEditMode({})}>Cancel</button>
                </div>
              </div>
              :
              <div className="">
                <span className="font-bold text-3xl">{index + 1}</span> <span className="mr-4">{item}</span>
                <div className="absolute bottom-1 right-2">
                  <button className="m-1 px-3 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 active:scale-95" onClick={() => deleteTask(index)}>X</button>
                  <button className="m-1 px-3 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 active:scale-95" onClick={() => setEditMode({ ...editMode, id: index, text: item })}>EDIT</button>
                </div>
              </div>
            }
          </li>
        ))}
      </ul>
    </div >
  );
}

export default App;