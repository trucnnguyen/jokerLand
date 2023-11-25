import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../components/Nav'

export default function Home() {
    return (
        <>
            <div>
                <Nav />
                <h1>Welcome to The FodoieLand!!</h1>
                <h4>Target the other 2 tabs to visit what I have here.</h4>
            </div>
        </>
    );
}