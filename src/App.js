import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { CourseDetail } from './pages/CourseDetail/CourseDetail';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={Home} />
     </Switch>
     {/* <Switch>
       <Route exact path='/' component={CourseDetail} />
     </Switch> */}
   </Router>
  );
}

export default App;
