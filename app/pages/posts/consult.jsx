import Layout from '../../components/layout';
import {useState} from "react";

function Consult() {

    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const resposne = await fetch('');
        const data = await response.json();
        setBooks(data);
    }

    return (
        <Layout>
            <h1>Consult</h1>
            {
                books.map(book => {
                    return (
                        <div key = {book.id}>
                            {book.id} {book.title} {book.author} {book.publisher}
                        </div>
                    )
                })
            }
        </Layout>
    );
}
export default Consult;
