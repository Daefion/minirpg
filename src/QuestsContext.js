import React, { createContext, useContext, useState } from 'react';

const QuestContext = createContext();

export const QuestProvider = ({ children }) => {
  const [quests, setQuests] = useState({
    quest1: false,
    quest2: false,
    quest3: false,
    
  });

  const completeQuest = (questName) => {
    setQuests((prevQuests) => ({ ...prevQuests, [questName]: true }));
  };

  return (
    <QuestContext.Provider value={{ quests, completeQuest }}>
      {children}
    </QuestContext.Provider>
  );
};

export const useQuest = () => {
  const context = useContext(QuestContext);
  if (!context) {
    throw new Error('useQuest must be used within a QuestProvider');
  }
  return context;
};
