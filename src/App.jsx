import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/header/Header"
import AboutNcca from "./components/becomeNacc"
import ChooseUs from "./components/choose us/ChooseUs"
import Elgibility from "./components/elgibility/Elgibility"
import LearningCard from "./components/learningCard/LearningCard"
import Assistance from "./components/assistance/Assistance"
import './App.css'
import PrepJourney from "./components/prepJourney/PrepJourney"

function App() {

  return (
    <>
      <Header/>
      <AboutNcca/>
      <ChooseUs/>
      <Elgibility/>
      <LearningCard/>
      <Assistance/>
      <PrepJourney/>
    </>
  )
}

export default App
