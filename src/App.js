import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer'
import Homepage from './components/Homepage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Router>
      
      <div className='header'>
        
      </div>
      <div>
        <Navbar/>
      </div>
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route path='/Projects'>
            <ProjectsPage/>
          </Route>
          <Route path='/Contact'>
            <ContactPage/>
          </Route>
        </Switch>
      </div>
      <div>
        <Footer/>
      </div>
    </Router>
  )
}
export default App;
