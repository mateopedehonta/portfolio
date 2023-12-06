import { AboutMe, Contact, Header, Home, Networks, Projects, Skills } from './pages';

import './App.css'

function App() {

  return (
    <div className="App w-full min-h-screen bg">
     <Header/>
     <main>
      <Home/>
      <Projects/>
      <Skills/>
      <AboutMe/>
      <Contact/>
     </main>
     <Networks/>
    </div>
  )
}

export default App
