import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
// import { useAmp } from "next/amp";
// import { colors } from "../../helpers/helpdata";
import LazyLoad from "react-lazyload";
import { DataContext } from "../../pages/index";
import Loading from "../loading";
import { AiFillPicture } from "react-icons/ai";
import ImageStyling from "./ImageStyling";

const PlaceHolder = (): React.ReactElement => (
  <>
    <div>
      <span aria-label="Placeholder div">
        <AiFillPicture color="gray" />
      </span>
    </div>
    <style jsx>
      {`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          min-width: 366px;
          height: 350px;
          padding: 0 2rem;
        }
      `}
    </style>
  </>
);

const ImageBlock = (): React.ReactElement => {
  // const isAmp = useAmp();
  const articles = useContext(DataContext);

  const articleData = articles?.data?.allArticles;

  return articleData?.length > 0 ? (
    <>
      {articleData.map((img, index) => (
        <LazyLoad key={index} height="100vh" offset={[300, 0]}>
          <div
            className="image-block"
            style={{
              backgroundImage:
                img?.backgroundimg?.url && `url(${img?.backgroundimg?.url})`,
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
                  img.smallImagePosition ? "left" : ""
                }`}
              >
                <div className="image-block__content__boxes__img">
                  <LazyLoad
                    offset={[-200, 0]}
                    height={350}
                    placeholder={<PlaceHolder />}
                  >
                    <Image
                      src={img.smallimg.url}
                      alt={img.smallimg.alt}
                      width={img.smallimg.width}
                      height={img.smallimg.height}
                      layout="intrinsic"
                    />
                  </LazyLoad>
                </div>
                <div className="image-block__content__boxes__text">
                  <div className="text-box">
                    <h3>{img?.title}</h3>
                    {img.topText && <p className="text-top">{img.topText}</p>}
                    {img.bottomText && (
                      <p className="text-bottom">{img.bottomText}</p>
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
