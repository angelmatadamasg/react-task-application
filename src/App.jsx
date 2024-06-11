import TaskList from "./components/TaskList";
import Taskform from "./components/Taskform";

function App() {
  

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p10">
      <Taskform />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
