import '@/styles/globals.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myimage from "../public/LogoProducts.png"
import mygithub from "../public/github.png"
import mytwitter from "../public/twitter.png"
import mylinkedin from "../public/linkedin.png"
import Image from "next/image";
import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import {LuShoppingCart} from "react-icons/lu"

export default function App({ Component, pageProps }) {

  return ( <div style={{
    backgroundColor: "#f5edba"
  }}>
    <div className="HeaderContainer sticky-top" >
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1" >
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <span className='text-sm'> <LuShoppingCart
              style={{
                fontSize: 20
              }}/> trail for free</span>
              <svg viewBox="0 0 2 2" className="mx-2 mybanner inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              Join us in Denver from June 7 – 9 to see what’s coming next.
            </p>
            <Link
              href="/createAcount"
              className="flex-none textDecorationRegister  rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Register now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="flex flex-1 justify-end">
            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
    
    
          {/* Nav-Bar */}
    <Navbar expand="lg" className="bg-body-tertiary  Navbar" >
          <Container fluid>
            <Navbar.Brand href="/"><Image src={myimage} width= {200} height={100} alt= "my name is logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0  toggleBg "
                style={{ maxHeight: '100px'}}
                navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Brands</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Mobile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  iPhone 9
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  iPhone X
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  OPPOF19
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  Huawei P30
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Laptop
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  MacBook Pro
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Samsung Galaxy Book
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Microsoft Surface Laptop 4
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Infinix INBOOK
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  HP Pavilion 15-DK1056WM
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Perfume
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  perfume Oil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Brown Perfume
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Fog Scent Xpressio Perfume
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Non-Alcoholic Concentrated Perfume Oil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Eau De Perfume Spray
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">  
                </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              </Nav>
              <div className='bg' style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems:"center",
                width: 270,
                fontSize: 16
              }}>
              <Nav.Link href="/signIn">Sing in</Nav.Link>
               <Nav.Link href="/createAcount"> <Button variant="outline-success" size="md">Create Account</Button></Nav.Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>



  <Component {...pageProps} />

  {/* Footer */}
 <div className='footerContainer'>

  <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title footerTitle">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title footerTitle">Company</span> 
    <Link href="/about" className="link link-hover">About us</Link>
    <Link href="/contact" className="link link-hover">Contact</Link>
    <Link href="/" className="link link-hover">Jobs</Link>
    <Link href="/" className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title footerTitle">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
   <Image src={myimage}  alt="perfume" style={{
    width: 160,
    height: 90,
    filter:" brightness(0) invert(1)"
   }}></Image>
    <p>ASHRA Industries Ltd. <br/>Providing reliable Products since 1990</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 myMedia">
    <Link href="https://www.linkedin.com/in/ashraf-ali-21179a269/"> <Image src={mylinkedin} alt='linkedin' width="24" height="24" style={{
      filter:" brightness(0) invert(1)"
    }}></Image></Link> 
    <Link href="https://twitter.com/Ashraf_khan_tw1/"> <Image src={mytwitter} alt='twitter' width="36" height="36" style={{
      filter:" brightness(0) invert(1)"
    }}></Image> </Link> 
    <Link href="https://github.com/Ashraf-ali-2000"> <Image src={mygithub} alt='gitbub' width="24" height="24" style={{
      filter:" brightness(0) invert(1)"
    }}></Image></Link> 
   
    </div>
  </div>
</footer>
    </div>
  </div>
  )
}
