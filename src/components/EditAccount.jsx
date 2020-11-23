import React, {useState} from 'react'
import Sidebar from "./Sidebar.jsx";
import {withApollo, useQuery, useMutation} from "react-apollo";
import {gql} from "@apollo/client";
import eyeInvisible from '../assets/eye-invisible.svg'
import iconConfirm from '../assets/icon-confirmation.svg'
import iconInTheProcess from '../assets/icon-inTheProcess.svg'
import questionCircle from '../assets/question-circle.svg'
import vector from '../assets/Vector.svg'

const currentU = gql`
   query {
        currentUser {
            id
            firstName
            secondName
            email
  }
}
`;

const editUser = gql`
    mutation editUserMutation($id: Int!, $email: String!, $firstName: String!, $secondName: String!, $password: String) {
        editUser(id: $id, 
            email: $email, 
            firstName: $firstName, 
            secondName: $secondName, 
            password: $password) {
                firstName
                secondName
                email
            }
    }
`;

function EditAccount(props) {
    const {client,history} = props;
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);
    const {loading, error, data} = useQuery(currentU, {
        onCompleted(data) {
            setName(data.currentUser.firstName);
            setSecondName(data.currentUser.secondName);
            setEmail(data.currentUser.email);
            setUserId(data.currentUser.id);
            setPassword(data.currentUser.password)
        }
    });
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [edit] = useMutation(editUser);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(history);

    const testFunc = () => {
        if (typeof password === 'undefined') {
            return(
                <img src={questionCircle} alt=""/>
            )
        }
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
                <div className="window edit-page" style={{display: 'none'}}> </div>
            )
        }
        return(
            <div className="window edit-page" style={{display: 'display'}}>
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

    const renderButton = () => {
        if (password) {
            return(
                <button type="submit"
                           className="btn btn-warning"
                           disabled={!password ||
                           !passwordTwo || password.length < 8 ||
                           password.search(/[A-Z]/g) === -1 ||
                           password.search(/[a-z]/i) === -1 ||
                           password.search(/[0-9]/) === -1 ||
                           password.search(/[!@#$%^&*]/) === - 1}
                           onClick={async e => {
                               e.preventDefault();

                               if (password !== passwordTwo) {
                                   return alert('Пароли не совпадают!')
                               }

                               await edit ({
                                   variables: {
                                       id: userId,
                                       email: email,
                                       firstName: name,
                                       secondName: secondName,
                                       password: password
                                   }
                               });
                               window.location.reload();
                               console.log(data)
                           }}
            >
                Сохранить
            </button>)
        }
        return(
            <button type="submit"
                    className="btn btn-warning"
                    onClick={async e => {
                        e.preventDefault();
                        await edit ({
                            variables: {
                                id: userId,
                                email: email,
                                firstName: name,
                                secondName: secondName,
                                password: password
                            }
                        });
                        window.location.reload();
                    }}
            >
                Сохранить
            </button>
        )
    };

    return(
        <div className="bg_common_data">
            <Sidebar />

            <div className="block_description">
                <h4>{`${data.currentUser.firstName} ${data.currentUser.secondName}. Редактирование`}</h4>
                {renderButton()}
            </div>

            <div className="edit_account_block">
                <form>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               id="formGroupExampleInput1"
                               onChange={e => setName(e.target.value)}
                               value={name}
                               placeholder="Не задано"
                        />
                        <label htmlFor="formGroupExampleInput1">Имя</label>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               id="formGroupExampleInput2"
                               onChange={e => setSecondName(e.target.value)}
                               value={secondName}
                               placeholder="Не задано"
                        />
                        <label htmlFor="formGroupExampleInput2">Фамилия</label>
                    </div>
                    <div className="form-group">
                        <input type="email"
                               className="form-control email-class"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               onChange={e => setEmail(e.target.value)}
                               value={email}
                               placeholder={'Не задано'}
                        />
                        <label htmlFor="exampleInputEmail1">Электронная почта</label>
                    </div>
                    <div className="form-group">
                        <input type={showPassword ? 'text' : 'password'}
                               className="form-control password-class"
                               id="exampleInputPassword1"
                               onChange={e => setPassword(e.target.value)}
                               value={password}
                               placeholder={'Не задано'}
                        />
                        <label htmlFor="exampleInputPassword1">Новый пароль</label>
                        <p className="password-control eye-icon-editPage2">{testFunc()} </p>
                        <p className="password-control first-icon eye-icon-editPage"
                           onClick={() => setShowPassword(!showPassword)}>
                            <img src={eyeInvisible} alt=""/>
                        </p>

                        {password && validPassword()}
                    </div>
                    <div className="form-group">
                        <input type={showPasswordTwo ? 'text' : 'password'}
                               className="form-control password-class"
                               id="exampleInputPassword2"
                               onChange={e => setPasswordTwo(e.target.value)}
                               value={passwordTwo}
                               placeholder={'Не задано'}
                        />
                        <label htmlFor="exampleInputPassword2">Повторите пароль</label>
                        <p className="password-control eye-icon-editPage2"
                           onClick={() => setShowPasswordTwo(!showPasswordTwo)}>
                            <img src={eyeInvisible} alt=""/>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withApollo(EditAccount)