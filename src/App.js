import "./App.css";
import Card from "./components/Card";
import useGetData from "./Hooks/useGetData";
import useBackImage from "./Hooks/useBackImage";

function App() {
  const { currentData } = useGetData();

  const weaDesc = currentData.weather?.[0].description;

  console.log(weaDesc);

  const { imageUrl } = useBackImage(weaDesc);

  return (
    // Custom properties
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Card />
    </div>
  );
}

export default App;
