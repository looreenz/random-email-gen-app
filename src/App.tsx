import "./App.css";
import Container from "./Components/Container.tsx";
import Footer from "./Components/Footer.tsx";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Welcome Friend!</h1>
        <h2>
          Tired of receiving all those useless emails in your inbox? Here is the
          solution, a <span>random email address generator</span>, for those subscriptions
          that you will only use once.
        </h2>
      </div>
      <div className="Content">
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default App;
