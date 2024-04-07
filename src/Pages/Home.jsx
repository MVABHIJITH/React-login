import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    const data = JSON.parse(sessionStorage.getItem("user"))
    console.log(data);

    const handleLogout = () => {
        sessionStorage.removeItem("user")
        navigate('/')
    }
    return (
        < >
            <Navbar bg="info" >
                <Container>
                    <Navbar.Brand href="#home">LOGIN PAGE</Navbar.Brand>
                    
                    <button onClick={handleLogout} className='ms-auto btn btn-danger rounded'>Logout</button>
                </Container>
            </Navbar>
            <div className='log d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
                <div className='d-flex align-items-center'>
                    <h1 style={{fontSize:"80px"}} className='me-2 mb-0  fw-bolder'><span className='fw-bolder text-info'>Hey</span> {data.name.toUpperCase()}</h1>
                 </div>
                <h5 style={{fontSize:"40px"}} className='mt-3'><span className='text-warning fw-bolder'>Welcome</span > to Website</h5>
                <img className='img-fluid' src="https://img.freepik.com/free-vector/welcome-word-flat-cartoon-people-characters_81522-4207.jpg" alt=""  />
            </div>
        </>
    )
}

export default Home