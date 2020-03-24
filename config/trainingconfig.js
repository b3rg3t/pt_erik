export const body = JSON.stringify({
  query: `query GetAllData {
    allTranings(orderBy: _createdAt_ASC) {
      id
      button
      buttontext
      bottomtext
      opacity
      overlaycolor {
        hex
      }
      picposition
      routepage
      secondtext
      tags
      title
      toptext
      textcolor {
        hex
      }
      smallimage {
        alt
        width
        height
        url
      }
      backgroundimage {
        url
        width
        height
        alt
      }
    }
  }`
});
