
import { GET_TEAM, GET_TEAMS, TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/actionsType"


const initialState = {
    teams : [],
    teamId : {},
    isEdit : false
}

const reducerTeam = (state = initialState, action) =>{
   switch (action.type){
       case GET_TEAMS:
           return {...state, teams:action.payload}

       case GET_TEAM:
           return {...state, teamId:action.payload}
             
        case TOGGLE_TRUE:
            return {...state, isEdit:true}

        case TOGGLE_FALSE:
            return {...state, isEdit:false}

           default:
               return state;
   }
}

export default reducerTeam;