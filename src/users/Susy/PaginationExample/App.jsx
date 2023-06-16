import React from 'react'
import "./App.scss"

export default function App() {
  return (
    <div className='container'>
        <div className='container-item'>
            <div className="container-item-info info-1">
              <h1>JOSEPH CONNOR</h1>
              <h2>BEST MAN</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic voluptates provident totam mollitia, corrupti accusamus tempora ipsa odio explicabo non, consectetur iste deleniti dolorum, quibusdam accusantium.</p>
            </div>
            <div className="container-item-img">
              <img src="./public/connor.jpg" alt="" />
            </div>
        </div>
        <div className='container-item'>
            <div className="container-item-img">
              <img src="./public/natalia.jpg" alt="" />
            </div>
            <div className="container-item-info">
              <h1>NATALIE JONES</h1>
              <h2>BRIDEMAID</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic voluptates provident totam mollitia, corrupti accusamus tempora ipsa odio explicabo non, consectetur iste deleniti dolorum, quibusdam accusantium.</p>
            </div>
        </div>
        <div className='container-item'>
            <div className="container-item-info info-1">
              <h1>JOHN CONNOR</h1>
              <h2>GROOM'S FATHER</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic voluptates provident totam mollitia, corrupti accusamus tempora ipsa odio explicabo non, consectetur iste deleniti dolorum, quibusdam accusantium.</p>
            </div>
            <div className="container-item-img">
              <img src="./public/john.jpg" alt="" />
            </div>
        </div>
        <div className='container-item'>
            <div className="container-item-img">
              <img src="./public/william.jpg" alt="" />
            </div>
            <div className="container-item-info">
              <h1>WILLIAM JONES</h1>
              <h2>BRIDE'S FATHER</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic voluptates provident totam mollitia, corrupti accusamus tempora ipsa odio explicabo non, consectetur iste deleniti dolorum, quibusdam accusantium.</p>
            </div>
        </div>
    </div>
  )
}
