import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
// import { useAmp } from "next/amp";
// import { colors } from "../../helpers/helpdata";
import LazyLoad from "react-lazyload";
import { DataContext } from "../../pages/index";
import Loading from "../loading";
import ImageStyling from "./ImageStyling";

const ImageBlock = (): React.ReactElement => {
  // const isAmp = useAmp();
  const articles = useContext(DataContext);

  const articleData = articles?.data?.allArticles;
  console.log(articleData);
  return articleData?.length > 0 ? (
    <>
      {articleData.map((img, index) => (
        <LazyLoad key={index} height="100vh" offset={[300, 0]}>
          <div
            className="image-block"
            style={{
              backgroundImage:
                img?.backgroundimage?.url &&
                `url(${img?.backgroundimage?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          >
            <div
              className="image-block__layer"
              style={{
                background: `${img?.overlaycolor?.hex}`,
                opacity: `${img?.opacity}`
              }}
            />
            <div className="image-block__content">
              <div
                className={`image-block__content__boxes ${
                  img.picposition ? "left" : ""
                }`}
              >
                <div className="image-block__content__boxes__img">
                  <LazyLoad
                    offset={[-200, 0]}
                    height={350}
                    width={350}
                  >
                    <Image
                      src={img.smallimage.url}
                      alt={img.smallimage.alt}
                      width={img.smallimage.width}
                      height={img.smallimage.height}
                      layout="intrinsic"
                    />
                  </LazyLoad>
                </div>
                <div className="image-block__content__boxes__text">
                  <div className="text-box">
                    <h3 style={{ color: `${img.textcolor.hex}` }}>
                      {img?.title}
                    </h3>
                    {img.toptext && (
                      <p
                        style={{ color: `${img.textcolor.hex}` }}
                        className="text-top"
                      >
                        {img.toptext}
                      </p>
                    )}
                    {img.secondtext && (
                      <p
                        style={{ color: `${img.textcolor.hex}` }}
                        className="text-bottom"
                      >
                        {img.secondtext}
                      </p>
                    )}
                  </div>
                  <div className="button-container">
                    <a className="external-link" href="#courses">
                      Kurser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
      ))}
      <ImageStyling />
    </>
  ) : (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Loading loading={true} />
    </div>
  );
};

export default ImageBlock;
