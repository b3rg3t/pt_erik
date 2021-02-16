export const body = JSON.stringify({
    query: `query GetAllData {
          logo {
            pageLogo {
              alt
              url
            }
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
          },
        }`
  });
  