import React from "react";
import Products from "./products/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import myiphone1 from "../public/iphone1.png"
import myiphone2 from "../public/iphone2.png"
import mylaptop1 from "../public/laptop1.png"
import mylaptop2 from "../public/laptop2.png"
import myperfume1 from "../public/perfume1.png"
import myperfume2 from "../public/perfume2.png"
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
import mysumsanglg from "../public/sumsunglg.png"
import myapplelg from "../public/applelg.png"
import myperfogglg from "../public/fogglg.png"
import myjasminelg from "../public/jasminelg.png"
import myintellg from "../public/intellg.png"

const contentStyle = {
  width: 700,
  height:450,
  color: '#fff',
  lineHeight: '160px',
  background: '#ccb160',
};


export default function Home(props) {

  // const onSearch = (value) => console.log(value);
 
// console.log(props.myData);
  return (
    <div className="contentContainer" >

{/* Carasoule */}

<div className="bg-brown">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-start lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="textDecoration rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="textDecoration text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}> 
 <Carousel className="myCarousel" style={{
  width: 600,
  height: 400,
  paddingLeft: 90,
backgroundColor: "#404482"
 }}>
      <Carousel.Item>
        <Image src={myiphone1}  alt="perfume" style={{
          width: 350,
          height:350
        }}/>
        <Carousel.Caption>
          <h3>iphone 14 Product</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={mylaptop1}  alt="perfume" style={{
          width: 350,
          height:350
        }} />
        <Carousel.Caption>
          <h3>hp Laptop Product</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={myperfume1}  alt="perfume" style={{
          width: 350,
          height:350,
        }}/>
        <Carousel.Caption>
          <h3>Jasmine Perfume No-1</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={myiphone2} alt ="perfume" style={{
          width: 350,
          height:350,
        }}/>
        <Carousel.Caption>
          <h3>Apple Products iphone 12 pro</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={mylaptop2}  alt="perfume" style={{
          width: 350,
          height:350,
        }}/>
        <Carousel.Caption>
          <h3>intel Laptop</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={myperfume2}  alt="perfume" style={{
          width: 350,
          height:350,
        }}/>
        <Carousel.Caption>
          <h3>Non-Alcoholic Concentrated Perfume Oil</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </div>
      </div>
    </div>
    <div className="bg-brown" style={{
      textAlign:"center",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      color: "#000",
      marginLeft : 90,
      marginRight: 90,
      padding: 20
    }}
    >
     <h1 className="AllProducts">All Products</h1>
    </div>

      {/* Card rendering */}

      <div className="product-container">
        {props.myData.map(product => <Products key={product.id} myKey= {product.id} title={product.title} img={product.images[0]} myImages={product.images}   stock = {product.stock} price = {product.price}/>)}
      </div>

{/* logos  */}

<div className="bg-primary-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-800">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={mysumsanglg}
            alt="sumsung"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={myapplelg}
            alt="apple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={myperfogglg}
            alt="fogg"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={myjasminelg}
            alt="myjasmine"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={myintellg}
            alt="intel"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      myData: data.products
    },
    revalidate: 10
  }
}
