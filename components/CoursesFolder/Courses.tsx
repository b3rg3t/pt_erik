import React from "react";
import Image from "../AMP/AmpImage";
import Loading from "../loading";
import Link from "next/link";
import { useAmp } from "next/amp";
import { AMPurl } from "../../helpers/helpdata";

import CoursesStyling from "./CoursesStyling";
import { allMassageoffersProps } from "../../pages/massage";

interface CoursesProps {
  offers: [allMassageoffersProps]
}

const Courses = ({ offers }: CoursesProps): React.ReactElement => {
  const courseData = offers;
  const isAmp = useAmp();
  return courseData ? (
    <>
      <CoursesStyling />
      <div className="course">
        <div className="course__b">
          <h2 style={{ padding: "0 2rem" }}>Massage erbjudanden</h2>
          <div className="course__block">
            {courseData &&
              courseData.map(course => {
                return (
                  <article key={course.id} className="course__panels">
                    <div className="course__panels__div background">
                      <div className="course__panels__div__img">
                        <Image
                          src={course?.image.url}
                          alt={course?.image.alt}
                          height={isAmp ? course?.image.height : "auto"}
                          width={isAmp ? course?.image.width : "350"}
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
          <p style={{ padding: "0.5rem 2rem 0.5rem 2rem" }}>Hör gärna av dig/er för mer information.  För att boka något var vänligen använd kontakt formuläret.</p>
          <Link href={isAmp ? `/kontakt${AMPurl.url}` : "/kontakt"} as={isAmp ? `/kontakt${AMPurl.url}` : "/kontakt"} >
            <a className="main-btn course-btn">Kontakt</a>
          </Link>
        </div>
      </div>
    </>
  ) : (
      <Loading />
    );
};

export default Courses;
