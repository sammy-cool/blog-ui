import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios' //npm install axios

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
        .then((response) => {
            let users = response.data;
            this.setState({ users })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h2>USERS LIST:{this.state.users.length} </h2>
                <ul>
                    {
                        this.state.users.map((user) => {
                        return <li key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Users