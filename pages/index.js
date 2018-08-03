import { Component } from 'react';
import axios from 'axios';

class App extends Component {

    static async getInitialProps() {
        let response = await axios.get('http://localhost:3000/api/posts');
        return { posts: response.data };
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Job Notes</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container'>        
                    <style jsx>{`
                .header {
                padding: 16px 16px;
                }
                .content {
                padding: 16px 16px;
                }
                .post {
                margin-bottom: 16px;
                }
            `}</style>
                    <div className='content'>
                        {this.props.posts.map((post, i) => {
                            return (
                                <div className='post' key={i}>
                                    <div className='row'>
                                        <div className='col-12 col-md-4'>
                                            <img className='img-fluid' src={post.image.secure_url} />
                                        </div>
                                        <div className='col-12 col-md-8'>
                                            <h2>{post.title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: post.content.brief }}></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
              </div>  
            </div>
        );
    };
}

export default App;