export const body = JSON.stringify({
  query: `query GetAllData {
      allPricelists(orderBy: position_ASC) {
        id
        title
        prices
        description
        routepage
        linkpage {
          id
          title
        }
        secondcolor {
          hex
        }
        color {
          hex
        }
      }
      priceblock {
        id
        secondtext
        toptext
        title
        textcolor {
          hex
        }
      }
    }
    `
});
