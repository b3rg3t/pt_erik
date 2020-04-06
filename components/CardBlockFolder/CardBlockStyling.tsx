import React from 'react';
import { colors, blockHeight } from "../../helpers/helpdata";

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
        .card__header {
            padding: 2rem;
        }
        .cards__block {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }
        .cards__panels {
            min-height: 100%;
            max-width: 300px;
            margin: 1rem 1rem;
            background: ${colors.color6};
            border-radius: 1rem;
            overflow: hidden;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .cards__panels__content {
            height: 100%;
        }
        .cards__panels__content p {
            padding: 1rem;
        }
        .text {
            position: absolute;
            left: 0;
            z-index: 10;
        }
        .cards__panels__content h3 {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
            color: ${colors.white};
            background: ${colors.secondary};
            border-radius: 0 0 0.5rem 0;
        }
        .card-block__content__boxes__img {
            position: relative;
            display: flex;
            justify-content: center;
            max-widht: 100px;
            overflow: hidden;
            background: lightgray;
        }
        .card-block__content__boxes__img img {
            object-fit: contain;
            max-widht: 100px;
        }
        .card-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            margin-bottom: 1rem;
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