import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            posts: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
        axios.get(userUrl)
        .then((response) => {
            let user = response.data;
            this.setState({ user })
        })

        const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        axios.get(postsUrl)
        .then((response) => {
            let posts = response.data;
            this.setState({ posts })
        })
    }

    render() {
        return (
            <div>
                <h2>USERNAME:{this.state.user.name} </h2>
                <h3>POSTS WRITTEN BY USER</h3>
                <ul>
                    {
                        this.state.posts.map((post) => {
                            return <li key={post.id}> <Link to={`/posts/${post.id}`} >{post.title}</Link> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserShow