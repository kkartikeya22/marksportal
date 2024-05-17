import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Switch
import './App.css'
import AddMark from './components/AddMark';
import MarksList from './components/MarksList';

function App() {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/kkartikeya22" element={<AddMark />} /> {/* Use 'element' prop instead of 'component' */}
                <Route path="/" element={<MarksList />} /> {/* Use 'element' prop instead of 'component' */}
            </Routes>
        </Router>
    );
}

export default App;
