import React from "react";
import Image from "../AMP/AmpImage";
import LazyLoad from "react-lazyload";
import Loading from "../loading";
import Link from "next/link";

import CoursesStyling from "./CoursesStyling";

const Courses = (props: any): React.ReactElement => {
  const courseData = props.offers.offers;
  return courseData.length > 0 ? (
    <>
      <div className="course">
        <div className="course__b">
          <h2>{props.offers.title}</h2>
          <div className="course__block">
            {courseData &&
              courseData.map((course, index) => {
                return (
                  <article key={index} className="course__panels">
                    <div className="course__panels__div background">
                      <div className="course__panels__div__img">
                        <LazyLoad height={200}>
                          <Image
                            src={course.image.src}
                            width={`auto`}
                            height={"220"}
                            alt={course.image.alt}
                            layout="intrinsic"
                          />
                        </LazyLoad>
                      </div>
                    </div>
                    <div className="course__panels__div text">
                      <div className="course__panels__div__header">
                        <div className="course__panels__div__header__box">
                          <h3>{course.title}</h3>
                          <p style={{ fontWeight: "bold" }}>
                            <span
                              style={{ fontSize: "1.5rem", color: "orange" }}
                            >
                              {course.time ? course.time : "Okänd"}
                            </span>{" "}
                            MIN
                          </p>
                        </div>
                      </div>
                      <div className="textP">
                        <p>{course.content}</p>
                      </div>
                      <div className="price">
                        <p>{course.price} ;-</p>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
          <p>{props.offers.text}</p>
          <Link href="/kontakt" as="kontakt">
            <a className="main-btn course-btn">KONTAKT</a>
          </Link>
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

export default Courses;
