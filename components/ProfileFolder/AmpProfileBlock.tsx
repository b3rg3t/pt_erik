import React from "react";
import { profileData } from "../../helpers/helpdata";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import ProfileStyling from "./ProfileStyling";

interface AmpProfilBlockProps {
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
const AmpProfilBlock = ({
  profil
}: AmpProfilBlockProps): React.ReactElement => {
  return profil ? (
    <>
      <div
        className="profile-block"
        style={{
          backgroundImage: `url(${profileData.pic})`,
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
              <Image
                src={profileData.smallPic}
                alt={profileData.alt}
                height="500"
                width="500"
                layout="intrinsic"
              />
            </div>

            <div className="profile-block__content__boxes__text">
              <h3>{profileData.name}</h3>
              <p className="text-top">{profileData.description}</p>
              <p className="text-bottom">{profileData.fulltext}</p>
            </div>
          </div>
        </div>
      </div>
      <ProfileStyling />
    </>
  ) : (
    <Loading loading={true} />
  );
};

export default AmpProfilBlock;
