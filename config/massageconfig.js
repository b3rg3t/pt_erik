export const body = JSON.stringify({
  query: `query GetAllData {
    logo {
      pageLogo {
        alt
        url
      }
    }
    allMassageoffers(orderBy: position_ASC) {
            id
            price
            time
            title
            content
            position
            image {
              alt
              url
              height
              width
            }
          }
          massage {
            id
            opacity
            overlaycolor {
              hex
            }
            picposition
            secondtext
            button
            imageafter
            roundedimage
            buttontext
            bottomtext
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
    }
    `
});
