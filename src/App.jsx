import React, { useState } from 'react'

import './App.scss'
import img01 from './assets/img/img01.jpg'
import img02 from './assets/img/img02.jpg'
import img03 from './assets/img/img03.jpg'


export default function App() {

  const [headImage, setHeadImage] = useState(img01)

  const handleImageClick = (e) => {
    setHeadImage(e.target.src)
  }

  // testing how call ,apply, bind works

  return (
    <section className="gallery">
      <div className="head">
        <figure>
          <img src={headImage} alt="" />
        </figure>
      </div>

      <div className="body">
        <figure >
          <img src={img01} onClick={(e) => handleImageClick.apply(this, [e])} alt="" />
        </figure>
        <figure>
          <img src={img02} onClick={(e) => handleImageClick.apply(this, [e])} alt="" />
        </figure>
        <figure>
          <img src={img03} onClick={(e) => handleImageClick.apply(this, [e])} alt="" />
        </figure>
      </div>
    </section>
  )
}
