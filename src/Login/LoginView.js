import React from 'react';

const LoginView = ({ onSubmit }) => {
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Email
                    <input 
                        name="email" 
                        type="email"
                        placeholder="type your email"
                    />
                </label>
                <label>
                    Password
                    <input 
                        name="password" 
                        type="password"
                        placeholder="type your password"
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginView;