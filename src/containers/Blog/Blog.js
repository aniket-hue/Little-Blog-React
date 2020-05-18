import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        post: [],
        selectedId: null
    }
    componentDidMount() {
        axios.get(' https://jsonplaceholder.typicode.com/posts')
            .then(res => {

                const post = res.data.slice(0, 4);
                const updatePost = post.map(posts => {
                    return {
                        ...posts,
                        author: 'Aniket'
                    }
                });
                this.setState({ post: updatePost });

                // console.log(this.state.post);
            })
    }

    postSelect = (id) => {
        // console.log(this.state.selectedId);
        this.setState({ selectedId: id });
        console.log(this.state.selectedId);
    }
    render() {
        const poste = this.state.post.map(post => {
            const id = post.id;
            // console.log(id);
            return <Post key={post.id} title={post.title} author={post.author}
                clicked={() => this.postSelect(id)} />;
        });
        // console.log(poste);
        return (
            <div>
                <section className="Posts">
                    {poste}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;