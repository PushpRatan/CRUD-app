import { useState, useEffect  } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { getUsers, editUser } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";


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


const EditUsers = () => {

    const [user, setUser] = useState(initial);
    const {id} = useParams();

    useEffect(()=>{
        getUserDetail();
    }, []);

    const getUserDetail = async () => {
        let response = await getUsers(id);
        console.log(response);
        setUser(response.data);
    }

    const navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
        
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} value={user.name} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} value={user.email} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} value={user.phone} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>State</InputLabel>
                <Input onChange= {(e)=> onValueChange(e)} value={user.state} name="state"/>
            </FormControl>
            <FormControl>
                <Button onClick={()=> editUserDetails()} variant="contained">Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUsers;