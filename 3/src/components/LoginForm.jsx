import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(login, password);
    };

    return (
        <div>
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder="Login" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin} disabled={!login || !password}>Login</button>
        </div>
    );
};

export default LoginForm;
