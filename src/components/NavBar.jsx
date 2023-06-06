
import {AppBar, Toolbar, Typography, styled} from '@mui/material/';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111135;
    position: static;
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    Color: #fff;
    Text-decoration: none;
`

const NavBar = () => {
    return (
        <Header>
            <Toolbar>
                <Tabs to="/">CRUD Application</Tabs>
                <Tabs to="/all">All Users</Tabs>
                <Tabs to="/add">Add Users</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;