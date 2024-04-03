import React, { Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import component of index page
// import navigation
import Navigation from './Component/Navigation';
// import content page
import Content from './Component/Content';
// import footer
import Footer from './Component/Footer';

// import component of About page
import About from './Component/About';
import ShowandGo from './Component/ShowandGo';
// import component of Services
import Services from './Component/Services';
// import component of portfolio
import Portfolio from './Component/Portfolio';
// import component of Contactus
import Contactus from './Component/Contactus';
//  import login page
import Login from './Component/Login';
// all event description here
import EventDescription from './Component/Events/EventDescription';
import EventDescriprition2 from './Component/Events/EventDescriprition2';
import EventDescriprition3 from './Component/Events/EventDescriprition3';
import EventDescriprition4 from './Component/Events/EventDescriprition4';
import EventDescriprition5 from './Component/Events/EventDescriprition5';
import EventDescriprition6 from './Component/Events/EventDescriprition6';
// // import css
import './css/style.css.map';
import './plugins/animate-css/animate.css';
import './plugins/bootstrap/bootstrap.min.css';
import './plugins/fontawesome/css/all.css';
import './plugins/fontawesome/css/all.min.css';
import './plugins/themify/css/themify-icons.css';
import './plugins/fontawesome/css/all.min.css';
import './plugins/magnific-popup/magnific-popup.css';
import './plugins/slick/slick.css';
import './plugins/slick/slick-theme.css';
import './App.css';

// import Modal from './Component/Modal.js';
export class App extends Component {
  
  render() {
    return (
      <>
      	 {/* <div className="App">
      <header className="App-header">
        <Modal />
      </header>
    </div> */}
      <Router>
       
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Content></Content>} ></Route>
          </Routes>
          <Routes>
            <Route path='/About' element={<About></About>} ></Route>
          </Routes>
          <Routes>
            <Route path='/ShowandGo' element={<ShowandGo></ShowandGo>} ></Route>
          </Routes>

          <Routes>
            <Route path='/Services' element={<Services></Services>} ></Route>
          </Routes>
          <Routes>
            <Route path='/Portfolio' element={<Portfolio></Portfolio>} ></Route>

          </Routes>
          <Routes>
            <Route path='/Event_descriptiom' element={<EventDescription></EventDescription>}></Route>
          </Routes>
          <Routes>
            <Route path='/Event_descriprition2' element={<EventDescriprition2></EventDescriprition2>}></Route>
          </Routes>
          <Routes>
            <Route path='/Event_descriprition3' element={<EventDescriprition3></EventDescriprition3>}></Route>
          </Routes>
          <Routes>
            <Route path='/Event_descriprition4' element={<EventDescriprition4></EventDescriprition4>}></Route>
          </Routes>
          <Routes>
            <Route path='/Event_descriprition5' element={<EventDescriprition5></EventDescriprition5>}></Route>
          </Routes>
          <Routes>
            <Route path='/Event_descriprition6' element={<EventDescriprition6></EventDescriprition6>}></Route>
          </Routes>
          <Routes>
            <Route path='/Contactus' element={<Contactus></Contactus>} ></Route>
          </Routes>
          <Routes>
            <Route path='/Login' element={<Login></Login>} ></Route>
          </Routes>
          <Footer></Footer>
       
      </Router>
</>
    )
  }
}



export default App;
