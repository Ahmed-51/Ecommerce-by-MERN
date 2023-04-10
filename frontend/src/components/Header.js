import React, { useEffect } from 'react'
import SearchBox from './SearchBox'
import {Route} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {logout} from '../actions/userActions'
import "../index.css"



const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }


  useEffect(()=>{
    console.log("hello")
    console.log(userInfo)
  }, [userInfo])


  return (
    <header>
      <Navbar className='colors'  variant='dark' expand="lg" collapseOnSelect style={{height: "80px"}}>
      <Container>
        <a href='/' >
          <Navbar.Brand>E-Shop</Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Route render={({history})=> <SearchBox history={history}/>}/> 
          <Nav className="ms-auto">
          <LinkContainer to='/cart'>
            <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>  
          </LinkContainer>
          {userInfo===null || userInfo?.length ===0  ? (
                <LinkContainer to='/login'>
                  <Nav.Link className="navright">
                    <i style={{fontSize:"0.8rem"}} className='fas fa-user'></i> 
                    <div style={{width:"0.5rem"}}/>
                    <p className="signin">Sign In</p>
                  </Nav.Link>
                </LinkContainer>
              ) : 
              (
                <NavDropdown title={userInfo?.name??""} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )
          }
              
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header 