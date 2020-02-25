export const BASE_URL = "https://graphql.datocms.com/";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer fba5190e97e6ec7fa854afa2a1ac99`
};

export const body = JSON.stringify({
  query: `query GetAllCourses {
        allCourses(orderBy: date_ASC) {
          id
          title
          spots
          date
          location
          content
          time
          externalurl
          image {
            alt
            url
            height
            width
          }
        },
        allArticles {
          id
          bottomText
          topText
          title
          smallImagePosition
          opacity
          backgroundimg {
            height
            width
            alt
            url
          }
          smallimg {
            alt
            height
            width
            url
          }
          overlaycolor {
            hex
          }
        }
      }`
});
