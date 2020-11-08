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
            localforage.setItem('token', data.login.token).then(r => console.log(r))
        }
    })

    // var config = JSON.parse(localStorage.getItem('config'));
    let a = JSON.parse(localStorage.getItem('token'));
    console.log(a);

    return(
        <div className="bg_login_page">
            <p><img src={LogoProceset} alt=""/></p>
            <div className="window_login">
                <form  onSubmit={async e => {
                    e.preventDefault();
                    await login({
                        variables: {
                            email: email,
                            password: password,
                        }
                    });
                    history.push('/editing');
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
                        <a href="#">Зарегистрироваться</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withApollo(Authorization)