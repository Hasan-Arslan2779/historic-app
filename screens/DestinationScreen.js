import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function DestinationScreen({ route }) {
  const navigation = useNavigation();
  const item = route.params;
  const [isFavourite, toggleFavourite] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode="cover" style={styles.image} />
      <StatusBar style="light" />
      {/* Back View */}
      <SafeAreaView
        style={styles.navigationIcons}
        contentContainerStyle={{ marginTop: 40 }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backView}
        >
          <Ionicons size={24} name="arrow-back" color={"white"} />
        </TouchableOpacity>
        {/* Favorite View */}
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={styles.favoriteView}
        >
          <AntDesign
            name="heart"
            size={24}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Tittle */}
      <ScrollView
        contentContainerStyle={{
          gap: 20,
        }}
        style={styles.descriptionView}
      >
        <View style={styles.titleView}>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <Text style={styles.description}>{item.longDescription}</Text>
        <View style={styles.detailView}>
          {/* Duration View */}
          <View style={styles.durationView}>
            <AntDesign name="clockcircle" size={24} color={"orange"} />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.duration}</Text>
              <Text style={styles.detailsParagraf}>Duration</Text>
            </View>
          </View>
          {/* Distance View */}

          <View style={styles.durationView}>
            <AntDesign name="clockcircle" size={24} color={"orange"} />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.distance}</Text>
              <Text style={styles.detailsParagraf}>Distance</Text>
            </View>
          </View>
          {/* Weather View */}

          <View style={styles.durationView}>
            <AntDesign name="clockcircle" size={24} color={"orange"} />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.weather}</Text>
              <Text style={styles.detailsParagraf}>Weather</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: wp(100),
    height: hp(55),
  },
  navigationIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(100),
    position: "absolute",
    top: 40,
  },
  backView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    marginTop: 20,
    borderRadius: 50,
    marginLeft: 16,
  },
  favoriteView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginTop: 20,
    marginRight: 20,
  },
  descriptionView: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    marginTop: -56,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: wp(7),
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: wp(4),
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  detailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
  },
  durationView: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleDetails: {
    paddingTop: 4,
    alignItems: "center",
    gap: 4,
  },
  detailsHeading: {
    fontSize: wp(4.5),
    fontWeight: "bold",
  },
  detailsParagraf: {
    letterSpacing: 0.5,
    color: "#000",
  },
});
