import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
// import { colors } from "../../helpers/helpdata";
import { DataContext } from "../../pages/index";
import Loading from "../loading";
import ImageStyling from "./ImageStyling";

const AmpImageBlock = (): React.ReactElement => {
  const articles = useContext(DataContext);

  const articleData = articles?.data?.allArticles;

  return articleData?.length > 0 ? (
    <>
      {articleData.map((img, index) => (
        <div
          key={index}
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
                <Image
                  src={img.smallimg.url}
                  alt={img.smallimg.alt}
                  width={img.smallimg.width}
                  height={img.smallimg.height}
                  layout="intrinsic"
                />
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

export default AmpImageBlock;
