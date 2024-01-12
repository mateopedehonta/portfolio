import { AboutMe, Contact, Home, Networks, Projects } from "./pages";

import "./App.css";
import { Header } from "./components/intex";

function App() {
  return (
    <div className="App w-full min-h-screen bg">
      <Header />
      <main>
        <Home />
        <AboutMe />
        {/* <Skills /> */}
        <Projects />

        <Contact />
      </main>
      <Networks />
    </div>
  );
}

export default App;
