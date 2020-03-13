import React from "react";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import LazyLoad from "react-lazyload";
import ProfileStyling from "../ProfileFolder/ProfileStyling";
import Link from "next/link";
import TagBlock from "../TagBlockFolder/TagBlock";
import { blockHeight } from "../../helpers/helpdata";


const TrainingBlock = (props: any): React.ReactElement => {
    const profiles = props?.profiles?.allTranings;
    return profiles.length > 0 ? (
        <>
            <LazyLoad height={"100vh"}>
                {profiles.map(profil =>
                    <div
                        key={profil.id}
                        className="profile-block"
                        style={{
                            backgroundImage:
                                profil?.backgroundimage?.url &&
                                `url(${profil?.backgroundimage?.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center"
                        }}
                    >
                        <div
                            className="profile-block__layer"
                            style={{
                                background: `${profil.overlaycolor.hex}`,
                                opacity: `${profil.opacity}`
                            }}
                        />
                        <div className="profile-block__content">
                            <div className={`profile-block__content__boxes ${
                  profil.picposition ? "left" : ""
                }`}>
                                <div className="profile-block__content__boxes__img">
                                    <LazyLoad height={350}>
                                        <Image
                                            src={profil.smallimage.url}
                                            alt={profil.smallimage.alt}
                                            height={profil.smallimage.height}
                                            width={profil.smallimage.width}
                                            layout="intrinsic"
                                        />
                                    </LazyLoad>
                                </div>

                                <div className="profile-block__content__boxes__text">
                                    <h3 style={{ color: `${profil.textcolor.hex}` }}>{profil.title}</h3>
                                    <p
                                        style={{ color: `${profil.textcolor.hex}` }}
                                        className="text-top"
                                    >
                                        {profil.toptext}
                                    </p>
                                    <p
                                        style={{ color: `${profil.textcolor.hex}` }}
                                        className="text-bottom"
                                    >
                                        {profil.secondtext}
                                    </p>
                                    {profil.bottomtext && (
                                        <p
                                            style={{ color: `${profil.textcolor.hex}` }}
                                            className="text-bottom"
                                        >
                                            {profil.bottomtext}
                                        </p>
                                    )}
                                    {profil.tags && <TagBlock tags={profil.tags.data} color={profil.textcolor.hex} />}
                                    {profil.button && (
                                        <div>
                                            <Link href={`/${profil.routepage[0]}`} as={`/${profil.routepage[0]}`} >
                                                <a title={profil.routepage[0]} className="external-link">{profil.buttontext}</a>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <ProfileStyling />
            </LazyLoad>
        </>
    ) : (
            <Loading loading={true} />
        );
};

export default TrainingBlock;
