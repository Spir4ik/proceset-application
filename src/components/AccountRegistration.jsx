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
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);

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
                            <input type={showPassword ? 'text' : 'password'}
                                   className="form-control password-class"
                                   id="exampleInputPassword1"
                                   onChange={e => setPassword(e.target.value)}
                                   value={password}
                                   placeholder={'Введите пароль'}
                            />
                            <p className="password-control" onClick={() => setShowPassword(!showPassword)}> </p>
                            {password && <div className="window">
                                <div className="pointer">

                                </div>
                                <div className='valid_password'>
                                    {password.length < 8 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#CCDAE0"/>
                                    </svg>
                                        Содержит 8 символов</p>}
                                    {password.length >= 8 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#4CAF50"/>
                                    </svg>
                                        Содержит 8 символов</p>}

                                    {password.search(/[A-Z]/g) === -1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#CCDAE0"/>
                                    </svg>латинские строчные буквы (A–Z)</p>}
                                    {password.search(/[A-Z]/g) !== -1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#4CAF50"/>
                                    </svg>латинские строчные буквы (A–Z)</p>}

                                    {password.search(/[a-z]/i) === -1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#CCDAE0"/>
                                    </svg>латинские строчные буквы (a–z)</p>}
                                    {password.search(/[a-z]/i) !== -1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#4CAF50"/>
                                    </svg>латинские строчные буквы (a–z)</p>}

                                    {password.search(/[0-9]/) !== -1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#4CAF50"/>
                                    </svg>цифры (0-9)</p>}
                                    {password.search(/[0-9]/) === -1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#CCDAE0"/>
                                    </svg>цифры (0-9)</p>}

                                    {password.search(/[!@#$%^&*]/) !== - 1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#4CAF50"/>
                                    </svg>неалфавитные символы (!, $, #, % и т.д.)</p>}
                                    {password.search(/[!@#$%^&*]/) === - 1 && <p><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2496 0.96875H12.1575C12.0043 0.96875 11.859 1.03906 11.7653 1.15937L5.32308 9.32031L2.23402 5.40625C2.18729 5.34692 2.12772 5.29895 2.0598 5.26593C1.99187 5.23292 1.91735 5.21572 1.84183 5.21562H0.749642C0.644955 5.21562 0.587142 5.33594 0.651205 5.41719L4.93089 10.8391C5.13089 11.0922 5.51527 11.0922 5.71683 10.8391L13.3481 1.16875C13.4121 1.08906 13.3543 0.96875 13.2496 0.96875Z" fill="#CCDAE0"/>
                                    </svg>неалфавитные символы (!, $, #, % и т.д.)</p>}

                                </div>
                            </div>}
                        </div>
                        <div className="form-group">
                            <input type={showPasswordTwo ? 'text' : 'password'}
                                   className="form-control password-class"
                                   id="exampleInputPassword2"
                                   onChange={e => setPasswordTwo(e.target.value)}
                                   value={passwordTwo}
                                   placeholder={'Повторите пароль'}
                            />
                            <p className="password-control" onClick={() => setShowPasswordTwo(!showPasswordTwo)}> </p>
                        </div>
                        <button type="submit" disabled={!password || !email ||
                                                        !firstName || !secondName ||
                                                        !passwordTwo || password.length < 8 ||
                                                        password.search(/[A-Z]/g) === -1 ||
                                                        password.search(/[a-z]/i) === -1 ||
                                                        password.search(/[0-9]/) === -1 ||
                                                        password.search(/[!@#$%^&*]/) === - 1}
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