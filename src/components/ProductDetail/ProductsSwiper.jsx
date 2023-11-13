import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { PhotoService } from "./PhotoService";

export default function ProductsSwiper() {
  const [images, setImages] = useState(PhotoService.getImages());
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <section className="lg:hidden block">
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        circular
        style={{ maxWidth: "640px" }}
        showItemNavigators
        showItemNavigatorsOnHover
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />
    </section>
  );
}

// export default function ProductsSwiper() {
//   return (
//    <section className="lg:hidden block">
//      <div className="text-7xl">ProductsSwiper</div>
//    </section>
//   )
// }
