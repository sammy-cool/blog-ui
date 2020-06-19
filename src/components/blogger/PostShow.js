import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            post: {},
            comments: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios.get(postUrl)
        .then((response) => {
            let post = response.data;
            this.setState({ post })

            const userUrl = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
            axios.get(userUrl)
            .then((response) => {
                let user = response.data;
                this.setState({ user })
            })
        })

        const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        axios.get(commentsUrl)
        .then((response) => {
            let comments = response.data;
            this.setState({ comments })
        })
    }

    render() {
        return (
            <div>
                <h2>USERNAME: {this.state.user.name}</h2>
                <h2>TITLE: <b> {this.state.post.title} </b> </h2>
                <h2>BODY:  
                    <br />
                    <b>{this.state.post.body}</b>
                </h2>
                <hr />
                <h2>COMMENTS</h2>
                <ul>
                    {
                        this.state.comments.map((comment) => {
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                <hr />
                <p> <Link to={`/users/${this.state.user.id}`}> More Posts of author: {this.state.user.name} </Link> </p>
            </div>
        )
    }
}

export default PostShow