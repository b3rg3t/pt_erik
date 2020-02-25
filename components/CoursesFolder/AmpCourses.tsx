import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";
import DateBox from "../DateFolder/Date";
import { DataContext } from "../../pages/index";
import Loading from "../loading";
import * as moment from "moment";
import "moment/locale/sv";

import CoursesStyling from "./CoursesStyling";

const AmpCourses = (): React.ReactElement => {
  const isAmp = useAmp();

  const courses = useContext(DataContext);

  const courseData = courses?.data?.allCourses;

  return courseData?.length > 0 ? (
    <>
      <div className="course">
        <div className="course__b">
          <h2>Kurser</h2>
          <div className="course__block">
            {courseData &&
              courseData.map((course, index) => {
                //@ts-ignore
                let date = moment(course.date).format("llll");
                let day = date.substring(0, 3).toUpperCase();
                let number = date.substring(4, 6);
                let month = date.substring(7, 10).toUpperCase();
                // console.log(date);
                //@ts-ignore
                let comDate = moment(course.date).format("L");
                //@ts-ignore
                let comparedDates = moment(
                  comDate.replace("-", "").replace("-", ""),
                  "YYYYMMDD"
                ).fromNow();
                let past = false;
                if (comparedDates.includes("timmar")) {
                  past = false;
                  comparedDates = "Idag";
                } else if (comparedDates.includes("för")) {
                  past = true;
                }
                return (
                  <article key={index} className="course__panels">
                    <div className="course__panels__div background">
                      <div className="course__panels__div__img">
                        <Image
                          src={course.image.url}
                          width={isAmp ? `${course.image.width}` : `auto`}
                          height={isAmp ? `${course.image.height}` : "220"}
                          alt={course.image.alt}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                    <div className="course__panels__div text">
                      <div className="course__panels__div__header">
                        <div className="course__panels__div__header__box">
                          <h3>{course.title}</h3>
                          <span>{`Antal platser: ${
                            course.spots ? course.spots : "0"
                          }`}</span>
                          <span>{`Plats: ${
                            course.location ? course.location : "Okänd"
                          }`}</span>
                          <span>{`Tid: ${
                            course.time ? course.time : "Okänd"
                          }`}</span>
                        </div>
                        <div className="date">
                          <DateBox month={month} number={number} day={day} />
                        </div>
                      </div>
                      <div className="textP">
                        <p>{course.content}</p>
                      </div>
                      {past ? (
                        <>
                          <button className="main-btn" disabled={true}>
                            Passerat datum
                          </button>
                        </>
                      ) : (
                        <>
                          <a
                            title={course.externalurl}
                            className="external-link"
                            href={course.externalurl}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Se tillgänglighet
                          </a>
                        </>
                      )}
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
      <CoursesStyling />
    </>
  ) : (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Loading loading={true} />
    </div>
  );
};

export default AmpCourses;
