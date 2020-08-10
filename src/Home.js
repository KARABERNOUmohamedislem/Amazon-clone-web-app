import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
      <div className="home">
        <img className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/istillbelieve/ISTIL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB408427790_.jpg"></img>
        
        <div className="home_row"> 
          <Product
            id="1"
            title="Sony WH1000XM4 | Casque Bluetooth à réduction de bruit sans fil, 30 heures d' autonomie, avec micro pour appels téléphoniques, optimisé pour Amazon Alexa et Google assistant, Noir "
            price={379}
            rating={2}
            image='https://m.media-amazon.com/images/I/31ful7zF5kL._AC._SR180,230.jpg' 
            />
          <Product
            id="123"
            title='KINESIS Gaming Freestyle Edge RGB Split Clavier mécanique (MX Rouge)'
            price={256}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/I/41qLCipPlWL._AC_UL180_SR296,180_.jpg'
          />
        </div>

        <div className="home_row">
          <Product
            id="4"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
          />
          <Product
            id="3"
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          />
          <Product
            id="2"
            title='Xiaomi Ecouteurs sans Fils Intra-Auriculaires Redmi Airdots S TWS Bluetooth 5.0 - avec Microphone et Mains Libres - Noir'
            price={17.23}
            rating={4}
            image='https://m.media-amazon.com/images/I/31BGIOaEtvL._AC._SR180,230.jpg'
          />
        </div>
        
        <div className="home_row">
          <Product
            id="5"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
          />
        </div>
      </div>

      
    );
}

export default Home
