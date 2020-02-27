import React from "react";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import ProfileStyling from "./ProfileStyling";
import Link from "next/link";
import EducationBlock from "./EducationBlock";

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
    text: string;
    fulltext: string;
    button: boolean;
    textColor?: string;
    utbildningar?: string[];
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
          backgroundImage: `url(${profil.pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div
          className="profile-block__layer"
          style={{
            background: `${profil.overlayColor}`,
            opacity: `${profil.opacity}`
          }}
        />
        <div className="profile-block__content">
          <div className={`profile-block__content__boxes ${profil.position}`}>
            <div className="profile-block__content__boxes__img">
              <Image
                src={profil.smallPic}
                alt={profil.alt}
                height="500"
                width="500"
                layout="intrinsic"
              />
            </div>

            <div className="profile-block__content__boxes__text">
              <h3 style={{ color: `${profil.textColor}` }}>{profil.name}</h3>
              {profil?.utbildningar && (
                <EducationBlock utbildningar={profil?.utbildningar} />
              )}
              <p style={{ color: `${profil.textColor}` }} className="text-top">
                {profil.description}
              </p>
              <p
                style={{ color: `${profil.textColor}` }}
                className="text-bottom"
              >
                {profil.fulltext}
              </p>
              {profil.text && (
                <p
                  style={{ color: `${profil.textColor}` }}
                  className="text-bottom"
                >
                  {profil.text}
                </p>
              )}
              {profil.button && (
                <div className="button-container">
                  <Link href="/profil" as="/profil">
                    <a className="external-link">Läs mer</a>
                  </Link>
                </div>
              )}
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
