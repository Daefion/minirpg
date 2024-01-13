import React, { useState } from 'react';
import { useQuest }from './QuestsContext';


const QuestButton = ({ questName, questXp, onComplete }) => {
  const { quests, completeQuest } = useQuest();
  const isQuestCompleted = quests[questName];

  const handleCompleteQuest = () => {
    if (!isQuestCompleted) {
      completeQuest(questName); 
      onComplete(questXp); 
    }
  };

  return (
    <div>
      <strong>{questName}</strong>: {isQuestCompleted ? 'Completed' : 'Incomplete'}
      {!isQuestCompleted && <button onClick={handleCompleteQuest}>Complete Quest</button>}
    </div>
  );
};


const Stats = () => {
  // Define player stats using the useState
  

  const [playerStats, setPlayerStats] = useState({
    Attack: 15,
    Defense: 5,
    Speed: 10,
    Xp: 0,
    Level:1
  });


  function Square({ id, onClick, style, }) {
    return (
      <button
        className={`square ${id}`}
        onClick={onClick}
        style={style}
      ></button>
    );
  }

//Math for the XP and Stats on level up
  const HandlecompleteQuest = (questXp) => {
    // Update XP and check if level up
    const newXP = playerStats.Xp + questXp;
    const newLevel = Math.floor(newXP / 100) + playerStats.Level; // Add current level
  
    // Update XP and Level
    setPlayerStats((prevStats) => ({
      ...prevStats,
      Xp: newXP >= 100 ? newXP % 100 : newXP,
      Level: newLevel,
      Attack: prevStats.Attack + (newLevel > prevStats.Level ? 3 : 0),
      Defense: prevStats.Defense + (newLevel > prevStats.Level ? 2 : 0),
      Speed: prevStats.Speed + (newLevel > prevStats.Level ? 1 : 0),
    }));
  
    
  };

 // Boots Stats and Equiped state 
  const [currentImageB, setCurrentImageB] = useState('/images/boots.png');
  const [isBootsE, setIsBootsE] = useState(false);

  const changeImageB = () => {
    if (isBootsE) {
      setCurrentImageB('/images/boots.png');
      setPlayerStats((prevStats) => ({
        
        Attack: prevStats.Attack - 2,
        Defense: prevStats.Defense - 3,
        Speed: prevStats.Speed - 4,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    } else {
      setCurrentImageB('/images/bootsE.png');
      setPlayerStats((prevStats) => ({
      
        Attack: prevStats.Attack + 2,
        Defense: prevStats.Defense + 3,
        Speed: prevStats.Speed + 4,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    }
  
    setIsBootsE((prev) => !prev);
  };

//---------------------------------------------------------

//Helmet Stats and Equiped State
  const [currentImageH, setCurrentImageH] = useState('/images/crested-helmet.png');
  const [isHelmsE, setIsHelmsE] = useState(false);

  const changeImageH = () => {
    if (isHelmsE) {
      setCurrentImageH('/images/crested-helmet.png');
      setPlayerStats((prevStats) => ({
        
        Attack: prevStats.Attack - 2,
        Defense: prevStats.Defense - 4,
        Speed: prevStats.Speed - 1,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    } else {
      setCurrentImageH('/images/crested-helmetE.png');
      setPlayerStats((prevStats) => ({
      
        Attack: prevStats.Attack + 2,
        Defense: prevStats.Defense + 4,
        Speed: prevStats.Speed + 1,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    }
  
    setIsHelmsE((prev) => !prev);
  };
//-----------------------------------------------

//Sword Stats and Equiped State 

  const [currentImageS, setCurrentImageS] = useState('/images/gladius.png');
  const [isSwordE, setIsSwordE] = useState(false);

  const changeImageS = () => {
    if (isSwordE) {
      setCurrentImageS('/images/gladius.png');
      setPlayerStats((prevStats) => ({
        
        Attack: prevStats.Attack - 10,
        Defense: prevStats.Defense - 4,
        Speed: prevStats.Speed ,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    } else {
      setCurrentImageS('/images/gladiusE.png');
      setPlayerStats((prevStats) => ({
      
        Attack: prevStats.Attack + 10,
        Defense: prevStats.Defense + 4,
        Speed: prevStats.Speed ,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    }
  
    setIsSwordE((prev) => !prev);
  };

//-----------------------------------------------------

//Vest Stats and Equiped State

  const [currentImageV, setCurrentImageV] = useState('/images/leather-vest.png');
  const [isVestE, setIsVestE] = useState(false);

  const changeImageV = () => {
    if (isVestE) {
      setCurrentImageV('/images/leather-vest.png');
      setPlayerStats((prevStats) => ({
        
        Attack: prevStats.Attack ,
        Defense: prevStats.Defense - 10,
        Speed: prevStats.Speed + 2,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    } else {
      setCurrentImageV('/images/leather-vestE.png');
      setPlayerStats((prevStats) => ({
      
        Attack: prevStats.Attack ,
        Defense: prevStats.Defense + 10,
        Speed: prevStats.Speed - 2,
        Xp: prevStats.Xp + 0,
        Level: prevStats.Level + 0
      }));
    }
  
    setIsVestE((prev) => !prev);
  };
  

// <Stats/> Return for App.js

  return (
    <div className='ContainerStats'>
    <div className='SPlayerStats'> {/*Player Stats Display*/}
      <h2>Player Stats</h2>
      <p>Attack: {playerStats.Attack}</p>
      <p>Defense: {playerStats.Defense}</p>
      <p>Speed: {playerStats.Speed}</p>
      <p>Xp: {playerStats.Xp } | 100</p>
      <p>Level: {playerStats.Level }</p>

      {/*Inventory Items/Slots */}
      <div className="board-row">
        <Square
          id="S1"
          onClick={changeImageB}
          style={{ backgroundImage: `url(${currentImageB})` }}
        />
        <Square id="S2" 
        onClick={changeImageH}
        style={{ backgroundImage: `url(${currentImageH})` }}/>
        <Square id="S3" 
        onClick={changeImageS}
        style={{ backgroundImage: `url(${currentImageS})` }}/>
      </div>
      <div className="board-row">
        <Square id="S4" 
        onClick={changeImageV}
        style={{ backgroundImage: `url(${currentImageV})` }}/>
        <Square id="S5" />
        <Square id="S6" />
      </div>
      <div className="board-row">
        <Square id="S7" />
        <Square id="S8" />
        <Square id="S9" />
      </div>
    </div>
    <div className='ContainerQuests'> {/*Manual Quests */}
      <h2>Quest Log</h2>
<QuestButton questName="Quest1" questXp={50} onComplete={HandlecompleteQuest} />
<QuestButton questName="Quest2" questXp={50} onComplete={HandlecompleteQuest} />
<QuestButton questName="Quest3" questXp={50} onComplete={HandlecompleteQuest} />
    </div>
    </div>
 
  );
};

export default Stats;
