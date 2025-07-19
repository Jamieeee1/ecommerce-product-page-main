import React, { useState, useContext, use } from "react";
import { AppContext } from "../App";
import forward from "../assets/images/icon-next.svg";
import back from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close.svg";

const PictureHandler = ({ index }) => {
  const { items } = useContext(AppContext);
  const [popUp, setPopup] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const item = items[index];
  const images = [
    { main: item.image1, thumbnail: item.image1Thumbnail },
    { main: item.image2, thumbnail: item.image2Thumbnail },
    { main: item.image3, thumbnail: item.image3Thumbnail },
    { main: item.image4, thumbnail: item.image4Thumbnail },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedPicture(images[currentImageIndex].main);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedPicture(images[currentImageIndex].main);
  };

  return (
    <div className="flex flex-col gap-6 h-fit w-fit">
      <div className="flex justify-center items-center max-h-[400px] max-w-[400px]">
        <img src={item.image1} className=" rounded-2xl" alt="Product" />
      </div>
      <div className="flex gap-6">
        {images.map((image, idx) => (
          <div className="h-20 w-20" key={idx}>
            <img
              key={idx}
              src={image.thumbnail}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => {
                setSelectedPicture(image.main);
                setPopup(true);
                setCurrentImageIndex(idx);
              }}
              className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ))}{" "}
        {popUp && (
          <div className="fixed flex flex-col justify-center items-center gap-1 inset-0 backdrop-blur-lg bg- ">
            <div className="flex justify-end w-[450px]">
              <span onClick={() => setPopup(false)}>
                <img src={close} alt="" />
              </span>
            </div>
            <div className="h-[450px] w-[450px] relative">
              <span
                className="absolute -left-2 h-[30px] w-[30px]"
                onClick={() => prevImage()}
              >
                <img src={back} alt="" />
              </span>
              <span className="absolute -right-2" onClick={() => nextImage()}>
                <img src={forward} alt="" />
              </span>
              <img
                src={selectedPicture || item.image1}
                className="rounded-2xl"
                alt="Selected Product"
              />
            </div>
            <div className="flex gap-6">
              {images.map((image, idx) => (
                <div className="h-20 w-20" key={idx}>
                  <img
                    key={idx}
                    src={image.thumbnail}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => {
                      setSelectedPicture(image.main);
                      setCurrentImageIndex(idx);
                    }}
                    className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureHandler;
