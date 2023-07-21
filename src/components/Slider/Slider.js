import React, { useEffect, useState } from 'react';
import { StyledSlider } from './Styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../Image/Image';

const Slider = ({ data, cardView }) => {
    const [sliderPerView, setSliderPerView] = useState(1);
    useEffect(()=>{
        function handleResize(){
            if( cardView === "vertical"){
                window.innerWidth > 650 ? setSliderPerView(2) : setSliderPerView(1);

            }else{
                setSliderPerView(1);
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [cardView]);

    return (
        <StyledSlider>
            <Swiper
                slidesPerView={sliderPerView}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((image) => (
                    <SwiperSlide key={Math.random()}>
                        <Image 
                            typeImg="carrousel" 
                            cardView={cardView}
                            src={image}
                            alt="Imagem veiculo slider"
                        />

                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledSlider>
    )
};

export default Slider;