import Layout from '../../components/layout';
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 22,
    },
}));

export const getStaticProps = async() => {
    const res = await fetch('https://api-ensicaen-webservices.herokuapp.com/api/books.json');
    const data = await res.json();

    return {
        props : {books : data}
    }
}

const Consult = ({books}) => {
    return (
        <Layout>
            <h1>Consult</h1>

            {/*{books.map(book => (
                <div key={book.name}>
                    <h3>{book.name} {book.author.name} {book.author.surname} {book.state}</h3>
                </div>
            ))}*/}


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">Author's first name</StyledTableCell>
                            <StyledTableCell align="left">Author's last name</StyledTableCell>
                            <StyledTableCell align="left">Publisher</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow
                                key={book.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left" >{book.title}</TableCell>
                                <TableCell align="left">{book.authors.firstName}</TableCell>
                                <TableCell align="left">{book.authors.lastName}</TableCell>
                                <TableCell align="left">{book.publisher}</TableCell>
                                <TableCell align="left">{book.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}

//TODO resolve publishers and authorts consult page
export default Consult;
