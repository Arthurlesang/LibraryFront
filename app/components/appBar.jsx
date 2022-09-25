import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    <Button href="/" color="secondary">Home</Button>
                    <Button href="/posts/consult" color="secondary">CONSULT_ROLE</Button>
                    <Button href="/posts/borrow" color="secondary">BORROW_ROLE</Button>
                    <Button href="/posts/contributor" color="secondary">CONTRIBUTOR_ROLE</Button>
                    <Button href="/posts/administrator" color="secondary">ADMINISTRATOR_ROLE</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}