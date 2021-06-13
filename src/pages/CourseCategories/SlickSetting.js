// const NextArrow = ({ className, onClick, style }) => {
//     return (
//         <div
//             className={className}
//             style={{ ...style }}
//             onClick={onClick}>
//         </div>

//     )
// }


// const PrevArrow = ({ className, onClick, style }) => {
//     return (
//         <div
//             className={className}
//             style={{ ...style }}
//             onClick={onClick}>
//         </div>
//     )
// }



const slickSettings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    rows: 1,
    adaptiveHeight: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true, /* cuz I set z-index to -1  */
                dots: false,
                infinite: false
            }
        }
        // this can unslick at a given breakpoint by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
};

export default slickSettings;