// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';

export const GameNightContext = React.createContext({});


export const GameNightProvider = ({
    children,
}) => {
    const [gameInProgress, setGameInProgress] = useState(false);
    const [teamList, setTeamList] = useState([])

    return (
        <GameNightContext.Provider
            value={{
                gameInProgress,
                setGameInProgress,

                teamList,
                setTeamList
            }}
        >
            {children}
        </GameNightContext.Provider>
    );
};
