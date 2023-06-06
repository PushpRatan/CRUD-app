import { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled  } from "@mui/material";
import { deleteUser, getUser, getUsers } from "../services/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: auto;
    margin-top: 50px;
    
`

const Thead = styled(TableRow)`
    background-color: #111111;
     & > th {
        color: #fff;
        font-size: 20px;
        text-align: center;
     }

`

const Tbody = styled(TableRow)`
    background-color: #a1aaa1;
     & > td {
        // color: #fff;
        font-size: 16px;
        text-align:center;
     }
`

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        let response = await getUser();
        console.log(response);
        setUsers(response.data);    
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getUserDetails();
    }
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <Tbody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.state}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 20}} onClick={()=> deleteUserData(user.id)}>Delete</Button>
                                <Button variant="contained" color="success" LinkComponent={Link} to={`/edit/${user.id}`}>Edit</Button>
                            </TableCell>
                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;