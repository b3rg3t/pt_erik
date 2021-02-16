export const body = JSON.stringify({
    query: `query GetAllData {
        logo {
          pageLogo {
            alt
            url
          }
        }
        allCardoffers(orderBy: position_ASC) {
            id
            name
            smallpic {
              alt
              height
              width
              url
            }
            description
          }
      }
      `
  });
  