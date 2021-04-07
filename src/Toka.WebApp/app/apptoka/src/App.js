import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import DataTable from './components/dataTable'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Login/> */}
      <DataTable/>
    </div>
  );
}

export default App;
