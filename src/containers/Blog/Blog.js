import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Fullpost from './FullPost/FullPost';
class Blog extends Component {
    render() {

        // console.log(poste);
        return (
            <div className="Blog ">
                {/* <Posts /> */}
                <header>
                    <nav>
                        <ul>
                            <li ><NavLink to="/" exact>Home</NavLink></li>
                            <li ><NavLink to={{ pathname: '/new-post' }} exact>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>


                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={Fullpost} />

            </div>
        );
    }
}

export default Blog;

