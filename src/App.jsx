import React, { useState } from 'react'

import './App.scss'
import img01 from './assets/img/img01.jpg'
import img02 from './assets/img/img02.jpg'
import img03 from './assets/img/img03.jpg'


export default function App() {

  const [headImage, setHeadImage] = useState(img01)


  return (
    <section className="gallery">
      <div className="head">
        <figure>
          <img src={headImage} alt="" />
        </figure>
      </div>

      <div className="body">
        <figure >
          <img className={headImage == img01 ? 'active' : ''} src={img01} onClick={(e) => { setHeadImage(e.target.src) }} alt="" />
        </figure>
        <figure>
          <img className={headImage == img02 ? 'active' : ''} src={img02} onClick={(e) => { setHeadImage(e.target.src) }} alt="" />
        </figure>
        <figure>
          <img className={headImage == img03 ? 'active' : ''} src={img03} onClick={(e) => { setHeadImage(e.target.src) }} alt="" />
        </figure>
      </div>
    </section>
  )
}
