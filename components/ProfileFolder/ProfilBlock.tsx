import React from "react";
import { profileData } from "../dummyData";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import LazyLoad from "react-lazyload";
import ProfileStyling from "./ProfileStyling";
// import { colors } from "../../helpers/helpdata";

const ProfilBlock = (): React.ReactElement => {
  return profileData ? (
    <>
      <LazyLoad height={"100vh"}>
        <div
          className="profile-block"
          style={{
            backgroundImage: `url(${profileData[0].pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <div
            className="profile-block__layer"
            style={{
              background: `${profileData[0].overlayColor}`,
              opacity: `${profileData[0].opacity}`
            }}
          />
          <div className="profile-block__content">
            <div
              className={`profile-block__content__boxes ${profileData[0].position}`}
            >
              <div className="profile-block__content__boxes__img">
                <LazyLoad height={350}>
                  <Image
                    src={profileData[0].smallPic}
                    alt={profileData[0].alt}
                    height="500"
                    width="500"
                    layout="intrinsic"
                  />
                </LazyLoad>
              </div>

              <div className="profile-block__content__boxes__text">
                <h3>{profileData[0].name}</h3>
                <p className="text-top">{profileData[0].descripion}</p>
                <p className="text-bottom">{profileData[0].fulltext}</p>
              </div>
            </div>
          </div>
        </div>
        <ProfileStyling />
      </LazyLoad>
    </>
  ) : (
    <Loading loading={true} />
  );
};

export default ProfilBlock;
