import React from 'react' 
import { BrowserRouter, Route, Link } from 'react-router-dom'   
import Home from './components/blogger/Home'
import UsersList from './components/blogger/Users'
import UserShow from './components/blogger/UserShow'
import Posts from './components/blogger/Posts'
import PostShow from './components/blogger/PostShow'

function App () {
    return (
        <BrowserRouter>
        <div>
            <h1> My App </h1>

            <Link to="/">Home</Link> |
            <Link to="/users">UsersList</Link> |
            <Link to="/posts">Posts</Link> 

            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/posts" component={Posts} exact={true}/> 
            <Route path="/posts/:id" component={PostShow}/>



        </div>
        </BrowserRouter>
    )
}

export default App
/*
import React from 'react'
import Tips from './Tips'
import Movies from './Movies'
import UserList from './UserList'
import Employees from './Employees'
function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>React is a fantastic ui library built for front end</p>
            <p> AWESOME </p>
            <Tips />
            <Movies />
            <UserList/>
            <Employees/>
        </div>
    )
}

export default App
*/