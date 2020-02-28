import React from "react";
import { colors } from "../../helpers/helpdata";

const ProfileStyling = (): React.ReactElement => (
  <style jsx global>{`
    .profile-block {
      animation: easein 0.5s;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
    }
    .profile-block h3 {
      margin-bottom: 1rem;
      color: ${colors.white};
    }
    .profile-block p {
      color: ${colors.white};
    }
    .profile-block__layer {
      opacity: 0.9;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .left {
      flex-direction: row-reverse;
    }
    .profile-block__content__boxes__img {
      flex: 1 1 400px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0 2rem;
      border-radius: 50%;
    }
    .profile-block__content__boxes__img img {
      max-width: 350px;
      border-radius: 50%;
      height: 350px;
      width: 350px;
      object-fit: cover;
    }
    .text-top {
      font-weight: 1000;
      padding-bottom: 1rem;
    }
    .text-bottom {
      padding-bottom: 1rem;
    }
    .profile-block__content__boxes__text {
      flex: 1 1 500px;
      padding: 0 2rem 2rem 2rem;
      display: flex;
      flex-direction: column;
    }
    .profile-block__content__boxes {
      max-width: 960px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .profile-block__content {
      z-index: 2;
      padding: 4rem 0;
      position: relative;
    }
    .utb {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
    }
    .utb_item {
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 10px;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      background: ${colors.secondary};
    }
    .utb_item__2 {
      margin-left: 0.5rem;
    }
    @media only screen and (max-width: 600px) {
      .profile-block__content__boxes__img img {
        height: 200px;
        width: 200px;
      }
      .profile-block__content__boxes__img {
        padding: 2rem 0;
      }
    }
    @keyframes easein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}</style>
);

export default ProfileStyling;
