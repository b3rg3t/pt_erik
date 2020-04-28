export const body = JSON.stringify({
    query: `query GetAllData {
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
  