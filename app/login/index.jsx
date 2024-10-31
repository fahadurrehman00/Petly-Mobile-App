import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/login.jpg")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Ready to make new Friends?</Text>
            <Text style={styles.subText}>
              Let's adopt the pet and make your life happy...
            </Text>

            <Pressable style={styles.button}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.buttonText}> Get Started</Text>
              )}
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary100,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: height * 0.6,
    resizeMode: "cover",
  },
  textContainer: {
    paddingHorizontal: width * 0.05,
    paddingVertical: 20,
  },
  text: {
    fontFamily: "outfitBold",
    fontSize: width * 0.08,
    marginBottom: 10,
  },
  subText: {
    fontFamily: "outfitRegular",
    fontSize: width * 0.045,
    color: Colors.Secondary,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 14,
    backgroundColor: Colors.Primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "outfitBold",
    fontSize: width * 0.05,
  },
});
