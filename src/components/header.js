import React,{Component} from 'react';
import './header.css'

class Header extends Component{
    render(){
        return(
            <header className="header">
            <div className="container">
                    <h3>A Front-End and Back-End Consulting Firm</h3>
                    <h3>Try it Hard it gets easy!</h3>
            </div>
            </header>
        );
    }
}
export default Header;