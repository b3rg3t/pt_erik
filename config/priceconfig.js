export const body = JSON.stringify({
  query: `query GetAllData {
      allPricelists(orderBy: position_ASC) {
        id
        title
        prices
        description
        routepage
        secondcolor {
          hex
        }
        color {
          hex
        }
      }
    }
    `
});
