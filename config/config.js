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
          linkpage {
            id
            title
          }
          smallpic {
            alt
            height
            width
            url
          }
          description
        }
        heroblock {
          backgroundimage {
            alt
            url
            width
            height
          }
          id
          header
          content
          opacity
          overlaycolor {
            hex
          }
          textcolor {
            hex
          }
        }
        allHomepages(orderBy: _createdAt_ASC) {
          id
          opacity
          overlaycolor {
            hex
          }
          picposition
          secondtext
          imageafter
          roundedimage
          button
          buttontext
          bottomtext
          linkpage {
            id
            title
          }
          tags
          routepage
          textcolor {
            hex
          }
          backgroundimage {
            url
            width
            height
            alt
          }
          smallimage {
            alt
            url
            width
            height
          }
          title
          toptext
        }
        contactblock {
          id
          opacity
          secondtext
          backgroundimage {
            alt
            url
            width
            height
          }
          toptext
          title
          textcolor {
            hex
          }
          overlaycolor {
            hex
          }
        }
        cardblock {
          id
          opacity
          secondtext
          backgroundimage {
            alt
            url
            width
            height
          }
          toptext
          title
          textcolor {
            hex
          }
          overlaycolor {
            hex
          }
        }
      }`
});
