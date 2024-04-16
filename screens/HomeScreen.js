import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { AntDesign } from "@expo/vector-icons";
import Categories from "../src/components/Categories";
import SortCategories from "../src/components/SortCategories";
import Destinations from "../src/components/Destinations";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        {/* Avatar */}
        <View style={styles.avatarMain}>
          <Text style={styles.avatarTitle}> Explore Places</Text>
          <TouchableOpacity>
            <Image
              style={styles.avatarImage}
              source={require("../assets/images/avatar.png")}
            />
          </TouchableOpacity>
        </View>
        {/* SearchBar */}
        <View style={styles.searchBar}>
          <View style={styles.searchBarMain}>
            <AntDesign name="search1" size={20} color="black" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"gray"}
              style={styles.searchBarText}
            />
          </View>
        </View>
        {/* Categories */}
        <View style={styles.categories}>
          <Categories />
        </View>
        {/* Sort Categories */}
        <View style={styles.sortCategories}>
          <SortCategories />
        </View>
        {/* Destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatarMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  avatarTitle: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "#000",
  },
  avatarImage: {
    width: hp(8),
    height: hp(8),
  },
  searchBar: {
    marginBottom: 16,
    marginHorizontal: 10,
  },
  searchBarMain: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2f2f2",
    padding: 16,
    borderRadius: 30,
    paddingLeft: 24,
    gap: 5,
  },
  searchBarText: {
    flex: 1,
    fontSize: wp(4),
    marginBottom: 4,
    paddingLeft: 4,
    letterSpacing: 0.5,
  },
  categories: {
    marginBottom: 10,
  },
  sortCategories: {
    marginBottom: 10,
  },
});
