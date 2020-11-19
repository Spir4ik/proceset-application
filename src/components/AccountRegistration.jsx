import React, {useState} from 'react'
import {withApollo, useMutation} from "react-apollo";
import localforage from "localforage";
import {gql} from "apollo-boost";
import LogoProceset from "../image/Vector.png";
import eyeInvisible from '../assets/eye-invisible.svg'
import iconConfirm from '../assets/icon-confirmation.svg'
import iconInTheProcess from '../assets/icon-inTheProcess.svg'
import questionCircle from '../assets/question-circle.svg'
import vector from '../assets/Vector.svg'
import {Link} from "react-router-dom";


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

    const testFunc = () => {
        if (password.length >= 8 &&
            password.search(/[A-Z]/g) !== -1 &&
            password.search(/[a-z]/i) !== -1 &&
            password.search(/[0-9]/) !== -1 &&
            password.search(/[!@#$%^&*]/) !== - 1) {
            return(
                <img src={vector} alt=""/>
            )
        }

        return(
            <img src={questionCircle} alt=""/>
        )
    };

    const validPassword = () => {
        if (password.length >= 8 &&
            password.search(/[A-Z]/g) !== -1 &&
            password.search(/[a-z]/i) !== -1 &&
            password.search(/[0-9]/) !== -1 &&
            password.search(/[!@#$%^&*]/) !== - 1) {
            return(
                <div className="window" style={{display: 'none'}}>
                    <div className="pointer">
                    </div>
                    <div className='valid_password'>
                        {password.length < 8 && <p><img src={iconInTheProcess} alt=""/>
                            Содержит 8 символов</p>}
                        {password.length >= 8 && <p><img src={iconConfirm} alt=""/>
                            Содержит 8 символов</p>}

                        {password.search(/[A-Z]/g) === -1 && <p><img src={iconInTheProcess} alt=""/>
                            латинские строчные буквы (A–Z)</p>}
                        {password.search(/[A-Z]/g) !== -1 && <p><img src={iconConfirm} alt=""/>
                            латинские строчные буквы (A–Z)</p>}

                        {password.search(/[a-z]/i) === -1 && <p><img src={iconInTheProcess} alt=""/>
                            латинские строчные буквы (a–z)</p>}
                        {password.search(/[a-z]/i) !== -1 && <p><img src={iconConfirm} alt=""/>
                            латинские строчные буквы (a–z)</p>}

                        {password.search(/[0-9]/) !== -1 && <p><img src={iconConfirm} alt=""/>
                            цифры (0-9)</p>}
                        {password.search(/[0-9]/) === -1 && <p><img src={iconInTheProcess} alt=""/>
                            цифры (0-9)</p>}

                        {password.search(/[!@#$%^&*]/) !== - 1 && <p><img src={iconConfirm} alt=""/>
                            неалфавитные символы (!, $, #, % и т.д.)</p>}
                        {password.search(/[!@#$%^&*]/) === - 1 && <p><img src={iconInTheProcess} alt=""/>
                            неалфавитные символы (!, $, #, % и т.д.)</p>}
                    </div>
                </div>
            )
        }


        return(
            <div className="window" style={{display: 'display'}}>
                <div className="pointer">
                </div>
                <div className='valid_password'>
                    {password.length < 8 && <p><img src={iconInTheProcess} alt=""/>
                        Содержит 8 символов</p>}
                    {password.length >= 8 && <p><img src={iconConfirm} alt=""/>
                        Содержит 8 символов</p>}

                    {password.search(/[A-Z]/g) === -1 && <p><img src={iconInTheProcess} alt=""/>
                        латинские строчные буквы (A–Z)</p>}
                    {password.search(/[A-Z]/g) !== -1 && <p><img src={iconConfirm} alt=""/>
                        латинские строчные буквы (A–Z)</p>}

                    {password.search(/[a-z]/i) === -1 && <p><img src={iconInTheProcess} alt=""/>
                        латинские строчные буквы (a–z)</p>}
                    {password.search(/[a-z]/i) !== -1 && <p><img src={iconConfirm} alt=""/>
                        латинские строчные буквы (a–z)</p>}

                    {password.search(/[0-9]/) !== -1 && <p><img src={iconConfirm} alt=""/>
                        цифры (0-9)</p>}
                    {password.search(/[0-9]/) === -1 && <p><img src={iconInTheProcess} alt=""/>
                        цифры (0-9)</p>}

                    {password.search(/[!@#$%^&*]/) !== - 1 && <p><img src={iconConfirm} alt=""/>
                        неалфавитные символы (!, $, #, % и т.д.)</p>}
                    {password.search(/[!@#$%^&*]/) === - 1 && <p><img src={iconInTheProcess} alt=""/>
                        неалфавитные символы (!, $, #, % и т.д.)</p>}
                </div>
            </div>
        )
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
                            <p className="password-control">{testFunc()} </p>
                            <p className="password-control first-icon" onClick={() => setShowPassword(!showPassword)}><img src={eyeInvisible} alt=""/> </p>

                            {password && validPassword()}
                        </div>
                        <div className="form-group">
                            <input type={showPasswordTwo ? 'text' : 'password'}
                                   className="form-control password-class"
                                   id="exampleInputPassword2"
                                   onChange={e => setPasswordTwo(e.target.value)}
                                   value={passwordTwo}
                                   placeholder={'Повторите пароль'}
                            />
                            <p className="password-control" onClick={() => setShowPasswordTwo(!showPasswordTwo)}><img src={eyeInvisible} alt=""/> </p>
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
                            <Link to="/"><a href="/">Вход</a></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withApollo(AccountRegistration)