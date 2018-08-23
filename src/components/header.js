import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
const { Header } = Layout;

class Nav extends Component{
    render(){
        return(
            <Header style={{ position:'fixed',zIndex:1,width:'100%'}}>
                <Menu 
                    theme="dark" 
                    mode="horizontal" 
                    defaultSelectedKeys={[2]}
                >
                    <Menu.Item key="1"><img src="https://s3.amazonaws.com/thinkific-import/114168/lRGDunfcQlGiplOHgrog_Final Big Logo.png   " /></Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default Nav;