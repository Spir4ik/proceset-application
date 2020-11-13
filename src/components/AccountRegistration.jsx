import React, {useState} from 'react'
import {withApollo, useMutation} from "react-apollo";
import localforage from "localforage";
import {gql} from "apollo-boost";
import LogoProceset from "../image/Vector.png";


const registUser = gql`
    mutation ($firstName: String!, $secondName: String!, $email: String!, $password: String!) {
        signup(
        firstName: $firstName, 
        secondName: $secondName, 
        email: $email, 
        password: $password
       )
    }
`;


function AccountRegistration(props) {
    const {client, history} = props;

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const [registration] = useMutation(registUser, {
        onCompleted(data) {
            localforage.setItem('token', data.signup)
        }
    });

    const dataValid = async (e) => {
        e.preventDefault();
        if (password !== passwordTwo) {
            // throw new Error('Пароли не совпадают!')
            return alert('Пароли не совпадают!')
        }
        try {
            await registration({
                variables: {
                    firstName: firstName,
                    secondName: secondName,
                    email: email,
                    password: password
                }
            });
            history.push('/process');
        } catch (err) {
            alert(err)
        }

    };
    return(
        <div className="bg_login_page">
            <p><img src={LogoProceset} alt=""/></p>
            <div className="window_login">
                <div className='registration_text'>
                    <h4>Регистрация</h4>
                </div>
                <div className="registration">
                    <form onSubmit={dataValid}>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   id="exampleInputFirstName"
                                   onChange={e => setFirstName(e.target.value)}
                                   value={firstName}
                                   placeholder={'Имя'}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   id="exampleInputSecondName"
                                   onChange={e => setSecondName(e.target.value)}
                                   value={secondName}
                                   placeholder={'Фамилия'}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email"
                                   className="form-control email-class"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   onChange={e => setEmail(e.target.value)}
                                   value={email}
                                   placeholder={'Электронная почта'}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                   className="form-control password-class"
                                   id="exampleInputPassword1"
                                   onChange={e => setPassword(e.target.value)}
                                   value={password}
                                   placeholder={'Введите пароль'}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                   className="form-control password-class"
                                   id="exampleInputPassword2"
                                   onChange={e => setPasswordTwo(e.target.value)}
                                   value={passwordTwo}
                                   placeholder={'Повторите пароль'}
                            />
                        </div>
                        <button type="submit" disabled={!password || !email || !firstName || !secondName || !passwordTwo}
                                className="btn btn-warning">Применить и войти
                        </button>
                        <div className='footer_block_registration'>
                            <p>Уже зарегистрированы?</p>
                            <a href="#/">Вход</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withApollo(AccountRegistration)