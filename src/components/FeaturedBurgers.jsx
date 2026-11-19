import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FEATURED_BURGERS } from '../data/featured';
import useReveal from '../hooks/useReveal';

const BurgerCard = memo(function BurgerCard({ burger }) {
  return (
    <>
      <img src={burger.image} alt={burger.alt} loading="lazy" decoding="async" />
      <div className="card-info">
        <h4>{burger.name}</h4>
        <p>{burger.description}</p>
        <span className="price">{burger.priceText}</span>
      </div>
    </>
  );
});

export default function FeaturedBurgers() {
  const ref = useReveal();

  return (
    <section id="featured-burgers" ref={ref}>
      <h2 className="heading">Our Highlights</h2>

      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {FEATURED_BURGERS.map((burger) => (
          <SwiperSlide key={burger.name} className="burger-card">
            <BurgerCard burger={burger} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
