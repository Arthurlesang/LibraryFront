import Layout from '../../components/layout';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import * as React from "react";

const Borrow = () => {
    return (
        <Layout>
            <h1>Borrow</h1>
            <div>
                <Button href="/" color="primary" variant="contained">Consult books</Button>
            </div>
            <div>
                <h2>Create new user : </h2>
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Prenom"
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Nom"
                    variant="filled"
                />
            </div>
            <Button variant="contained">Create user</Button>
        </Layout>
    )
}

export default Borrow;