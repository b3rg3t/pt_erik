export const massageData = {
  name: "Massage",
  pic: "",
  smallPic: "./images/massage.jpg",
  position: "right",
  alt: "Cat behind bars",
  overlayColor: "black",
  opacity: 0.6,
  description:
    "När det gäller massage så använder jag mig av klassisk massage för att nå en bredare målgrupp. Detta menas att denna metod kan användas på både motionärer och elitidrottare för att få en mjukare och behagligare kropp.  ",
  time: "5 minutes",
  author: "James Cameron",
  button: false,
  text: "",
  fulltext:
    "Såklart så anpassar jag mig efter behov av tex skador eller liknande. Men annars så går jag igenom hela kroppen för att gå igenom så mycket som möjligt."
};

export const massageOffer = {
  title: "Priser",
  text: "Hör gärna av dig/ni för mer information.",
  offers: [
    {
      image: {
        src: "./images/massage.jpg",
        alt: "Massage image",
        width: "200px",
        height: "220px"
      },
      price: 450,
      title: "Kort",
      time: 30,
      content: "På denna tid fokuserar jag mer på vissa muskelgrupper"
    },
    {
      image: {
        src: "./images/massage.jpg",
        alt: "Massage image",
        width: "200px",
        height: "200px"
      },
      price: 499,
      title: "Mellan",
      time: 45,
      content: "På denna tid fokuserar jag på hela kroppen"
    },
    {
      image: {
        src: "./images/massage.jpg",
        alt: "Massage image",
        width: "200px",
        height: "200px"
      },
      price: 699,
      title: "Lång",
      time: 60,
      content:
        "På denna tid fokuserar jag på hela kroppen och extra behändling på stora muskelgrupper"
    }
  ]
};
