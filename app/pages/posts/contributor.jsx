import Layout from '../../components/layout';
import * as React from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Contributor = () => {
    let authorText = '{"firstName":"defaultFirstName","lastName":"defaultLastName","books":[]}';
    const author = JSON.parse(authorText);

    const setAuthorLastName = (lastName) => {
        author.lastName = lastName;
    }

    const setAuthorFirstName = (firstName) => {
        author.firstName = firstName;
    }

    const submitAuthor = async () => {
        const response = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/authors', {
            method:'POST',
            body: JSON.stringify(author),
            headers:{'Content-Type' : 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <Layout>
            <h1>Contributor</h1>
            <div>
                <h2>Create new author : </h2>
                <TextField id="outlined-basic" label="Fist name" variant="outlined"
                           onChange={e => setAuthorFirstName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Last name" variant="outlined"
                           onChange={e => setAuthorLastName(e.target.value)} />

                <Button variant="contained" onClick={submitAuthor}>Create author</Button>
            </div>
        </Layout>
    )
}

//TODO print list of authors

export default Contributor;