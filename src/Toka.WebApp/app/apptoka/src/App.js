import DataTable from './page/Persona/dataTable';
import Login from './page/Login/Login'
import Reporte from './page/Reporte/Reporte'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute'

function App() {
  return (
    <div>          
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <PrivateRoute  path="/persona-fisica" component={DataTable} /> 
          <PrivateRoute  path="/reportes" component={Reporte}/>         
        </Switch>                
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Login/> */}
      {/* <DataTable/> */}
    </div>
  );
}

export default App;
