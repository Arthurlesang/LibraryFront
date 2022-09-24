import Layout from '../../components/layout';
import {useState} from "react";
import {NextResponse as response} from "next/server";

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    return {
        props : {books : data}
    }
}

const Consult = ({books}) => {
    return (
        <Layout>
            <h1>Consult</h1>

            {books.map(book => (
                <div key={book.name}>
                    <h3>{book.name}</h3>
                </div>
            ))}
        </Layout>
    );
}
export default Consult;
