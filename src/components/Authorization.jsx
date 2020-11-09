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
                        alert(err)
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
                </form>
            </div>
        </div>
    )
}

export default withApollo(Authorization)