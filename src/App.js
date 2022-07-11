import SearchBox from "./Components/SearchBox";

document.body.style = "background: #0c151d";

function App() {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Rick and Morty Wiki</h1>
        <SearchBox/>
      </div>
    </>
  );
}

export default App;
