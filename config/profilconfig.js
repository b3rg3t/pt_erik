export const body = JSON.stringify({
  query: `query GetAllData {
        allProfiles(orderBy: _createdAt_ASC) {
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
        imageafter
        roundedimage
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