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
            align-items: center;
            padding: 2rem 1rem;
        }
        .cards__block {
            max-width: 1000px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        .cards__panels {
            margin: 0.5rem;
            flex: 1 1 300px;
            flex-grow: 1;
            postion: relative;
            min-height: 300px;
            max-width: 300px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 0.5rem;
            overflow: hidden;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
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
        .header{
            display: flex;
        }
        .h-tag {
            max-widht: 100px;
            font-size: 1.4rem;
            padding: 0.5rem 1rem;
            ${gradientBackground.src}
            border-radius: 0 0 0.5rem 0;
            color: ${colors.white};
        }
        .description {
            padding: 1rem;
        }
        .button__div .card-btn {
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
        @media only screen and (max-width: 600 px) {
            .cards__panels {
               width: 200px;
            }
            .cards__panels__content {
              width: 200px;
            }
        }
  `}</style>
)

export default CardBlockStyling;