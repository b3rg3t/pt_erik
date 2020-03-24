export const BASE_URL = "https://graphql.datocms.com/";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer d08a1eb18ab572e54dc724b47fd6ad`
};

export const body = JSON.stringify({
  query: `query GetAllData {
        allCardoffers(orderBy: _createdAt_ASC) {
          id
          name
          routepage
          smallpic {
            alt
            height
            width
            url
          }
          description
        }
        allArticles(orderBy: position_ASC){
          id
          opacity
          picposition
          secondtext
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
      }`
});

export const pricebody = JSON.stringify({
  query: `query GetAllData {
    allArticles(orderBy: position_ASC){
      id
      opacity
      picposition
      secondtext
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
  }
  `
});
