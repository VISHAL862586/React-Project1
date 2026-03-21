function App() {

  let todos = [
    { id: 1, todo: "Do something nice for someone you care about", completed: false, userId: 152 },
    { id: 2, todo: "Memorize a poem", completed: true, userId: 13 }
  ];

  return (
    <>
      {todos.map((to) => {
        return (
          <div key={to.id}>
            <p>{to.todo}</p>
            <p>{to.completed ? "completed" : "uncompleted"}</p>
          </div>
        );
      })}
      <br></br>
      <br></br>
      <App1></App1>
      <br></br>
      <br></br>

      <Todo key={to.id} title={to.todo} completed={to.completed}></Todo>

    </>
  );
}

function App1(){
  let sports =["Cricket", "Football", "Tennies"];
  return (
    <div>
      {
        sports.map((s, i)=>{
          return <p key={i}>{s}</p>
        })
      }
    </div>
  )
}

function Todo({title, completed}){
  return (
    <div>
      <p>{title}</p>
      <p>{completed ? "Completed":"Uncompleted"}</p>
    </div>
  )
}

export default App;