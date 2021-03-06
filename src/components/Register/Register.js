import React, {Component} from 'react'

import Header from '../Header/Header'

class Register extends Component {

    constructor(props){
        super(props)
        console.log(this.props.items)
    }

    render(){
        return (
            <div>
                <Header></Header>
                <div className="signup-form">
                    <form action="" method="post">
                        <h2>Register</h2>
                        <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                        <div className="form-group">

                        <input type="text" className="form-control" name="full_name" placeholder="Full Name" required="required" />
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" name="user_name" placeholder="UserName" required="required" />
                        </div>

                        <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                        </div>
                        <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                        <div className="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                        </div>
                    </form>
                    <div className="text-center">Already have an account? <a href="#">Sign in</a></div>
                </div>
            </div>
        )
    }

}
export default Register;