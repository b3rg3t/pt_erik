export const body = JSON.stringify({
    query: `query GetAllData {
        allCardoffers(orderBy: _createdAt_ASC) {
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
  