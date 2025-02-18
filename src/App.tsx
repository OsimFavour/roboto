import "./App.css";

import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import RobotoPreview from "./components/roboto-preview/roboto-preview.component";

function App() {

  
  return (
    <>
      
      <Header />

      <section className="text-gray-600 body-font">
        <Hero />

        <RobotoPreview />
      </section>
      <Footer />
    </>
  );
}

export default App;
