import axios from "axios";
import { GET_TEAMS , GET_TEAM , TOGGLE_TRUE, TOGGLE_FALSE} from "../constants/actionsType";


export const getTeams = () => (dispatch) =>{
axios.get("/api/rihab/fifa2022")
     .then(res => dispatch({type: GET_TEAMS, payload:res.data}))
     .catch(err => console.log(err))
}

export const getTeam = (id) => (dispatch) =>{
     axios.get(`/api/rihab/fifa2022/${id}`)
          .then(res =>dispatch({type: GET_TEAM, payload:res.data}))
          .catch(err => console.log(err))
}


export const addTeam = (newTeam) => (dispatch) => {
     axios.post('/api/rihab/fifa2022', newTeam)
         .then(() => dispatch(getTeams()))
         .catch(err => console.log(err))
 }
 
 export const deleteTeam = (id) => (dispatch) => {
     axios.delete(`/api/rihab/fifa2022/${id}`)
         .then(() => dispatch(getTeams()))
         .catch(err => console.log(err))
 }
 
 export const editTeam = (id, editTeam) => (dispatch) => {
     axios.put(`/api/rihab/fifa2022/${id}`, editTeam)
         .then(() => dispatch(getTeams()))
         .catch(err => console.log(err))
 }




export const toggleTrue = () => {
     return {
         type: TOGGLE_TRUE
     }
 }

 export const toggleFalse = () => {
     return {
         type: TOGGLE_FALSE
     }
 }