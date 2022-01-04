import React from 'react';
import {Link, List, ListItem, ListItemText, Typography} from "@mui/material";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import {makeStyles} from "@material-ui/core";

const pages = [
    {name: 'Home', uri: '/'},
    {name: 'Blog', uri: '/blog'},
    {name: 'Cards', uri: '/cards'},
    {name: 'Listen', uri: '/listen'}
];

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        //color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(2),
        "&:hover": {
            //color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function MyMenu({isDrawer, setOpenDrawer}) {
    const classes = useStyles();

    if (isDrawer) {
        return (
            <List>
                {pages.map(p => (
                    <ListItem key={p.name} onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NextLink href={p.uri} passHref>
                                <Link>{p.name}</Link>
                            </NextLink>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        );
    }

    return (
        <Box sx={{flexGrow: 1}}>
            {pages.map((p) => (
                <NextLink key={p.name} href={p.uri} passHref>
                    <Link className={classes.link}>{p.name}</Link>
                </NextLink>
            ))}
        </Box>
    );
}

export default MyMenu;