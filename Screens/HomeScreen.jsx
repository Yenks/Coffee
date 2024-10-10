import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const HomeScreen = ({ navigation }) => {
  const [pressedButton, setPressedButton] = useState(null); // Track which button is pressed

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {/* Header Section */}
        <SafeAreaView
          style={{
            backgroundColor: "#1C1C1C",
            height: 220,
            paddingLeft: 24,
            paddingTop: 16,
            bottom: 40,
          }}
        >
          <View style={{ height: 160 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              {/* Location Info */}
              <View style={{top:60, left:27,}}>
                <Text style={{ color: "gray" }}>Location</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Bilzen, Tanjungbalai
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="white"
                  />
                </View>
              </View>
              {/* Profile Image */}
              <View>
                <Image
                  style={{ borderRadius: 19, height: 60, width: 60, top:45, right:30, }}
                  source={{
                    uri: "https://images.pexels.com/photos/25185199/pexels-photo-25185199/free-photo-of-smiling-woman-with-yellow-wildflowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                  }}
                />
              </View>
            </View>

            {/* Search Bar */}
            <View
              style={{
                backgroundColor: "gray",
                width: 320,
                height: 56,
                borderRadius: 24,
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 8,
                justifyContent: "center",
                top:50,
                left:27,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign name="search1" size={30} color="white" />
                  <Text
                    style={{ color: "lightgray", fontSize: 16, marginLeft: 8 }}
                  >
                    Search coffee
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "orange",
                    width: 36,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <FontAwesome5 name="sliders-h" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>

        {/* Coffee Category Buttons */}
        <View style={{ backgroundColor: "#F8F8F8", height: "100%" }}>
          <View style={{ marginTop: 5 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row", gap: 10, marginLeft: 4 }}>
                {["Cappuccino", "Macchiato", "Latte", "Espresso"].map(
                  (item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPressIn={() => setPressedButton(index)}
                      onPressOut={() => setPressedButton(null)}
                      style={{
                        padding: 10,
                        borderRadius: 15,
                        width: 120,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          pressedButton === index ? "orange" : "white",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          color: pressedButton === index ? "white" : "black",
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </ScrollView>
          </View>

          {/* Coffee Item List */}
          <View
            style={{
              marginTop: 50,
              marginBottom: 350,
              marginLeft: 12,
            }}
          >
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
              <View style={{ flexDirection: "column", gap: 16 }}>
                {[...Array(3)].map((_, rowIndex) => (
                  <View
                    key={rowIndex}
                    style={{ flexDirection: "row", gap: 16 }}
                  >
                    {[...Array(2)].map((_, colIndex) => (
                      <View
                        key={colIndex}
                        style={{
                          backgroundColor: "white",
                          height: 240,
                          width: 160,
                          padding: 16,
                          borderRadius: 12,
                        }}
                      >
                        <Image
                          style={{
                            borderRadius: 19,
                            height: 130,
                            width: 140,
                            marginBottom: 16,
                          }}
                          source={{
                            uri: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=600",
                          }}
                        />
                        <View style={{ marginBottom: 8 }}>
                          <Text style={{ fontSize: 18, fontWeight: "600" }}>
                            Cappuccino
                          </Text>
                          <Text style={{ fontSize: 14, color: "gray" }}>
                            with Chocolate
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 18, fontWeight: "600" }}>
                            $ 4.53
                          </Text>
                          <View
                            style={{
                              backgroundColor: "orange",
                              height: 32,
                              width: 32,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 8,
                            }}
                          >
                            <Text style={{ color: "white", fontSize: 18 }}>
                              +
                            </Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
