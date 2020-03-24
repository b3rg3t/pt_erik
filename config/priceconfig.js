export const body = JSON.stringify({
  query: `query GetAllData {
      allPricelists(orderBy: position_ASC) {
        id
        title
        prices
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
