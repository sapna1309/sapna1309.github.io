import React from "react";
import {
  Box,
  IconButton,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "aos/dist/aos.css"
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function ProjectImageSlider({data,imgStyle}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
 // console.log("data",data);
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  //const top = useBreakpointValue({ base: "90%", md: "50%" });
 
  return (
      <Box
        position={"relative"}
        height={"350px"}
        width={"100%"}
        m={"auto"}
      
        
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          colorScheme="blue"
          position="absolute"
          left={0}
          top={128}
          borderRadius={20}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickPrev()}
      
        >
          <BiLeftArrowAlt size="35px" />
        </IconButton>
        {/* Right Icon */}
         <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          colorScheme="blue"
          right={0}
          top={128}
          borderRadius={20}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="35px" />
        </IconButton> 
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.map((card, index) => (
              <div className="hidden relative lg:block " data-aos="fade-left" key={index} >
                
       <img 
           className={imgStyle}
            src={card.src}
            alt={index}
            />
      
              </div>
          
            
          ))}
        </Slider>
      </Box>
  );
}
