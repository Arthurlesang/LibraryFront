import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Layout from '../components/layout';
import AppBar from "../components/appBar";

export default function Home() {
    return (
        <Layout>
            <h1>Welcome to ENSI Caen's library !</h1>
            <h3>Please select a role in navigation bar.</h3>
        </Layout>
)
}