import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const Slider = () => {
  const [sliderList, setSliderList] = useState([
    {
      imageUrl:
        "https://media.istockphoto.com/id/1437973980/vector/adopt-me-poster-with-cute-dog-in-cardboard-box-colorful-vector-banner-template-with-cartoon.jpg?s=612x612&w=0&k=20&c=_CQIMEkDOgjraO0fxbvhJpYvgOUa4x-6MIepEe-9BRs=",
    },
    {
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2027a2169601075.644fdce4171a6.jpg",
    },
    {
      imageUrl: "https://content.wepik.com/statics/155964133/preview-page0.jpg",
    },
  ]);
  return (
    <FlatList
      data={sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Image source={{ uri: item?.imageUrl }} style={styles.sliderImage} />
      )}
    ></FlatList>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("screen").width * 0.9,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});
