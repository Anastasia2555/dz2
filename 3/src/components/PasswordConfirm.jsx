import React, { useState } from 'react';

const PasswordConfirm = ({ min }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const inputStyle = {
        border: (password.length < min || confirmPassword.length < min || password !== confirmPassword) ? "1px solid red" : "1px solid black"
    };

    return (
        <div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" style={inputStyle} />
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" style={inputStyle} />
        </div>
    );
};

export default PasswordConfirm;
