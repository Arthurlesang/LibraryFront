import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <h1>Welcome to ENSI Caen's library !</h1>
            <Button variant="contained"><Link href="/posts/consult">CONSULT_ROLE</Link></Button>
            <Button variant="contained"><Link href="/posts/borrow">BORROW_ROLE</Link></Button>
            <Button variant="contained"><Link href="/posts/contributor">CONTRIBUTOR_ROLE</Link></Button>
            <Button variant="contained"><Link href="/posts/administrator">ADMINISTRATOR_ROLE</Link></Button>
        </Layout>

)
}