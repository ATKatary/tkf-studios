export const HOME_GC = (props) => {
    const {images, ...other} = props;

    return {
        IMAGES: [
            {
                src: images("./home/pic0.avif"),
                style: {objectPosition: "top"}
            },
            {
                src: images("./home/pic1.avif"),
            },
            {
                src: images("./home/pic2.avif"),
            },
            {
                src: images("./home/pic3.avif"),
            },
            {
                src: images("./home/pic4.avif"),
            },
            {
                src: images("./home/pic5.avif"),
            },
            {
                src: images("./home/pic6.avif"),
            },
            {
                src: images("./home/pic7.avif"),
                style: {objectPosition: "top"}
            },
            {
                src: images("./home/pic8.avif"),
                style: {objectPosition: "top"}
            },
            {
                src: images("./home/pic9.avif"),
                style: {objectPosition: "top"}
            },
        ]
    }
}