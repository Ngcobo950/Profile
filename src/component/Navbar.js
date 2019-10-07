import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
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
                        <Navigation>
                            <a href="#Home">Home</a>
                            <a href="#CV">Qualifications/CV</a>
                            <a href="#Projects">Projects</a>
                            <a href="#About">About</a>
                        </Navigation>
                    </Drawer>
                    <Content />
                    <h1 style={{color: 'white'}}>Musa Ngcobo</h1>
                </Layout>
            </div>
        );
    }
}
export default Navbar;

