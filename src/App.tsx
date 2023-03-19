import { BrowserRouter as Router,Routes, Route, Navigate} from "react-router-dom";
import Welcome from './components/Welcome';
import Login from "./components/Login";
import Feed from './components/Feed';
import { FaHeart } from "react-icons/fa";
function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/" element= {<Welcome/>}/>
        <Route path="/Login" element= {<Login/>}/>
        <Route path='/Feed' element={<Feed/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
