import { Typography, Box } from "@mui/material";
// import "./carouselFirst.css";
import "./carouselRedo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import content from "../components/citiesInfo.js";
import { useEffect, useRef } from "react";

//get slider changing images randomly, featuring three at one time perhaps 
//get it to transform title to titlecase
//clicking on the image will take it to the single city page for that city -- will be implemented as a later feature 

function carouselFirst() {

    const swiperWrappedRef = useRef(null);
    function adjustMargin() {
        const screenWidth = window.innerWidth;

        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft =
            screenWidth <= 520
            ? "0px"
            : screenWidth <= 650
            ? "-50px"
            : screenWidth <= 800
            ? "-100px"
            : "-150px";
        }
    }

    useEffect(() => {
        adjustMargin();
        window.addEventListener("resize", adjustMargin);
        return () => window.removeEventListener("resize", adjustMargin);
    }, []);

    return (
        <>
        <main>
            <div className="container">
                <Swiper modules={[Pagination ]}
                grabCursor
                initialSlide={0}
                centeredSlides  
                centeredSlidesBounds
                slidesPerView="auto"
                pagination={{clickable : true}}
                spaceBetween={10}
                // breakpoints={{
                //     320: { spaceBetween: 40},
                //     650: { spaceBetween: 30},
                //     1000: { spaceBetween: 20},
                // }}
                // onSwiper={(swiper) =>{
                //     swiperWrappedRef.current = swiper.wrapperEl;
                // }}
                >
                    {content.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.img} alt={slide.title} />
                            <div className="title">
                                <Typography variant="h2" color="primary">{slide.title}</Typography>
                            </div>
                            <div className="content">
                                <div className="text-box">
                                    <Typography variant="body3" color="text">{slide.description}</Typography>
                                </div>
                                <div className="footer">
                                    <div className="category">

                                    </div>
                                    <button>
                                        <span className="label">More...</span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> 
            </div>
        </main>
        
        </>
    )
} export default carouselFirst;