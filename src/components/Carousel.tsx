import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/react/css/ionic-swiper.css";
import "./Carousel.css";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
      autoplay={true}
      keyboard={true}
      pagination={true}
      scrollbar={true}
      zoom={true}
    >
      <SwiperSlide>
        <div className="image-container">
          <img src="/images/banner-home-01.jpg" alt="Imagem 1 do Banner" />
          <div className="card">
            <h3>Amigos para adotar</h3>
            <hr style={{ backgroundColor: "#000" }} />
            <p>Aqui você encontra informações sobre o processo de adoção!</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src="/images/banner-home-02.jpg" alt="Imagem 2 do Banner" />
          <div className="card">
            <h3>Transforme vidas</h3>
            <hr style={{ backgroundColor: "#000" }} />
            <p>
              Ajude a mudar a vida de um animal dando-lhe a chance de um novo
              começo.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src="/images/banner-home-03.jpg" alt="Imagem 3 do Banner" />
          <div className="card">
            <h3>Seja um herói</h3>
            <hr style={{ backgroundColor: "#000" }} />
            <p>A adoção é um ato de amor. Encontre seu melhor amigo aqui!</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
