import {Card, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Layout from '../components/Layout'

function Profile() {
    const [userName, setUserName] = useState('jose')
    const [change, setChange] = useState(false)
    const [value, setValue ] = useState("")

    function changeState(){
        setChange(!change)
    }

    const cancelSubmit = (e) => {
        e.preventDefault();
        setChange(!change)
    }

    const onSubmit = (e) => {

        e.preventDefault();
        setValue(e.target.value);
        setUserName(value);
        console.log("username: ",userName);
        console.log("value: ", value);
        console.log(value);
        setChange(!change)
    }

    return (
        <Layout>
            <Card sx={{ maxWidth: 250, marginLeft: 7, marginTop: 5, height: "auto"}}>
                {change ? <Box 
                    sx={{
                        display: 'flex', flexWrap: 'wrap', alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center', textAlign: "left",
                        '& > :not(style)': {
                            m: 2,
                            width: "80%",
                            height: 50,
                        },
                    }}
                >
                    <TextField label={`${userName}`} onChange={(event) => setValue(event.target.value)}/>
                    <button onClick={(e)=>onSubmit(e)} style={{width: "45%"}}>
                        submit
                    </button>
                    <button onClick={(e) => cancelSubmit(e)} style={{ width: "45%" }}>
                        cancel
                    </button>
                </Box> 
                    : 
                    <Box onClick={() => changeState()}>{userName}
                    </Box>
                }

            </Card>

        </Layout>
    )
}

export default Profile
