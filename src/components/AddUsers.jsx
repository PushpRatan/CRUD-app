import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
    width: 500px;
    margin:auto;
    margin-top:150px;

    & > div{
        margin-top: 20px;
    }
`

const initial = {
    name : '',
    email: '',
    phone: '',
    state: ''

}


const AddUsers = () => {

    const [user, setUser] = useState(initial);
    const navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
        
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>State</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} name="state"/>
            </FormControl>
            <FormControl>
                <Button onClick={()=> addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUsers;