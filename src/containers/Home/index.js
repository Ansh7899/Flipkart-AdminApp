import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Layout from '../../components/Layout';
import './style.css';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <Layout sidebar>
      {/* <Jumbotron style={{ margin: '5rem', background: 'white' }} className="text-center">
        <h1>Welcome to Admin DashBoard</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Jumbotron> */}
    </Layout>
  )

}

export default Home