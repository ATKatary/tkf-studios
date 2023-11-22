import * as React from "react";

import { GC, Keyframes } from "./utils";
import { Container } from "reactstrap";

export function SlideShow(props) {
  const {images, imgStyle, duration, ...other} = props;

  const delta = 10;
  const n = images.length;

  return (
    <>
      {images.map((_, i) => {
          const a0 = `_${i*100 / n}`;
          const a1 = `_${i*100 / n + delta}`;

          const frames = {};
          frames[a0] = {opacity: "100%"};
          frames[a1] = {opacity: "100%"};

          
          for (let j = 0; j <= n; j++) {
            if (j == i) continue;
            frames[`_${j*100 / n}`] = {opacity: 0};
          }
          if (i == 0) frames["_100"] = {opacity: "100%"}

          return <Keyframes name={`show-${n}-${i}`} frames={frames} key={`keyframe-${i}`}/>
        }
      )}
      <Container 
        {...other}
        className={`relative ${other.className}`}
        style={{...GC.GALLERY.SLIDESHOW.STYLE, ...other.style}}
      >
        {images.map((image, i) => 
          <img 
            key={`slideShow-${i}`}
            src={image.src} 
            style={{
              ...GC.GALLERY.SLIDESHOW.IMG.STYLE,
              ...imgStyle, 
              ...image.style,
              animation: `
                show-${n}-${i} 
                ${duration? duration : 5*n}s 
                ${other.timeFunction? other.timeFunction : "ease-in-out"} 
                ${other.iterationCount? other.iterationCount : "infinite"}
              `
            }} 
            className={`absolute ${image.className}`}
          />
        )}
      </Container>
    </>
  )
}