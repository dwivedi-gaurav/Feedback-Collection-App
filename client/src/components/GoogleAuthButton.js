import React from 'react';

const GoogleAuthButton=()=>{
    return(
        <div className="col s12 m6 offset-m3 center-align">
            <a className="oauth-container btn darken-4 white black-text" href="/auth/google" style={{textTransform:"none"}}>
                <div className="left">
                    <img width="20px" style={{marginTop:"7px", marginRight:"8px"}} alt="Google sign-in" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                </div>
                Login with Google
            </a>
        </div>
    );
}

export default GoogleAuthButton;