import Layout from '../../components/layout';
import * as React from "react";
import {Container, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import * as PropTypes from "prop-types";
import {styled} from "@mui/material/styles";


export const getStaticProps = async () => {
    const res = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/authors.json');
    const data = await res.json();

    const res2 = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/publishers.json');
    const data2 = await res2.json();

    return {
        props: {authors: data, publishers: data2}
    }
}


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 22,
    },
}));

StyledTableCell.propTypes = {
    align: PropTypes.string,
    children: PropTypes.node
};

const Contributor = ({authors, publishers}) => {
    let authorText = '{"firstName":"defaultFirstName","lastName":"defaultLastName"}';
    const author = JSON.parse(authorText);

    let publisherText = '{"name":"publicEnFolie54"}';
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
            method: 'POST',
            body: JSON.stringify(author),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        console.log(data);
        document.location.reload();
        window.alert("Author created");
    }


    // Totouan's URL : https://api-ensicaen-webservices.herokuapp.com/api/publishers
    const submitPublisher = async () => {
        const ans = await fetch('http://15.237.139.132:3000/publisher/add', {
            method: 'POST',
            body: JSON.stringify(publisher),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await ans.json();
        console.log(data);
        console.log('ce que j envoie ' + JSON.stringify(publisher));
        document.location.reload();
        window.alert("Publisher created");
    }

    return (
        <Layout>
            <h1>Contributor</h1>
            <div>
                <Container>
                    <h2>Create new author : </h2>
                    <TextField id="outlined-basic" label="Fist name" variant="outlined"
                               onChange={e => setAuthorFirstName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Last name" variant="outlined"
                               onChange={e => setAuthorLastName(e.target.value)}/>
                    <div>
                        <Button variant="contained" onClick={submitAuthor}>Create author</Button>
                    </div>


                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Authors</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {authors.map((author) => (

                                    <TableRow
                                        key={author.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                        <TableCell align="left">{author.firstName}</TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Container>

            </div>


            <div>
                <Container>
                    <h2>Create new publisher</h2>
                    <TextField id="outlined-basic" label="Publisher name" variant="outlined"
                               onChange={e => setPublisherName(e.target.value)}
                    />
                    <div>
                        <Button variant="contained" onClick={submitPublisher}>Create publisher</Button>
                    </div>

                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Publishers</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {publishers.map((publisher) => (

                                    <TableRow
                                        key={publisher.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                        <TableCell align="left">{publisher.name}</TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Container>
            </div>

        </Layout>
    )
}

//TODO print list of authors and publishers to create new book

export default Contributor;