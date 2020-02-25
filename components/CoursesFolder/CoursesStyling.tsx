import React from "react";

import { useAmp } from "next/amp";

import { colors } from "../../helpers/helpdata";

const CoursesStyling = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <style jsx global>{`
      .course {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .course__b {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1200px;
      }
      .course__block {
        padding: 0 1rem;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .course__panels__div__img {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e7e7e7;
        min-height: ${isAmp ? "" : "200px"};
        max-height: ${isAmp ? "175px" : "220px"};
        position: relative;
        overflow: hidden;
      }
      .background {
        background: ${colors.lightgray};
      }
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      .course__panels {
        margin: 1rem;
        flex: 1 1 300px;
        justify-self: center;
        align-self: center;
        background: #f9f9f9;
        max-width: 350px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
      }
      h2 {
        margin-bottom: 2rem;
      }
      .course__panels__div {
        display: flex;
        justify-content: center;
      }
      .course__panels__div text {
        display: flex;
        flex-direction: column;
      }
      .course__panels__div__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid lightgray;
        padding-bottom: 0.5rem;
      }
      .course__panels__div__header__box {
        display: flex;
        flex-direction: column;
      }
      .course__panels__div__header__box span {
        font-size: 0.8rem;
      }
      .text {
        display: flex;
        flex-direction: column;
        padding: 1rem;
      }
      .textP {
        padding: 1rem 0 1rem 0;
        min-height: 120px;
      }
      @media only screen and (max-width: 960px) {
        .course {
          padding-top: 4rem;
          margin-bottom: 3rem;
        }
        .course__panels {
          margin-bottom: 2rem;
        }
      }
    `}</style>
  );
};

export default CoursesStyling;
