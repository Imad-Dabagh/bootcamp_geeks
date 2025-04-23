import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

class ReactCarousel extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-3">Travel Destinations</h2>
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <Carousel>
            <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_600,h_400/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
              <p className="legend">Hong Kong</p>
            </div>
            <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_600,h_400/cities/c1cklkyp6ms02tougufx.webp" alt="Macao" />
              <p className="legend">Macao</p>
            </div>
            <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_600,h_400/cities/e8fnw35p6zgusq218foj.webp" alt="Japan" />
              <p className="legend">Japan</p>
            </div>
            <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_600,h_400/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas" />
              <p className="legend">Las Vegas</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default ReactCarousel;
