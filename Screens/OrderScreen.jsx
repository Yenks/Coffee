import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const OrderScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Delivery");

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#F1F5F9",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <View style={{ paddingTop: 7 }}></View>

        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 3,
            marginBottom: 20,
            marginLeft: 30,
            marginRight: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Delivery")}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, marginLeft: 90 }}>Order</Text>
        </View>

        {/* Delivery and Pickup Options */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#D1D5DB",
            height: 56,
            marginHorizontal: 6,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setSelectedOption("Delivery")}
            style={{
              backgroundColor:
                selectedOption === "Delivery" ? "orange" : "transparent",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 10,
              marginVertical: 3,
              marginLeft: 8,
            }}
          >
            <Text
              style={{
                color: selectedOption === "Delivery" ? "white" : "black",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Delivery
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedOption("Pickup")}
            style={{
              backgroundColor:
                selectedOption === "Pickup" ? "orange" : "transparent",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 10,
              marginVertical: 3,
              marginLeft: 70,
            }}
          >
            <Text
              style={{
                color: selectedOption === "Pickup" ? "white" : "black",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Address */}
        <View style={{ marginLeft: 8, marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Delivery Address
          </Text>
          <Text style={{ fontSize: 18, marginTop: 4, fontWeight: "500" }}>
            JI. Kpg Sutoyo
          </Text>
          <Text style={{ color: "#6B7280", marginTop: 8, fontWeight: "300" }}>
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai
          </Text>
        </View>

        {/* Edit Address and Add Note */}
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            marginTop: 16,
            marginLeft: 8,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderColor: "#D1D5DB",
              borderWidth: 1,
              borderRadius: 24,
              width: 130,
              height: 40,
              alignItems: "center",
              paddingHorizontal: 8,
            }}
          >
            <MaterialCommunityIcons
              name="notebook-edit-outline"
              size={20}
              color="black"
            />
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: "300" }}>
              Edit Address
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderColor: "#D1D5DB",
              borderWidth: 1,
              borderRadius: 24,
              width: 120,
              height: 40,
              alignItems: "center",
              paddingHorizontal: 8,
            }}
          >
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={24}
              color="black"
            />
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: "300" }}>
              Add Note
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#D1D5DB",
            height: 1,
            marginVertical: 16,
            marginHorizontal: 6,
          }}
        />

        {/* Item Details */}
        <View
          style={{ flexDirection: "row", marginTop: 16, marginHorizontal: 6 }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{ borderRadius: 19, width: 70, height: 70 }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 18 }}>Cappuccino</Text>
            <Text
              style={{ color: "#9CA3AF", marginTop: 8, fontWeight: "300" }}
            >
              with Chocolate
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: "auto",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: "#D1D5DB",
                borderWidth: 1,
                borderRadius: 50,
                width: 32,
                height: 32,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, color: "#D1D5DB" }}>-</Text>
            </TouchableOpacity>
            <Text
              style={{ fontSize: 18, fontWeight: "500", marginHorizontal: 12 }}
            >
              1
            </Text>
            <TouchableOpacity
              style={{
                borderColor: "#D1D5DB",
                borderWidth: 1,
                borderRadius: 50,
                width: 32,
                height: 32,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#D1D5DB",
            height: 1,
            marginVertical: 16,
            marginHorizontal: 6,
          }}
        />

        {/* Discount Information */}
        <View
          style={{
            borderColor: "#D1D5DB",
            borderWidth: 1,
            borderRadius: 12,
            height: 64,
            width: "90%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <MaterialCommunityIcons
            name="brightness-percent"
            size={24}
            color="tomato"
            style={{ marginLeft: 16 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 12 }}>
            1 Discount is applied
          </Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="black"
            style={{ marginLeft: "auto", marginRight: 16 }}
          />
        </View>

        {/* Payment Summary */}
        <View style={{ marginTop: 16, marginLeft: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Payment Summary
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 8, marginLeft: 8, gap: 40 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "300" }}>Price</Text>
            <Text style={{ fontSize: 18, fontWeight: "300" }}>Delivery Fee</Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>$ 4.53</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 18,
                  marginRight: 12,
                }}
              >
                $ 2.0
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>$ 1.0</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#D1D5DB",
            height: 1,
            marginVertical: 16,
            marginHorizontal: 6,
          }}
        />

        <View style={{ flexDirection: "row", marginTop: 8, marginLeft: 8 }}>
          <Text style={{ fontSize: 18 }}>Total Payment</Text>
          <Text style={{ fontSize: 18, marginLeft: "auto" }}>$ 5.53</Text>
        </View>

        {/* Order Button */}
        <View
          style={{
            borderRadius: 24,
            backgroundColor: "#FFFFFF",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginLeft: 8,
              marginBottom: 16,
              top: 20,
              gap: 1,
            }}
          >
            <AntDesign name="camerao" size={24} color="tomato" />
            <View
              style={{
                backgroundColor: "#D1D5DB",
                borderRadius: 12,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 12,
                width: 120,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#F97316",
                  color: "white",
                  borderRadius: 12,
                  paddingHorizontal: 8,
                }}
              >
                Cash
              </Text>
              <Text style={{ fontSize: 18, marginLeft: 8 }}>$ 5.55</Text>
            </View>
            <View
              style={{
                backgroundColor: "#4B5563",
                borderRadius: 50,
                height: 32,
                width: 32,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 12,
                left: 130,
              }}
            >
              <View>
                <Text style={{ color: "white", fontSize: 24, bottom: 7 }}>
                  ...
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#F97316",
              borderRadius: 12,
              height: 64,
              width: "80%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              top: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
