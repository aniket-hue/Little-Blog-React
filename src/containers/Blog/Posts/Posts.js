import React, { Component } from "react";
import axios from 'axios';
import Post from '../../../components/Post/Post';
import '../Posts/Posts.css';
import { Link } from 'react-router-dom';
class Posts extends Component {

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
        // console.log(this.state.selectedId);
    }



    render() {


        const poste = this.state.post.map(post => {
            const id = post.id;
            // console.log(id);
            return <Link to={'/' + post.id} key={post.id} ><Post title={post.title} author={post.author}
                clicked={() => this.postSelect(id)} /></Link>;
        });

        // console.log(poste);

        return (
            <div>
                <section className="Posts">
                    {poste}
                </section>

            </div>

        );
    }
}

export default Posts;
                // <section>
                //     <FullPost id={this.state.selectedId} />
                // </section>
                //