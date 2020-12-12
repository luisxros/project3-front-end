import { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../services/userService';

function LoginPage(props) {

    /* Component State */

    const [formState, setFormState ] = useState ({
        email: '',
        password: ''
    });

    /* handle function */
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));


    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!formValid()) return;

        try {
             await login(formState)
             props.handleSignupOrLogin();
        } catch (error) {
            alert(error.message);
        }
    }

    /* helper function */
    function formValid() {
        return !!(formState.email && formState.password);
    }



    return (
        <main className="Page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input 
                        name="email" 
                        placeholder="Email" 
                        className="form-control" 
                        type="email" 
                        value={formState.email}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input 
                        name="password" 
                        placeholder="Password" className="form-control" 
                        type="password" 
                        value={formState.password}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input disabled={!formValid()} value="Login" className="form-control" type="submit" />
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
        
    )
}

export default LoginPage;