import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>    
                 <h1 className="text-white mb-3 mt-3">Muy Antoniadis</h1>
               <h3 className="text-white mb-5">Piezas únicas en cerámica y vajilla de autor</h3>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/1.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/2.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/3.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/4.jpg"
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/5.jpg"
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/6.jpg"
                        alt="sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/7.jpg"
                        alt="seven slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-80 mx-auto img-fluid"
                        src="img/8.jpg"
                        alt="eight slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div >
                <h3 className="mx-5 mt-5">MuyAntoniadis es la línea de vajilla de autor de Carolina Antoniadis.<br></br> A través de colecciones en constante cambio y transición, fragmentos de historias y escenas de la vida cotidiana se adueñan de las diferentes piezas, creando un diseño original en el que se amalgaman estética y funcionalidad en un mismo objeto.</h3>

                </div>
                
                <Link to="/products">
                <div className="d-flex align-items-center justify-content-center mt-5 ">


                <button className="mybtn mb-5">ver catálogo</button>
                </div>
                </Link>
               
                

            </React.Fragment>
            
        )
    }
}
