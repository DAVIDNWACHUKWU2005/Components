
import herobanner from "./components/herobanner";
import gallery from "./components/gallery";
import footer from "./components/footer";
import header from "./components/header";

function App() {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];
  return (
<div>
  <banner 
  title = "hello"
  text = "this page"
  />
  <gallery images = {images} />
  <footer/>
  </div>
  );
}

export default App;
