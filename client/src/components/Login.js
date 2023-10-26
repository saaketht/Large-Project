import React, { useState } from 'react';

function Login()
{
    var loginName;
    var loginPassword;

    const [message, setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {login:loginUsername.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch('http://localhost:5001/api/login',
                {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/MainPage';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };

    return(
      <div id="loginFormDiv">
        <form onSubmit={doLogin}>
            <label id="loginUsernameLabel">Username:</label>
            <input type="text" id="loginUsernameField" placeholder="Username" ref={(c) => loginUsername = c} /><br />
            <label id="loginPasswordLabel">Password:</label>
            <input type="password" id="loginPasswordField" placeholder="Password" ref={(c) => loginPassword = c} /><br />
            <input type="submit" id="loginButton" class="buttons" value="Login" onClick={doLogin} />
        </form>
        <span id="loginResult">{message}</span>
     </div>
    );
};

export default Login;
