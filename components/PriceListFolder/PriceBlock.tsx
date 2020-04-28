import React from 'react';
import Link from 'next/link';
import { heights, AMPurl } from "../../helpers/helpdata";
import { useAmp } from "next/amp";
import PriceList from './PriceList';
import { PrisProps } from "../../pages/priser";

const PriceBlock = ({ response }: PrisProps): React.ReactElement => {
    const isAmp = useAmp();
    return (
        <div
            style={{
                minHeight: `calc(100vh - ${heights.footerheight})`,
                padding: "4rem 1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h2 style={{ color: `${response.priceblock?.textcolor?.hex}` }}>{response.priceblock.title}</h2>
            <p style={{ color: `${response.priceblock?.textcolor?.hex}`, padding: "1rem" }}>
                {response.priceblock.toptext}
            </p>
            <PriceList pricelist={response.allPricelists} />
            <p style={{ color: `${response.priceblock?.textcolor?.hex}`, padding: "1rem" }}>{response.priceblock.secondtext}</p>
            <div style={{ paddingTop: "1rem" }}>
                <Link href={`/${isAmp ? "kontakt" + AMPurl.url : "kontakt"}`} as={`/${isAmp ? "kontakt" + AMPurl.url : "kontakt"}`}>
                    <a className="main-btn course-btn" style={{ display: "flex", justifyContent: "center" }}>Kontakt</a>
                </Link>
            </div>
        </div>
    )
}

export default PriceBlock;