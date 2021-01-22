import React from "react";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import ProfileStyling from "./ProfileStyling";
import EducationBlock from "./EducationBlock";
import { EducationProps } from "../../pages/profil";

interface ProfilBlockProps {
  profil: EducationProps
}

const ProfilBlock = ({ profil }: ProfilBlockProps): React.ReactElement => {
  return profil ? (
    <>
      <div
        className="profile-block"
        style={{
          backgroundImage: profil?.backgroundimage?.url &&
            `url(${profil?.backgroundimage?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div
          className="profile-block__layer"
          style={{
            background: `${profil?.overlaycolor?.hex}`,
            opacity: `${profil?.opacity}`
          }}
        />
        <div className="profile-block__content">
          <div className={`profile-block__content__boxes ${
            profil?.picposition ? "left" : ""
            }`} style={{ flexWrap: !profil?.imageafter ? "wrap" : "wrap-reverse" }}>
            {profil?.smallimage && <div className="profile-block__content__boxes__img" style={{ borderRadius: profil?.roundedimage ? "50%" : "0" }}>
              <Image
                src={profil.smallimage.url}
                alt={profil.smallimage.alt}
                height={profil?.smallimage?.height}
                width={profil?.smallimage?.width}
                layout="intrinsic"
                styling={profil.roundedimage}
              />
            </div>}
            <div className="profile-block__content__boxes__text">
              <h3 style={{ textAlign: "center", color: `${profil.textcolor.hex}` }}>{profil.title}</h3>
              {profil?.educations && (
                <EducationBlock utbildningar={profil?.educations} />
              )}
            </div>
          </div>
        </div>
      </div>
      <ProfileStyling />
    </>
  ) : (
      <Loading />
    );
};

export default ProfilBlock;
