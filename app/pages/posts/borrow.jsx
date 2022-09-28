import Layout from '../../components/layout';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";

const Borrow = () => {
    const [user, setUser] = useState('');

    const submitUser = async () => {
        const response = await fetch('http://15.237.139.132:3000/book/add', {
            method:'POST',
            body: JSON.stringify({"title":"test",
                "publishers":"/api/publisher/1",
                "authors":[
                    "/api/authors/1"]}),
            headers:{'Content-Type' : 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <Layout>
            <h1>Borrow</h1>
            <div>
                <Button href="/" color="primary" variant="contained">Consult books</Button>
            </div>
            <div>
                <h2>Create new user : </h2>
                <input type='text'
                       value={user}
                       onChange={e => setUser(e.target.value)}
                />

                <button onClick={submitUser}>Submit user</button>

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