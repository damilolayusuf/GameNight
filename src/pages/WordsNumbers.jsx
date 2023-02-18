import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import classes from '../css/additional-styles/modal.css';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { randomNumber } from '../utils/helperFunctions';
import useGameNightContext from '../hooks/useGameNightContext';

function WordsNumbers() {


const {setTeamList, teamList, gameInProgress, setGameInProgress} = useGameNightContext()
const [showSetupModal, setShowSetupModal] = useState(!gameInProgress);
const [showTeams, setShowTeams] = useState(false);
const [numOfTeams, setNumOfTeams] = useState(0);
const [teamOne, setTeamOne] = useState("");
const [teamTwo, setTeamTwo] = useState("");
const [teamThree, setTeamThree] = useState("");
const [teamFour, setTeamFour] = useState("");
const [letters, setLetters] = useState([])
const [numbers, setNumbers] = useState([])
const [mathNum, setMathNum] = useState([])
const minValue = 0
const maxValue = 4
const maxLetters = 9
const maxNumbers = 5
const consonants = "bcdfghjklmnpqrstvwxyz"
const vowels = "aeiou"
const handleClick = ()=>{
    console.log("test")
    setShowSetupModal(!showSetupModal)
}
const addConsonant= ()=>{
    setLetters(prev => [...prev, consonants[Math.floor(Math.random() * consonants.length)].toUpperCase()     ])
}
const addVowel= ()=>{
    setLetters(prev => [...prev, vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()     ])
}
const addSmallNumber= ()=>{
    setNumbers(prev => [...prev, Math.floor(Math.random() * 11) + 1 ])
}
const addLargeNumber= ()=>{
    setNumbers(prev => [...prev, Math.floor(Math.random() * 90) + 11  ])
}
const resetLetters = ()=>{
    setLetters([])
}
const resetNumbers = ()=>{
    setNumbers([])
    setMathNum([])
}

const handleTeamSubmit = ()=>{
    let arr = []
    teamOne !== "" ? arr.push(teamOne):null
    teamTwo !== "" ? arr.push(teamTwo):null
    teamThree !== "" ? arr.push(teamThree):null
    teamFour !== "" ? arr.push(teamFour):null
    setTeamList(arr)
    setShowSetupModal(!showSetupModal)
    setGameInProgress(true)
}

const nextPage = ()=>{
    setShowTeams(true)
}
const showNumber = ()=>{
    setMathNum([randomNumber()])
}

const formValidation = ()=>{
    switch (numOfTeams){
        case 1:
            return teamOne !== "" ? true:false
        case 2:
            return teamOne !== "" && teamTwo !== "" ? true:false
        case 3:
            return teamOne !== "" && teamTwo !== "" && teamThree !== "" ? true:false
        case 4:
            return teamOne !== "" && teamTwo !== "" && teamThree !== "" && teamFour !== "" ? true:false
    }

}
const handleTeamChange = (e)=>{
    const newValue = Math.min(Math.max(e.target.value, minValue), maxValue)
    setNumOfTeams(newValue)

}

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
             
                        
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Words and Numbers</h1>
                    </div>
                    <Box bgcolor="#8492fa" display="flex" justifyContent="space-around" flexDirection={"row"} paddingY={5} sx={{ p: 2, "border-radius": "0% 10%", width: "100%", height:"200px" }}>
                        {teamList.map((val, index)=>(
                            <Stack direction="column" spacing={2} alignItems="center" key={index}>
                                <Typography sx={{color: "black"}} variant="h4">{val}</Typography>
                                <TextField
                                    id="filled-number"
                                    label="Score"
                                    type="number"
                                    variant='filled'
                                    // sx={{ input: { color: 'white' } }}
                                />
                            </Stack>
    
                        ))}
                    </Box>

                    <Stack spacing={2} direction="column" marginTop={2}>
                        <Stack spacing={2} direction="row" marginTop={2}>
                            {letters.map((val, index)=>(
                             <Box bgcolor="#8492fa" display="flex"  alignItems="center" justifyContent="center" flexDirection={"row"} paddingY={5} sx={{ width: "150px", height:"150px" }}>
                                <Typography sx={{color: "black"}} variant="h1">{val}</Typography>
                            </Box>
    
                        ))}
                        </Stack>
                         <Stack spacing={2} direction="row" marginTop={2}>
                            {numbers.map((val, index)=>(
                             <Box bgcolor="#8492fa" display="flex"  alignItems="center" justifyContent="center" flexDirection={"row"} paddingY={5} sx={{ width: "150px", height:"150px" }}>
                                <Typography sx={{color: "black"}} variant="h1">{val}</Typography>
                            </Box>
    
                        ))}
                        </Stack>
                         <Stack spacing={2} direction="row" marginTop={2}>
                             {mathNum.map((val, index)=>(
                             <Box bgcolor="#8492fa" display="flex"  alignItems="center" justifyContent="center" flexDirection={"row"} paddingY={5} sx={{ width: "150px", height:"150px" }}>
                                <Typography sx={{color: "black"}} variant="h1">{val}</Typography>
                            </Box>
    
                        ))}

                        </Stack>
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" size="large" onClick={addConsonant} disabled={letters.length === maxLetters ? true:false}>
                                    CONSONANT
                            </Button>
                            <Button variant="contained" size="large" onClick={addVowel} disabled={letters.length === maxLetters ? true:false}>
                                    VOWEL
                            </Button>
                            <Button variant="contained" size="large" onClick={resetLetters}>
                                    RESET LETTERS
                            </Button>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" onClick={addSmallNumber} disabled={numbers.length === maxNumbers ? true:false}>
                                    SMALL NUMBER
                            </Button>
                            <Button variant="contained" size="large" onClick={addLargeNumber} disabled={numbers.length === maxNumbers ? true:false}>
                                    LARGE NUMBER
                            </Button>
                            
                            <Button variant="contained" size="large" onClick={resetNumbers}>
                                    RESET NUMBERS
                            </Button>
                            <Button variant="contained" size="large" onClick={showNumber}>
                                    SHOW NUMBER
                            </Button>
                            </Stack>
                        </Stack>
                            
                    </Stack>
                        
                    <Modal
                        open={showSetupModal}
                        onClose={handleClick}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box 
                            display="flex" 
                            width={500} 
                            height="70%"
                            bgcolor="#8492fa"
                            // bgcolor="#001E3C"
                            flexDirection={"column"}
                            alignItems="center"
                            // justifyContent="center"
                            sx={
                                {
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                border: '2px solid #000',
                                boxShadow: 24,
                                }
                            }        
                            >
                        <Stack direction="column" spacing={4} alignItems="center">
                            <Typography id="modal-modal-title" variant="h6" component="h2" marginTop={2}>
                                Players Setup
                            </Typography>

                            <Stack direction="column" spacing={2} alignItems="center" display={showTeams ?"none":"visible"}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <p>
                                        Number of Teams
                                    </p>
                                    <TextField
                                        id="filled-number"
                                        label="Number"
                                        type="number"
                                        variant='filled'
                                        onChange={handleTeamChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={numOfTeams}
                                        sx={{ input: { color: 'white' } }}
                                    />
                                </Stack>
                                <Button variant="contained" size="large" disabled={numOfTeams === 0} onClick={nextPage}>
                                    Enter Team Names
                                </Button>
                            </Stack>

                            <Stack direction="column" spacing={2} alignItems="center" display={showTeams ? "visible": "none"}>
                                <Stack direction="row" spacing={2} alignItems="center" display={numOfTeams >= 1 ? "visible": "none"}>
                                    <p>Team #1</p>
                                    <TextField
                                        id="team-1"
                                        label="Team Name"
                                        variant="filled"
                                        value={teamOne}
                                        sx={{ input: { color: 'white' } }}
                                        onChange={(e) => setTeamOne(e.target.value)}
                                        required={true}
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" display={numOfTeams >= 2 ? "visible": "none"}>
                                    <p>Team #2</p>
                                    <TextField
                                        id="team-2"
                                        label="Team Name"
                                        variant="filled"
                                        value={teamTwo}
                                        sx={{ input: { color: 'white' } }}
                                        onChange={(e) => setTeamTwo(e.target.value)}
                                        required={true}
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" display={numOfTeams >= 3 ? "visible": "none"}>
                                    <p>Team #3</p>
                                    <TextField
                                        id="team-3"
                                        label="Team Name"
                                        variant="filled"
                                        value={teamThree}
                                        sx={{ input: { color: 'white' } }}
                                        onChange={(e) => setTeamThree(e.target.value)}
                                        required={true}
                                    />
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center" display={numOfTeams >= 4 ? "visible": "none"}>
                                    <p>Team #4</p>
                                    <TextField
                                        id="team-4"
                                        label="Team Name"
                                        variant="filled"
                                        value={teamFour}
                                        sx={{ input: { color: 'white' } }}
                                        onChange={(e) => setTeamFour(e.target.value)}
                                        required={true}
                                    />
                                </Stack>
                                    {/* {teams.map((val, index)=>(
                                    <Stack direction="row" spacing={2} alignItems="center" key={index}>
                                        <p>{val}</p>
                                        <TextField
                                            id="filled-password-input"
                                            label="Team Name"
                                            variant="filled"
                                            sx={{ input: { color: 'white' } }}
                                            onBlur={(e) => setList((prev) => [...prev, e.target.value])}
                                        />
                                    </Stack>
    
                                ))} */}
                                <Button variant="contained" size="large"onClick={()=>setShowTeams(false)}>
                                    Modify Team Count
                                </Button>

                                <Button variant="contained" size="large" disabled={!formValidation()} onClick={handleTeamSubmit}>
                                    Submit
                                </Button>
                            </Stack>


                        </Stack>
                        
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                        </Box>
                    </Modal>

                </div>
                
            </div>
        </section>

      </main>

    </div>
  );
}

export default WordsNumbers;