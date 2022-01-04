import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {CssBaseline, useTheme} from "@mui/material";
import MyDrawer from "./MyDrawer";
import {useMediaQuery} from "@material-ui/core";
import MyMenu from "./MyMenu";

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="fixed">
            <CssBaseline />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        MORABICA
                    </Typography>

                    {isMobile && <MyDrawer />}
                    {!isMobile && <MyMenu />}

                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default NavBar;