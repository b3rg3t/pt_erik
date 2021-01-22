import React from 'react';
import { colors, blockHeight, gradientBackground } from "../../helpers/helpdata";

const CardBlockStyling = () => (
    <style jsx global>{`
        .cards {
            min-height: ${blockHeight.height};
            max-width: 100%;
            background: white;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            z-index: 10;
        }
        .cards__block {
            width: 100%;
            max-width: 1000px;
            display: flex;
            flex-wrap: wrap;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            height: 100%;
        }
        .cards__panels {
            margin: 0.5rem;
            flex: 1 1 300px;
            flex-grow: 1;
            position: relative;
            min-height: 300px;
            max-width: 300px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 0.5rem;
            overflow: hidden;
            z-index: 2;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .card-block__layer {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            z-index: -1;
        }
        .cards__panels__content {
           postition: absolute; 
           width: 100%;
           min-height: 300px;
           top: 0;
           height: 100%;    
           display: flex;
           flex-direction: column;
           justify-content: space-between;
        }
        .cards__panels__content__header{
            display: flex;
        }
        .cards__panels__content__h-tag {
            max-widht: 100px;
            font-size: 1.4rem;
            padding: 0.5rem 1rem;
            ${gradientBackground.src}
            border-radius: 0 0 0.5rem 0;
            color: ${colors.white};
        }
        .cards__panels__content__description {
            padding: 1rem;
        }
        .cards__panels__content__button__div {
            display: flex;
            justify-content: center;
        }
        @media only screen and (max-width: 600 px) {

        }
  `}</style>
)

export default CardBlockStyling;