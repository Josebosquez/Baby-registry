import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { MenuList, MenuItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import CreateContext from "../context/CreateContext"
import axios from "axios"

export default function MenuListComposition() {
    const navigate = useNavigate()

    const { setUser, isAuth, setIsAuth, } = useContext(CreateContext)
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = async (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleLogOut = async (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        try {
            let response = await axios.get('http://localhost:3001/api/users/logOut')
            if (response) {
                window.localStorage.removeItem('isAuth')
                window.localStorage.removeItem('user')
                setUser(null)
                setIsAuth(null)
                navigate('/login')
                setOpen(false);
            }
        } catch (error) {
            console.log(error)
        }
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MenuIcon sx={{ color: "white" }} />
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal >
                    {({ TransitionProps, placement }) => (
                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom', }} >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}
                                        sx={{ marginTop: '75px' }}>
                                        <Link to="/profile">
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        </Link>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>


                                        {isAuth ? <Link to="login"><MenuItem value='Logout' onClick={handleLogOut}>Logout</MenuItem> </Link> : <Link to="/login"><MenuItem value='Logout' onClick={handleClose} >Login</MenuItem></Link>}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}