import React from 'react';

const SignUpView = ({ onSubmit }) => {
    return(
        <div>
            <h1>Sign Up</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpView;