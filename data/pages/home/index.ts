export type HomePageData = {
    hi: object;
    Im: object;
    name: string;
    title: object;
    image: string;
  }

export const homePageData: HomePageData =  {
    hi: {
        "en-US": "Hi,",
        "tr-TR": "Merhaba,",
    },
    Im: {
        "en-US": "I'm",
        "tr-TR": "Ben"
    },
    name: "Bora,",
    title: {
        "en-US": "Software Developer",
        "tr-TR": "Yazılım Geliştirici",
    },
    image: "bora.png",
}
