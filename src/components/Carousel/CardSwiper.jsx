import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from "@mui/material";
import { Navigation } from 'swiper/modules';
import Card from '../Card/Card';
import styles from '../Section/Section.module.css';
import nextIcon from '../../assets/next.svg';
import previousIcon from '../../assets/previous.svg';

function CardSwiper ({albums, isSong = false}) {
    return (
        <Swiper
        slidesPerView={1}
        breakpoints={{
          321: { slidesPerView: 2, spaceBetween: 30 },
          426: { slidesPerView: 3, spaceBetween: 30 },
          668: { slidesPerView: 4, spaceBetween: 30 },
          800: { slidesPerView: 5, spaceBetween: 30 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
          1440: { slidesPerView: 7, spaceBetween: 30 },
          1640: { slidesPerView: 8, spaceBetween: 30 },
        }}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {albums?.map((album) => (
          <SwiperSlide
            key={album.id}
            className={styles.slide}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Card album={album} isSong={isSong} />
            <Typography className={styles.cardTitle} component="span">
              {album.title}
            </Typography>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <img src={nextIcon} alt="Next" />
        </div>
        <div className="swiper-button-prev">
          <img src={previousIcon} alt="Previous" />
        </div>
      </Swiper>
    );
}

export default CardSwiper;