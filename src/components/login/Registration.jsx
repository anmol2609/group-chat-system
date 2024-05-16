const  Registration =()=>{
    return(
        <div className="login-container">
            <div className="login-header">
                <h1>Registration</h1>
            </div>
            <div className="login-form-container">
                <div className="textbox-container">
                    <div>User name</div>
                    <input className="input-box" type="text"/>
                </div>
                <div className="textbox-container">
                    <div>Email</div>
                    <input className="input-box" type="text"/>
                </div>
                <div className="textbox-container">
                <div>Password</div>
                    <input className="input-box" type="text"/>
                </div>
                <div className="login-btn-container">
                    <button>Sign-up</button>
                </div>
            </div>
        </div>
    )
}
export default Registration;