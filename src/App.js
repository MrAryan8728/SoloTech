import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Services from "./component/Services";


import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import "./style/mediaquery.scss"


function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/contact" element ={<Contact />}/>
        <Route path="/services" element ={<Services />}/>
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App;
