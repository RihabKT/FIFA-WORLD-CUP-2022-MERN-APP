import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTeam, getTeam, toggleTrue } from '../JS/actions/actionTeam';




const TeamCard = ({team}) => {
  

   
    const dispatch = useDispatch();
    
  return (
    <div>

<div className="container">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" alt='mypicture' src=" https://encdn.ldmnq.com/ldstore/ar/wEJKFn-1619165999070.cms "/>
        </div>
        <div className="team-content">
          <h3 className="name">{team.name}</h3>
          <img src={team.flag} className="flagimage" alt='flagimage' />
          <h4 className="title">{team.coach}</h4>
          <h5> {team.wonPreviously} </h5>
        </div>
        

      </div>

      <div className='flexbutton'>
       <Link to="/Add_Team" >
           <button className='EditButton'  onClick={() => {dispatch(getTeam(team._id)); dispatch(toggleTrue()) }}> EDIT </button>
       </Link>
            <button className='DeleteButton' onClick={() => dispatch(deleteTeam(team._id))} > DELETE </button>

    </div>

    </div>

    </div>

    </div>

    </div>
  )
}

export default TeamCard