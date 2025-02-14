
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
      <div className="App">
        <div className="container">
        <section>
          <Weather />
        </section>
        <Footer />
        </div>
      </div>
  );
}

export default App;
