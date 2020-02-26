export const BASE_URL = "https://graphql.datocms.com/";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer d08a1eb18ab572e54dc724b47fd6ad`
};

export const body = JSON.stringify({
  query: `query GetAllData {
        allArticles {
          id
          opacity
          picposition
          secondtext
          position
          backgroundimage {
            alt
            url
            width
            height
          }
          smallimage {
            alt
            url
            height
            width
          }
          toptext
          title
          textcolor {
            hex
          }
          overlaycolor {
            hex
          }
        },
        allOffers {
          content
          title
          price
          position
          image {
            alt
            width
            height
            id
            url
          }
        }
      }`
});
