
import Content from './Pages/Home/Content';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Menupage from './Pages/Menu/Menupage';
import Orderpage from './Pages/Orders/Orderpage';
import Report from './Pages/Report/Report.js';
import Transactionpage from './Pages/Transactions/Transactionpage';
import Employeepage from './Pages/Employee/Employeepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return ( 
      <Router>
          <div className="App">
          <Sidebar/>
            <Topbar/>
            
              <div className="middlepage"> 
                 <Switch>
                    <Route path="/officeproject">
                      <Content/>
                    </Route>
                    <Route path="/Pages/Menu/Menupage.js">
                    <Menupage/>
                    </Route>
                    <Route path="/Pages/Orders/Orderpage">
                      <Orderpage/>
                    </Route>
                    <Route path="/Pages/Report/Report.js">
                      <Report/>
                    </Route>
                    <Route path="/Pages/Transactions/Transactionpage">
                      <Transactionpage/>
                    </Route>
                    <Route path="/Pages/Employee/Employeepage">
                      <Employeepage/>
                    </Route>
                  {/* <Route path="/" component={<Content/>}/>
                  <Route path="/Pages/Menu/Menupage" component={<Menupage/>}/>
                  <Route path="/Pages/Orders/Orderpage" component={<Orderpage/>}/>
                  <Route path="/Pages/Report/Report.js" component={<Report/>}/>
                  <Route path="/Pages/Transactions/Transactionpage" component={<Transactionpage/>}/>
                  <Route path="/Pages/Employee/Employeepage" component={<Employeepage/>}/> */}
                </Switch>
                   
                  
              </div>
          </div>  
      </Router>  
  );
}

export default App;
