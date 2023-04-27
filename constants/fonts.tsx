import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Khula-Regular": require("../assets/fonts/Khula-Regular.ttf"),
    "Khula-SemiBold": require("../assets/fonts/Khula-SemiBold.ttf"),
    "Khula-Light": require("../assets/fonts/Khula-Light.ttf"),
    "Khula-ExtraBold": require("../assets/fonts/Khula-ExtraBold.ttf"),
    "Khula-Bold": require("../assets/fonts/Khula-Bold.ttf"),

    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });
};

export const Fonts = {
  KhulaRegular: "Khula-Regular",
  KhulaSemiBold: "Khula-SemiBold",
  KhulaLight: "Khula-Light",
  KhulaExtraBold: "Khula-ExtraBold",
  KhulaBold: "Khula-Bold",

  InterRegular: "Inter-Regular",
  InterSemiBold: "Inter-SemiBold",
  
};
