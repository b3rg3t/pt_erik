export const body = JSON.stringify({
  query: `query GetAllData {
    allMassageoffers(orderBy: _createdAt_ASC) {
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
