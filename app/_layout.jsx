import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    outfitRegular: require("../assets/fonts/Outfit-Regular.ttf"),
    outfitMedium: require("../assets/fonts/Outfit-Medium.ttf"),
    outfitSemiBold: require("../assets/fonts/Outfit-SemiBold.ttf"),
    outfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen
        name='login/index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
