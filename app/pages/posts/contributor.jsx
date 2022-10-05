import Layout from '../../components/layout';
import * as React from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Contributor = () => {
    let authorText = '{"firstName":"defaultFirstName","lastName":"defaultLastName"}';
    const author = JSON.parse(authorText);

    let publisherText ='{"name":"publicEnFolie54"}';
    const publisher = JSON.parse(publisherText);

    const setPublisherName = (name) => {
        publisher.name = name;
    }

    const setAuthorLastName = (lastName) => {
        author.lastName = lastName;
    }

    const setAuthorFirstName = (firstName) => {
        author.firstName = firstName;
    }

    const submitAuthor = async () => {
        const response = await fetch('http://15.237.139.132:3000/author/add/', {
            method:'POST',
            body: JSON.stringify(author),
            headers:{'Accept' : 'application/json', 'Content-Type':'application/json'
            },
        })
        const data = await response.json();
        console.log(data);
    }


    // Totouan's URL : https://api-ensicaen-webservices.herokuapp.com/api/publishers
    const submitPublisher = async() => {
        const ans = await fetch('http://15.237.139.132:3000/publisher/add', {
            method:'POST',
            body:JSON.stringify(publisher),
            headers:{'Accept' : 'application/json'},
        })
        const data = await ans.json();
        console.log(data);
        console.log(JSON.stringify(publisher));
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
            </div>
            <div>
                <Button variant="contained" onClick={submitAuthor}>Create author</Button>
            </div>

            <div>
                <h2>Create new publisher</h2>
                <TextField id="outlined-basic" label="Publisher name" variant="outlined"
                           onChange={e => setPublisherName(e.target.value)}
                />
            </div>
            <div>
                <Button variant="contained" onClick={submitPublisher}>Create publisher</Button>
            </div>
        </Layout>
    )
}

//TODO print list of authors and publishers to create new book

export default Contributor;