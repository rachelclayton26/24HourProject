import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
<link href="http://fonts.cdnfonts.com/css/brusher" rel="stylesheet"></link>

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="title">Local City Fact Finder</div>
        <form className="search">
          <button className="searchButton">Search</button>
          <input className="searchImput" type="text" placeholder="City, State"/>
        </form>
        <form className="mobileSearch">
        <img id="searchIcon" src="./assets/search.png"></img> 
          <input className="mobileSearchImput" type="text" placeholder="City, State"/>
        </form>
      </div>
      <div className="imageCropper">
        <img id="fetchImg" src=""></img>
      </div>
      <div className="center">
        <div class="city-state">
          <div className="city">Indianapolis</div>
          <div className="state">Indiana</div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div className="header">Bird's Eye View</div>
              <div className="fetchContainers">
                <div className="nasaFetch"></div>
              </div>
            </div>
            <div class="col-sm">
            <div className="header">Live Weather</div>
              <div className="fetchContainers">
                <div className="weatherFetch"></div>
              </div>
            </div>
            <div class="col-sm">
            <div className="header">Local Eats</div>
              <div className="fetchContainers">
                <div className="eatsFetch"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="footer">
        <div className="copyright">The Fantastic Four   |   Copyright 2021</div>
      </div>
    </div>
  );
}

export default App;
