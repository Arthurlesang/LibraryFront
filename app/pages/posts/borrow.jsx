import Layout from '../../components/layout';
import Button from "@mui/material/Button";
import {Container, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";
import MaterialTable from 'material-table';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 22,
    },
}));


export const getStaticProps = async () => {
    const res = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/books.json');
    const data = await res.json();

    const res2 = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/users.json');
    const data2 = await res2.json();

    return {
        props: {books: data, users : data2}
    }
}

export const getUserProps = async () => {
    const res = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/users.json');
    const data = await res.json();

    return {
        props: {users: data}
    }
}


const Borrow = ({books, users}) => {

    let userText = '{"username": "user3","roles":["ROLE_USER"]}';
    const user = JSON.parse(userText);

    const submitUser = async () => {
        const response = await fetch('http://15.237.139.132:3000/user/add/', {
            method:'POST',
            body: JSON.stringify(user),
            headers:{'Content-Type' : 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
        document. location. reload();
        window.alert("User created");
    }

    const setUserName = (userName) => {
        user.username = userName;
    }

    return (
        <Layout>
            <Container>
                <h1>Borrow</h1>
                <div>
                    <Button href="/posts/consult" color="primary" variant="contained">Consult books</Button>
                </div>
                <div>
                    <h1>Create new user : </h1>
                    <TextField id="outlined-basic" label="User name" variant="outlined"
                               onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <Button variant="contained" onClick={submitUser}>Create user</Button>
                </div>

            </Container>

            <div>
            <Container>
                    <h1>Select book and user to create borrow :</h1>

                    {/* USERS TABLE*/}
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Users</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (

                                    <TableRow
                                        key={user.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                        <TableCell align="left">{user.username}</TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>


                <Container>
                    {/* BOOKS TABLE */}
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Books</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books.map((book) => (


                                    <TableRow
                                        key={book.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                        <TableCell align="left">{book.title}</TableCell>
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


//TODO create borrow asociating a book to a user

export default Borrow;