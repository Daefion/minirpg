
import Stats from './Stats';
import './App.css';
import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';



const App = () => {
  
  const skill1Ref = useRef(null); //Fix for Error in Console
  const skill2Ref = useRef(null);
  const skill22Ref = useRef(null);
  const skill23Ref = useRef(null);
  const skill3Ref = useRef(null);

  const [showInventory, setShowInventory] = useState(false);
  const [showButton1Effect, setShowButton1Effect] = useState(false);
  const [showButton2Effect, setShowButton2Effect] = useState(false); 
  const [showButton3Effect, setShowButton3Effect] = useState(false);
  
  //Call this for Inventory Visivility 
  const toggleInventory = () => {
    setShowInventory(!showInventory);
  };
  //Call to trigger animation states 
  const toggleButton1Effect = () => {
    setShowButton1Effect(!showButton1Effect);
  };
  //Call to make Effect Visibility:Hidden;
  const handleAnimationEnd = () => {
    if (!showButton1Effect) {
      setShowButton1Effect(true);
    }
  };

  const toggleButton2Effect = () => {
    setShowButton2Effect(!showButton2Effect);
  };

  const handleAnimation2End = () => {
    if (!showButton2Effect) {
      setShowButton2Effect(true);
    }
  };


  const toggleButton3Effect = () => {
    setShowButton3Effect(!showButton3Effect);
  };

  const handleAnimation3End = () => {
    if (!showButton3Effect) {
      
      setShowButton3Effect(true);
    }
  };

//Show available Zones
const [showZones, setShowZones] = useState(false);

const toggleZones = () => {
  setShowZones(!showZones);
};

//Map and Zone Stuff
const [currentZone2, setCurrentZone2] = useState('/images/Zone2.png');
const [currentZone3, setCurrentZone3] = useState('/images/Zone3.png');
const [currentMap, setCurrentMap] = useState('/images/Zone1.png');
const [backgroundImage, setBackgroundImage] = useState('/images/Map1.png');// Default background
const [backgroundImage2, setBackgroundImage2] = useState('/images/Map2.jpg');
const [backgroundImage3, setBackgroundImage3] = useState('/images/Map3.jpg'); 


const [Map2Clicked, setMap2] = useState(false);
const [Map3Clicked, setMap3] = useState(false);

const TrackMapClick2 = () => {
  setMap2(!Map2Clicked)
  changeZone();
}

const TrackMapClick3 = () => {
  setMap3(!Map3Clicked)
  changeZone();
}

const changeZone= () => {
  if (Map2Clicked) {
    setCurrentMap(currentZone2);
    setCurrentZone2(currentMap);
    setBackgroundImage(backgroundImage2);
    setBackgroundImage2(backgroundImage)
    
  } if (Map3Clicked){
    setCurrentMap(currentZone3);
    setCurrentZone3(currentMap);
    setBackgroundImage('/images/Map2.jpg');
    setBackgroundImage(backgroundImage3)
    setBackgroundImage3(backgroundImage)
  }
};



  return (
    <div className="container">
      {/* Top Container */}
      <div className="top-container">
        
        {/* Content for the top container */}
        <button className={`Map3 ${showZones ? 'visible' : 'hidden'}`} onClick={TrackMapClick3}
         style={{ backgroundImage: `url(${currentZone3})` }}></button>
          
        <button className={`Map2 ${showZones ? 'visible' : 'hidden'}`} onClick={TrackMapClick2 } 
        style={{ backgroundImage: `url(${currentZone2})` }} ></button>

        <button className="MainMap" onClick={toggleZones}
        style={{ backgroundImage: `url(${currentMap})` }}
          >Map</button>
    
      </div>
      {/* Middle Container */}
      <div className="middle-container"
        style={{ backgroundImage: `url(${backgroundImage})` }} >
        
        {/* Content for the middle container */}

        <img className='mage' src="/images/mage.png" alt="MC"/>
        <CSSTransition
        nodeRef={skill1Ref}
          in={showButton1Effect}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onExited={handleAnimationEnd}
        >
        <img ref={skill1Ref} className='Skill1' src='/images/fireball.png' alt="Fireball"/>
        </CSSTransition>
        {/*----------------------------------------------------------------- */}
        <CSSTransition
        nodeRef={skill2Ref}
          in={showButton2Effect}
          timeout={1000}
          classNames="Spear"
          unmountOnExit
          onExited={handleAnimation2End}
        >
        <img ref={skill2Ref} className='Skill2' src='/images/icespear.png' alt="Spear"/>
        </CSSTransition>
        {/*----------------------------------------------------------------- */}

        <CSSTransition
        nodeRef={skill22Ref}
          in={showButton2Effect}
          timeout={1000}
          classNames="Spear"
          unmountOnExit
          onExited={handleAnimation2End}
        >
        <img ref={skill22Ref} className='Skill22' src='/images/icespear.png' alt="Spear"/>
        </CSSTransition>
        {/*----------------------------------------------------------------- */}
        <CSSTransition
        nodeRef={skill23Ref}
          in={showButton2Effect}
          timeout={1000}
          classNames="Spear"
          unmountOnExit
          onExited={handleAnimation2End}
          
        >
        <img ref={skill23Ref} className='Skill23' src='/images/icespear.png' alt="Spear"/>
        </CSSTransition>

        {/*----------------------------------------------------------------- */}
        <CSSTransition
        nodeRef={skill3Ref}
          in={showButton3Effect}
          timeout={1000}
          classNames="Thunder"
          unmountOnExit
          onExited={handleAnimation3End}
          
        >
        <img ref={skill3Ref} className='Skill3' src='/images/thunder.png' alt="Thunder"/>
        </CSSTransition>
        <div className={`inventory ${showInventory ? 'visible' : 'hidden'}`}>
          {/* Content for the Inventory */}
          <h2>Inventory</h2>
          <Stats/> {/*All of the Content inside of Stats.js return() */ }
        </div>
      </div>

      {/* Bottom Container  */}
      <div className="bottom-container">
        {/* Content for the bottom container */}
        
        <div className="bottom-bar">
          {/* Separate container for InvButton */}
          <div>
            <button className="InvButton" onClick={toggleInventory}>
              Inventory
            </button>
          </div>

          {/* Bar with Skills buttons */}
          <div className="Skillbar">
            
          <button className="button" onClick={toggleButton1Effect} >Fireball</button>
          
          <button className="button" onClick={toggleButton2Effect}>Ice Spears</button>

            <button className="button" onClick={toggleButton3Effect}>Thunder</button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default App;