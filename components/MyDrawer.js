import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemText} from "@mui/material";
import Link from 'next/link';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core";
import MyMenu from "./MyMenu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function MyDrawer({}) {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <MyMenu isDrawer setOpenDrawer={setOpenDrawer} />
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default MyDrawer;