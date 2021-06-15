import React, {useState} from 'react';
// import Request from '../../api/request';
import './registration.scss';

const Registration = ()=> {


    const [user, setUser] = useState({});
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');

    const onSubmit = async (evt)=>{
      evt.preventDefault();
      const firstName = evt.target['f-name'].value;
      const lastName = evt.target['l-name'].value;
      const email = evt.target['email'].value;
      const password = evt.target['pass'].value;

      if(firstName !== '' && lastName!== '' && email!== '' && password!==''){
          const prepareUser = {...user,
              first_name: firstName,
              last_name: lastName,
              email,
              password
          };

         // const response = await service.registerUser(prepareUser);
      }
    };


    const login = async ()=>{
        const response = await service.login({first_name: userName, password: pass});
        console.log(response)
    };


    return (
        <div className="registration">
            <header>
            </header>
            <form onSubmit={onSubmit}>

                <div className="container">
                        <div className="form-item">
                            <label htmlFor="f-name"><b>First name: </b></label>
                            <input
                                type="text"
                                name="f-name"
                                placeholder="First name"
                            />
                        </div>

                   <div  className="form-item">
                            <label htmlFor="l-name"><b>Last name: </b></label>
                            <input
                                type="text"
                                name="l-name"
                                placeholder="Last name"
                            />

                     </div>


                    <div  className="form-item">
                        <label htmlFor="email"><b>Email: </b></label>
                        <input type="text"
                               placeholder="Enter Email"
                               name="email" id="email"
                               required/>
                    </div>

                    <div className="form-item">

                        <label htmlFor="pass"><b>Password: </b></label>
                        <input type="password"
                               placeholder="Password"
                               name="pass"
                               required/>
                    </div>

                </div>
                <input type="submit" value="Send"/>
            </form>

            <div className="login">

                <label htmlFor="f-name"><b>First name: </b></label>
                <input
                    onChange={(e)=>setUserName(e.target.value)}
                    type="text"
                    name="f-name"
                    placeholder="First name"
                />

                <hr/>

                <label htmlFor="pass"><b>Password: </b></label>
                <input
                    onChange={(e)=>setPass(e.target.value)}
                    type="password"
                    placeholder="Password"
                    name="pass"
                    required/>

                <button onClick={login}>
                    login
                </button>

            </div>

        </div>
    );
};

export default Registration;