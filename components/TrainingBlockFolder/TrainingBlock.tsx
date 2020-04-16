import React from "react";
import Loading from "../loading";
import Image from "../AMP/AmpImage";
import ProfileStyling from "../ProfileFolder/ProfileStyling";
import Link from "next/link";
import TagBlock from "../TagBlock";
import { useAmp } from "next/amp";
import { blockHeight, AMPurl } from "../../helpers/helpdata";
import { typescriptobj } from "../../helpers/typescriptobj";

interface TrainingBlockProps {
    profiles: [typescriptobj];
}

const TrainingBlock = ({ profiles }: TrainingBlockProps): React.ReactElement => {
    const isAmp = useAmp();
    return profiles ? (
        <>
            {profiles.map((profil, index) => {
                const id = profil?.linkpage?.id;
                const href = profil.routepage && `/${profil.routepage[0]}${id ? `/[id]` : ""}${isAmp ? AMPurl.url : ""}`
                const as = profil.routepage && `/${profil.routepage[0] + `${id ? `/${id}` : ""}` + `${isAmp ? AMPurl.url : ""}`}`
                return (
                    <div
                        key={profil?.id ? profil?.id : index}
                        className="profile-block"
                        style={{
                            minHeight: blockHeight,
                            backgroundImage:
                                profil?.backgroundimage?.url &&
                                `url(${profil?.backgroundimage?.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
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
                                {profil?.smallimage && <div className="profile-block__content__boxes__img" style={{ borderRadius: profil.roundedimage ? "50%" : "0" }}>
                                    <Image
                                        src={profil?.smallimage?.url}
                                        alt={profil?.smallimage?.alt}
                                        height={profil?.smallimage?.height}
                                        width={profil?.smallimage?.width}
                                        layout="intrinsic"
                                        styling={profil.roundedimage}
                                    />
                                </div>}


                                <div className="profile-block__content__boxes__text">
                                    <h3 style={{ color: `${profil?.textcolor?.hex}` }}>{profil?.title}</h3>
                                    <p
                                        style={{ color: `${profil?.textcolor?.hex}` }}
                                        className="text-top"
                                    >
                                        {profil?.toptext}
                                    </p>
                                    {profil?.secondtext && (
                                        <p
                                            style={{ color: `${profil?.textcolor?.hex}` }}
                                            className="text-bottom"
                                        >
                                            {profil?.secondtext}
                                        </p>
                                    )}
                                    {profil?.bottomtext && (
                                        <p
                                            style={{ color: `${profil.textcolor?.hex}` }}
                                            className="text-bottom"
                                        >
                                            {profil?.bottomtext}
                                        </p>
                                    )}
                                    {profil?.tags && <TagBlock tags={profil?.tags?.data} color={profil.textcolor?.hex} />}
                                    {profil?.button && (
                                        <div>
                                            <Link href={href} as={as} >
                                                <a title={profil.routepage[0]} className="external-link">{profil.buttontext}</a>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <ProfileStyling />
        </>
    ) : (
            <Loading />
        );
};

export default TrainingBlock;
