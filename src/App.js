import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { CourseDetail } from './pages/CourseDetail/CourseDetail';
import CourseCategories from "./pages/CourseCategories";
import { Explore } from './pages/Explore/Explore';

function App() {
  return (
    <Router>
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/cc" component={CourseCategories} />
      </Switch> */}
      <Switch>
       <Route exact path='/' component={Explore} />
       <Route exact path="/cc" component={CourseCategories} />

     </Switch>
    </Router>
  );
}

export default App;
