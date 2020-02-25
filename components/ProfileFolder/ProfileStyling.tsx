import React from "react";

const ProfileStyling = (): React.ReactElement => (
  <style jsx global >{`
    .profile-block {
      animation: easein 3s;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
    }
    .profile-block h3 {
      margin-bottom: 1rem;
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
    .text-bottom {
      font-weight: 500;
    }
    .text-top {
      padding-bottom: 1rem;
      font-weight: 1000;
    }
    .profile-block__content__boxes__text {
      flex: 1 1 500px;
      padding: 0 2rem 2rem 2rem;
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
