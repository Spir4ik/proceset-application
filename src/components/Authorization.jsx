import React, {useState} from 'react'
import {useMutation, withApollo} from "react-apollo";
import localforage from "localforage";
import LogoProceset from "../image/Vector.png";
import {gql} from "apollo-boost";
import {Link} from "react-router-dom";


const LoginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function Authorization(props) {
    const {client, history} = props;
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const [login] = useMutation(LoginMutation, {
        onCompleted(data) {
            localforage.setItem('token', data.login.token)
        }
    });

    return(
        <div className="bg_login_page">
            <p><img src={LogoProceset} alt=""/></p>
            <div className="window_login">
                <form  onSubmit={async e => {
                    e.preventDefault();
                    try {
                        await login({
                            variables: {
                                email: email,
                                password: password,
                            }
                        });
                        history.push('/process');
                    } catch (err) {
                        setError(err.message)
                    }
                }}>
                    <div className="form-group">
                        <input type="email"
                               className="form-control email-class"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               onChange={e => setEmail(e.target.value)}
                               placeholder={'Введите почту'}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className="form-control password-class"
                               id="exampleInputPassword1"
                               onChange={e => setPassword(e.target.value)}
                               placeholder={'Введите пароль'}
                        />
                    </div>
                        <button type="submit" disabled={!password || !email}
                                className="btn btn-warning">Войти в систему
                        </button>
                    <div>
                        <Link to='/registration'>
                            <a href="#">Зарегистрироваться</a>
                        </Link>
                    </div>
                   {error && <div className="block_error">
                        <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M44.7091 36.7497L25.2236
                            2.99973C24.4538 1.66635 22.5293 1.66635 21.7595 2.99973L2.27387 36.7497C1.50409
                            38.0831 2.46637 39.7497 4.00592 39.7497H42.9771C44.5167 39.7497 45.4789 38.0831
                            44.7091 36.7497ZM26.9556 1.99973C25.416 -0.666901 21.567 -0.666901 20.0274
                            1.99973L0.541873 35.7497C-0.997739 38.4164 0.926761 41.7497 4.00592
                            41.7497H42.9771C46.0563 41.7497 47.9808 38.4164 46.4412 35.7497L26.9556
                            1.99973ZM25.9915 33.1596C25.9915 34.1759 25.096 34.9997 23.9915 34.9997C22.8869
                            34.9997 21.9915 34.1759 21.9915 33.1596C21.9915 32.1435 22.8869 31.3197 23.9915
                            31.3197C25.096 31.3197 25.9915 32.1435 25.9915 33.1596ZM23.9915 11.9997C22.887
                            11.9997 21.9915 12.8951 21.9915 13.9997V27.4797C21.9915 28.5843 22.887 29.4797
                            23.9915 29.4797C25.0961 29.4797 25.9915 28.5843 25.9915 27.4797V13.9997C25.9915
                            12.8951 25.0961 11.9997 23.9915 11.9997Z" fill="#EE4141"/>
                        </svg>
                        <p>{error}</p>
                    </div>}
                </form>
            </div>
        </div>
    )
}

export default withApollo(Authorization)