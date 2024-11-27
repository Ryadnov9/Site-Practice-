import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const NewsSlider = () => {
  const news = [
    {
      id: 1,
      title: "У ХДУ обговорили відпрацювання дорожньої карти",
      description: "та створення Асоціації релокованих університетів",
      image: "./assets/image/image.png",
      link: "./news2",
    },
    {
      id: 2,
      title: "Друга новина",
      description: "Опис другої новини",
      image: "",
      link: "",
    },
    {
      id: 3,
      title: "Третя новина",
      description: "Опис третьої новини",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="news">
      <h3 className="fs-2 text-body-emphasis" id="news-hed">
        Останні новини
      </h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="my-swiper"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p>
                {item.title} <br />
                {item.description}
              </p>
              <a href={item.link} className="icon-link">
                <svg className="bi">
                  <use xlinkHref="#chevron-right"></use>
                </svg>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
