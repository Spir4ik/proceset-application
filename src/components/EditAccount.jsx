import React, {useState} from 'react'
import Sidebar from "./Sidebar.jsx";
import {withApollo, useQuery, useMutation} from "react-apollo";
import {gql} from "@apollo/client";

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

function EditAccount() {
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState(null);
    const {loading, error, data} = useQuery(currentU, {
        onCompleted(data) {
            setName(data.currentUser.firstName);
            setSecondName(data.currentUser.secondName);
            setEmail(data.currentUser.email);
            setUserId(data.currentUser.id)
        }
    });
    const [edit] = useMutation(editUser);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);

    return(
        <div className="bg_common_data">
            <Sidebar />

            <div className="block_description">
                <h4>{`${data.currentUser.firstName} ${data.currentUser.secondName}. Редактирование`}</h4>
                <button type="submit"
                        className="btn btn-warning"
                        onClick={async e => {
                            e.preventDefault();
                            await edit ({
                                variables: {
                                    id: userId,
                                    email: email,
                                    firstName: name,
                                    secondName: secondName
                                }
                            })
                        }}
                >
                    Сохранить
                </button>
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
                        <input type="password"
                               className="form-control password-class"
                               id="exampleInputPassword1"
                               placeholder={'Не задано'}
                        />
                        <label htmlFor="exampleInputPassword1">Новый пароль</label>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className="form-control password-class"
                               id="exampleInputPassword2"
                               placeholder={'Не задано'}
                        />
                        <label htmlFor="exampleInputPassword2">Повторите пароль</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withApollo(EditAccount)