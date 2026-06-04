import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const images = [
   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400"

  ];

  return (
    <div>
      <Header />
      <HeroBanner title="Welcome" text="This is my site" />
      <Gallery images={images} />
      <Footer />
    </div>
  );
}

export default App;