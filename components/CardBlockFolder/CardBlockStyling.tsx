import React from 'react';
import { colors, blockHeight, gradientBackground } from "../../helpers/helpdata";

const CardBlockStyling = () => (
    <style jsx global>{`
        .cards {
            min-height: ${blockHeight.height};
            max-widht: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
        .cards__block {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }
        .cards__panels {
            postion: relative;
            height: 300px;
            width: 300px;
            margin: 1rem 1rem;
            background: ${colors.color6};
            border-radius: 0.5rem;
            overflow: hidden;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .cards__panels__content {
            postition: absolute;
            top: 0;
            height: 300px;
            width: 300px;
           height: 100%;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
        }
        .header{
            display: flex;

        }
        .h-tag {
            max-widht: 100px;
            font-size: 1.4rem;
            padding: 0.5rem 1rem;
            ${gradientBackground.src}
            border-radius: 0.5rem 0 0.5rem 0;
            color: ${colors.white};
        }
        .description {
            padding: 1rem;
        }
        .card-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            margin-bottom: 1rem;
            background: none;
            border: 1px solid white;
        }
        .button__div {
            display: flex;
            justify-content: center;
        }
        @media only screen and (max-width: 1100 px) {
            .cards {
            padding-top: 4rem;
            margin-bottom: 2rem;
            }
            .card__header {
            padding: 2rem;
            }
        }
  `}</style>
)

export default CardBlockStyling;