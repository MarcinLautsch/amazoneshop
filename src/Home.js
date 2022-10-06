import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title='Xiaomi POCO M4 Pro - Smartfon 8+256GB, 6,43" Ekran 90Hz AMOLED, MediaTek Helio G96, potrójny aparat 64MP, 5000mAh, Żółty POCO + 2 lata gwarancji'
            price={899}
            rating={5}
            image="https://m.media-amazon.com/images/I/51vcQ8AHH3L._AC_SX679_.jpg"
          />
          <Product
            id="2"
            title="ECOVACS DEEBOT X1 OMNI, odkurzacz automatyczny z funkcją mopowania i wielofunkcyjną stacją czyszczącą, siła ssania 5000pa, funkcja unikania przeszkód 3D, bat. na 260min, Czarny"
            price={1950}
            rating={3}
            image="https://m.media-amazon.com/images/I/511dJ5sD4AL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Gerlach Germany Orbital GL4219 robot kuchenny profesjonalny robot kuchenny 1800 W, maks. 5 litrów, 6-biegowa stal nierdzewna"
            price={255.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81BxgZIyCuL._AC_SX679_.jpg"
          />

          <Product
            id="4awawe"
            weesrty
            title="LG NanoCell telewizor LED 65NANO966PA 8K pełna tablica,Rozmiar ekranu:	164 cm, Rozdzielczość: 8K, Wi-Fi, Tuner: DVB-C, DVB-S, DVB-T, DVB-T2, DVB-S2, DVB-T2-HD"
            price={1850}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Irk8ni0IL._AC_SX679_.jpg"
          />

          <Product
            id="5"
            title="Russell Hobbs blender, blender kielichowy, pojemność 1,5l, pojemność butelki przenośnej 600ml, dwa poziomy prędkości i funkcja mielenia, moc 600W, srebny, Stainless Steel"
            price={58}
            rating={3}
            image="https://m.media-amazon.com/images/I/81igrvEdG9L._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="2021 Apple MacBook Pro (16-calowy, Czip Apple M1 Pro z 10-rdzeniowym CPU i 16-rdzeniowym GPU, 16 GB RAM, 512 GB SSD)"
            price={2250}
            rating={4}
            image="https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SX679_.jpg"
          />

          <Product
            id="7"
            title="Apple iPhone 14 Pro Max (128 GB) - Głęboka purpura, Wyświetlacz Super Retina XDR 6,1 cala, Tryb filmowy teraz w 4K Dolby Vision z częstością nawet 30 kl./s"
            price={1971.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
