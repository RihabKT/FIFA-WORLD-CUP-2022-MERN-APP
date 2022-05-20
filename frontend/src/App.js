import './App.css';
import React, { useEffect } from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import TeamCard from './Components/TeamCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams, toggleFalse } from './JS/actions/actionTeam';
import AddTeam from './Components/AddTeam';
import {Button} from "react-bootstrap";


function App() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams)

  const getAllTeams = () => {
    dispatch(getTeams())
  }

  useEffect(() => {
    getAllTeams()
  },[])


  return (

    <div className="App">
      
    <div className='flextitle'>
      <h1> FIFA WORLD CUP QATAR 2022 <br/> DOHA IN 21 November 2022 – 18 December 2022</h1>
   
       <img src='https://www.qfa.qa/wp-content/uploads/2022/01/%D9%83%D8%A3%D8%B3-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-FIFA-%D9%82%D8%B7%D8%B1.jpg' className='cupimage' alt='cupimage' width="600"/>

       </div>

      <Link to="/Teams_List">
    <Button variant="outline-dark"  className='TeamListButton'> TEAMS LIST </Button>
      </Link>

      <Link to="/Add_Team">
        <Button variant="dark" className='AddTeamButton' onClick={() => dispatch(toggleFalse())}> ADD TEAM </Button>
      </Link>

      
      


    <Routes>
    <Route path="/Teams_List" element={<div className='GridTeam' >
          {teams.map(el => <TeamCard team={el} key={el._id} />)}
        </div>} />
      {/* <Route path="/Teams_List" element={<TeamList/>}  />  */}
      <Route path="/Add_Team" element={<AddTeam/>}  /> 
    </Routes>
    

    
    </div>
  );
}

export default App;
