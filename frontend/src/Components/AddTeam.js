import React, { useState, useEffect } from 'react'
import { Card, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTeam, editTeam } from '../JS/actions/actionTeam'

const AddTeam = () => {

    const [newTeam, setNewTeam] = useState({
        name: "", coach: "", wonPreviously: ""
    })

    const teamId = useSelector(state => state.teamId)
    const isEdit = useSelector(state => state.isEdit)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isEdit) {
            setNewTeam(teamId)
        } else {
            setNewTeam({ name: "", coach: "", wonPreviously: "" })
        }
    }, [teamId, isEdit])



    const handleChange = (e) => {
        setNewTeam({ ...newTeam, [e.target.name]: e.target.value })
    }


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
                style={{
                    width: "22rem",
                    height: "25rem",
                    marginRight: "30px",
                    marginBottom: "20px",
                    marginTop: "30px",
                    backgroundColor: "rgb(240, 179, 179)",
                    borderRadius: "5px",
                    border: "transparent",
                    boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
                }}
            >
                <Card.Header
                    style={{
                        borderTopRightRadius: "8px",
                        borderTopLeftRadius: "8px",
                        backgroundColor: "rgb(128, 0, 11)",
                        color: "white",
                        fontWeight:"bolder"
                    }}
                >
                    {isEdit ? "EDIT TEAM" : "ADD NEW TEAM"}
                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label style={{color:"rgb(128, 0, 11)", fontWeight:"bolder"}}> TEAM NAME :</Form.Label>
                                <Form.Control type="text" name="name" value={newTeam.name} onChange={handleChange} placeholder="Enter team name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label style={{color:"rgb(128, 0, 11)", fontWeight:"bolder"}}> TEAM FLAG :</Form.Label>
                                <Form.Control type="text" name="flag" value={newTeam.flag} onChange={handleChange} placeholder="Enter team flag" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label style={{color:"rgb(128, 0, 11)", fontWeight:"bolder"}}>TEAM COACH :</Form.Label>
                                <Form.Control type="email" name="coach" value={newTeam.coach} onChange={handleChange} placeholder="Enter team coach" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                                <Form.Label style={{color:"rgb(128, 0, 11)", fontWeight:"bolder"}}>DID THE TEAM WIN PREVIOUSLY?</Form.Label>
                                <Form.Control type="text" name="wonPreviously" value={newTeam.wonPreviously} onChange={handleChange} placeholder="True or False ?" />
                            </Form.Group>
                        </Form>
                    </Card.Text>
                </Card.Body>
                <div className='flexbutton' >
                    <Link to='/Teams_List'>
                        <button  className='savebutton' onClick={() => { isEdit ? dispatch(editTeam(newTeam._id, newTeam)) : dispatch(addTeam(newTeam)) }}>
                            {isEdit ? "SAVE CHANGES" : "ADD NEW TEAM"}
                        </button>
                    </Link>
                    <button className='cancelbutton' > CANCEL </button>
                </div>
            </Card>
        </div>

    )
}

export default AddTeam;