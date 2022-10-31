import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import AddBranch from './branches/AddBranch';
import EditBranch from './branches/EditBranch';
import ViewBranches from './branches/ViewBranches';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
              <Route exact path="/" element ={<Home />}/>    
              <Route exact path="/addbranch" element ={<AddBranch/>}/>   
              <Route exact path="/editBranch/:id" element={<EditBranch />}/>
              <Route exact path="/viewBranch/:id" element={<ViewBranches />} />
          </Routes>
       
      </Router>
      
    </div>
  );
}

export default App;
