import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render() {
        return(
            <div style={{height: '300px', position: 'relative'}}>
                <Layout style={{background: 'black'}}>
                    <Header transparent title="Profile" style={{color: 'white'}}>
                        <Navigation >
                            <a href="#Home"><Link to ={"/"}>Home</Link></a>
                            <a href="#CV" ><Link to ={"cv"}>Qualifications/CV</Link></a>
                            <a href="#Projects"><Link to ={"projects"}>Projects</Link></a>
                            <a href="#About"><Link to={"about"}>About</Link></a>
                        </Navigation>
                    </Header>
                    <Drawer title="Profile">
                        <Navigation id="sidebar2">
                            <a href="#Home"><Link to ={"/"}>Home</Link></a>
                            <a href="#CV" ><Link to ={"cv"}>Qualifications/CV</Link></a>
                            <a href="#Projects"><Link to ={"projects"}>Projects</Link></a>
                            <a href="#About"><Link to={"about"}>About</Link></a>
                        </Navigation>
                    </Drawer>
                    <Content />
                    <div id="social">
                            <i className="fa fa-github-square fa-3x" style={{color:"white"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-linkedin fa-3x" style={{color:"white", width:"55px"}}></i>
                    </div>
                    <h1 style={{color: 'white'}}>Musa Ngcobo</h1>
                </Layout>
            </div>
        );
    }
}
export default Navbar;

