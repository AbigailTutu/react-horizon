import React from 'react'
import Card from './Card'

function AboutUs() {
  return (
    <div className="container-fluid">
        <p className="para text-center">About Us</p>
        <div className="row cards">
           <Card imgSrc = "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/a2/P00588040.jpg" description = "This dainty ring from ring makers with round-cut diamonds that are pavé-set into the heart-shaped front."/>
           <Card imgSrc = "https://cdn-images.farfetch-contents.com/13/49/77/90/13497790_15936066_1000.jpg" description = "Pomellato 18kt rose and white gold Nudo diamond ring"/>
           <Card imgSrc = "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00730957.jpg" description = "Backed with 18kt yellow gold, this piece is lavishly decorated with channel-set emeralds and rows of diamond pavé. Made in Ghana"/>
           <Card imgSrc = "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/dc/P00543979.jpg" description = "Made from 18kt white gold, it's curved to perfectly frame a pear-cut 0.4ct white diamond.Wear yours alone or as part of a statement stacked look."/>
        </div>
    </div>
  )
}

export default AboutUs
