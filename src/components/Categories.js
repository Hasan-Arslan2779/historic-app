import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categoriesData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Categories() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleMain}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 10,
        }}
      >
        {categoriesData.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  titleMain: {
    fontSize: wp(4),
    fontWeight: "bold",
    color: "gray",
  },
  subTitle: {
    fontSize: wp(4),
    color: "#219ebc",
  },
  card: {
    alignItems: "center",
  },
  cardImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(5),
  },
  cardTitle: {
    fontSize: wp(3),
    marginTop: 5,
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
