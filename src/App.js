import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { CourseDetail } from './pages/CourseDetail/CourseDetail';
import CourseCategories from "./pages/CourseCategories";
import { Explore } from './pages/Explore/Explore';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CourseVideo } from './pages/CourseVideo/CourseVideo';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/explore' component={Explore}></Route>
          <Route path="/category" component={CourseCategories} />
          <Route path='/course-detail/:id' component={CourseDetail}></Route>
          <Route path="/course-video" component={CourseVideo}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
