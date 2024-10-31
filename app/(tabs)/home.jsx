import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header  */}
      <Header />
      {/* Slider  */}
      <Slider />
      {/* Categoriess */}

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
