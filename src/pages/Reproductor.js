import './App.css';
import { AiFillPlayCircle } from "react-icons/ai"

import logo from './spotifyAssets/Spotify_Logo_RGB_Green.png'
function App() {
  return (
    <>
      <div className="sectionBar">
        <AiFillPlayCircle />
      </div>
      <div className="sideBar">
        <a>
          <img className='logo'
            src={logo}
          />
        </a>
      </div>
      <div className="musicBar">
      </div>
    </>
  );
}

export default App;
