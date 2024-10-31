import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={internalStyles.container}>
      <View>
        <Text style={internalStyles.welcome}>Welcome</Text>
        <Text style={internalStyles.user}>User</Text>
      </View>
      <View>
        <Image
          style={internalStyles.image}
          source={require("../../assets/images/user.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const internalStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  welcome: {
    fontSize: 18,
    fontFamily: "outfitRegular",
  },
  user: {
    fontSize: 24,
    fontFamily: "outfitSemiBold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
