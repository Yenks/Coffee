import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

const DetailitemScreen = ({ navigation }) => {
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F8F8",
      }}
    >
      <View style={{ flex: 1 }}>
        {/* Main 1 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detail</Text>
          <Octicons name="heart" size={24} color="black" style={{ marginRight: 16 }} />
        </View>

        {/* Main 2 */}
        <View
          style={{
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{
              width: 300,
              height: 210,
              borderRadius: 15,
            }}
          />
        </View>

        {/* Main 3 */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Cappuccino</Text>
            <Text style={{ fontSize: 14, color: "#888", marginTop: 5 }}>with Chocolate</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <AntDesign name="star" size={24} color="gold" />
              <Text style={{ fontSize: 18, marginLeft: 5, fontWeight: "600" }}>4.8</Text>
              <Text style={{ fontSize: 12, color: "#888", marginLeft: 5 }}>(230)</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                backgroundColor: "#D3D3D3",
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons name="food" size={30} color="black" />
            </View>
            <View
              style={{
                backgroundColor: "#D3D3D3",
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons name="food-takeout-box" size={30} color="black" />
            </View>
          </View>
        </View>

        {/* Divider */}
        <View
          style={{
            height: 1,
            backgroundColor: "#C4C4C4",
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        />

        {/* Main 5 - Description */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Description</Text>
          <Text
            style={{
              color: "#888",
              marginTop: 5,
              lineHeight: 22,
            }}
          >
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25ml
            of espresso coffee and 85 ml of fresh milk the fo..{" "}
            <Text style={{ color: "#FF6347" }}>Read More</Text>
          </Text>
        </View>

        {/* Main 6 - Size Selection */}
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Size</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {["S", "M", "L"].map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedSize(size)}
                style={{
                  borderWidth: 2,
                  borderRadius: 10,
                  width: 100,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: selectedSize === size ? "orange" : "gray",
                  backgroundColor: selectedSize === size ? "#ffe4b5" : "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: selectedSize === size ? "orange" : "black",
                  }}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Main 7 - Price and Buy Now */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            backgroundColor: "#FFF",
            marginTop: 30,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 30,
            }}
          >
            <Text style={{ color: "#888", fontSize: 16 }}>Price</Text>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>$ 4.53</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF6347",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 40,
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 18 }}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailitemScreen;
