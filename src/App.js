import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Qr from './Components/Qr';
import HomePage from './Components/HomePage';
import Location from './Components/Location';
import Review from './Components/Review';
import Help from './Components/Help';
function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/qr" element={<Qr/>}/>
                    <Route path="/homepage" element={<HomePage/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/review" element={<Review/>}/>
                    <Route path="/help" element={<Help/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
