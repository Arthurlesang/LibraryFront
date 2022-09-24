import Layout from '../../components/layout';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const getStaticProps = async() => {
    const res = await fetch('http://15.237.139.132:3000/book');
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
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Author's name</TableCell>
                            <TableCell align="right">Author's surname</TableCell>
                            <TableCell align="right">Publisher</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow
                                key={book.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {book.name}
                                </TableCell>
                                <TableCell align="right">{book.name}</TableCell>
                                <TableCell align="right">{book.author.name}</TableCell>
                                <TableCell align="right">{book.author.surname}</TableCell>
                                <TableCell align="right">{book.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}
export default Consult;
