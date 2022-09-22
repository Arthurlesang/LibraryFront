import * as React from 'react';
import Button from '@mui/material/Button';


export default function Home() {
    return (
        <>
            <h1>Welcome to ENSI Caen's library !</h1>
            <Button variant="contained">CONSULT_ROLE</Button>
            <Button variant="contained">BORROW_ROLE</Button>
            <Button variant="contained">CONTRIBUTOR_ROLE</Button>
            <Button variant="contained">ADMINISTRATOR_ROLE</Button>
        </>

)
}