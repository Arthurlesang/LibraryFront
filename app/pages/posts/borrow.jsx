import Layout from '../../components/layout';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import * as React from "react";

const Borrow = () => {

    let userText = '{"username": "user3","roles":["ROLE_USER"]}';
    const user = JSON.parse(userText);

    const submitUser = async () => {
        const response = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/users', {
            method:'POST',
            body: JSON.stringify(user),
            headers:{'Content-Type' : 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
    }

    const setUserName = (userName) => {
        user.username = userName;
    }

    return (
        <Layout>
            <h1>Borrow</h1>
            <div>
                <Button href="/posts/consult" color="primary" variant="contained">Consult books</Button>
            </div>
            <div>
                <h1>Create new user : </h1>

                <TextField
                    required
                    defaultValue="UserName"
                    variant="filled"
                    onChange={e => setUserName(e.target.value)}
                />
                <Button variant="contained" onClick={submitUser}>Create user</Button>
            </div>
        </Layout>
    )
}


//TODO create borrow asociating a book to a user

export default Borrow;