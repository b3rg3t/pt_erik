import React from "react";
import Image from "../AMP/AmpImage";
import Loading from "../loading";
import Link from "next/link";
import { AMPurl } from "../../helpers/helpdata";

import CoursesStyling from "./CoursesStyling";

const Courses = (props: any): React.ReactElement => {
  const courseData = props.offers;
  return courseData.length > 0 ? (
    <>
      <div className="course">
        <div className="course__b">
          <h2>{props.offers.title}</h2>
          <div className="course__block">
            {courseData &&
              courseData.map((course, index) => {
                return (
                  <article key={course.id} className="course__panels">
                    <div className="course__panels__div background">
                      <div className="course__panels__div__img">
                        <Image
                          src={course?.image.url}
                          alt={course?.image.alt}
                          height={course?.image.height}
                          width={course?.image.width}
                          layout="intrinsic"
                        />
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
          <Link href={`/kontakt${AMPurl.url}`} as={`/kontakt${AMPurl.url}`}>
            <a className="main-btn course-btn">Kontakt</a>
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
