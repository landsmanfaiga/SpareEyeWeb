import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Layout>
    );
}

export default App;