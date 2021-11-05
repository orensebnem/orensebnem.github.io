export type HomePageData = {
    hi: object;
    Im: object;
    name: object;
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
    name: {
        "en-US": "Sebnem",
    },
    title: {
        "en-US": "Product Enthusiast",
        "tr-TR": "Yazılım Geliştirici",
    },
    image: "sebnem.png",
}
