import React from "react";
import { profileData } from "../../helpers/helpdata";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import LazyLoad from "react-lazyload";
import ProfileStyling from "./ProfileStyling";
// import { colors } from "../../helpers/helpdata";
interface ProfilBlockProps {
  profil: {
    pic: string;
    smallPic: string;
    alt: string;
    overlayColor: string;
    opacity: number;
    position: string;
    name: string;
    description: string;
    fulltext: string;
    button: boolean;
  };
}

const ProfilBlock = ({ profil }: ProfilBlockProps): React.ReactElement => {
  return profil ? (
    <>
      <LazyLoad height={"100vh"}>
        <div
          className="profile-block"
          style={{
            backgroundImage: `url(${profil.pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <div
            className="profile-block__layer"
            style={{
              background: `${profileData.overlayColor}`,
              opacity: `${profileData.opacity}`
            }}
          />
          <div className="profile-block__content">
            <div
              className={`profile-block__content__boxes ${profileData.position}`}
            >
              <div className="profile-block__content__boxes__img">
                <LazyLoad height={350}>
                  <Image
                    src={profileData.smallPic}
                    alt={profileData.alt}
                    height="500"
                    width="500"
                    layout="intrinsic"
                  />
                </LazyLoad>
              </div>

              <div className="profile-block__content__boxes__text">
                <h3>{profileData.name}</h3>
                <p className="text-top">{profileData.description}</p>
                <p className="text-bottom">{profileData.fulltext}</p>
              </div>
              {profileData.button && (
                <div className="button-container">
                  <a className="external-link" href="#courses">
                    Läs mer
                  </a>
                </div>
              )}
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
