import './App.css';
<<<<<<< HEAD
import './components/EmailRequest/bootstrap.min.css';
import EmailRequest from './components/EmailRequest/EmailRequest';

function App() {
  return (
    <div className="container">
     <h1>Alpha Learn</h1>
     <EmailRequest/>
    </div>
=======
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './components/Home/Home';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={Home} />
     </Switch>
   </Router>
>>>>>>> development
  );
}

export default App;
