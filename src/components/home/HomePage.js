import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render(){
        return (
            <div>
                <h1>HOME page</h1>
                <Link to="about" >Learn more </Link>
            </div>
        );
    }
}
export default Home;