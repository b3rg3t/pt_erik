export const body = JSON.stringify({
    query: `query GetAllData {
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
  