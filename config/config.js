export const BASE_URL = "https://graphql.datocms.com/";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer 76be29bb647a648ffc75fe6baa2de3`
};

export const body = JSON.stringify({
  query: `query GetAllData {
        allCardoffers(orderBy: position_ASC) {
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
        allHomepages(orderBy: position_ASC) {
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
