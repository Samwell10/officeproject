import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Topbar/>
      <div className="middlepage">
          <Content/>
      </div>
    </div>
  );
}

export default App;
