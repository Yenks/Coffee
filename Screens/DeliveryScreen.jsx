import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapView from 'react-native-maps';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from '@expo/vector-icons/Feather';

const DeliveryScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState('Delivery');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {/* Map Section */}
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <MapView
                        style={{ width: '100%', height: 600 }}
                        initialRegion={{
                            latitude: -6.200000, // Example coordinates (update with real data)
                            longitude: 106.816666,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    />

                    {/* Back Button */}
                    <TouchableOpacity 
                        style={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            backgroundColor: 'white',
                            borderRadius: 24,
                            padding: 8,
                            zIndex: 1,
                        }} 
                        onPress={() => navigation.navigate('Detail')}
                    >
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Delivery Information */}
                <View style={{
                    padding: 16,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    position: 'relative',
                    top: 30,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                        10 minutes left
                    </Text>
                    <Text style={{ textAlign: 'center', color: '#6B7280' }}>
                        Delivery to <Text style={{ fontWeight: 'bold', color: 'black' }}>Jl. Kpg Sutoyo</Text>
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                        <View style={{ backgroundColor: '#4CAF50', height: 6, borderRadius: 10, width: '20%' }} />
                        <View style={{ backgroundColor: '#4CAF50', height: 6, borderRadius: 10, width: '20%' }} />
                        <View style={{ backgroundColor: '#4CAF50', height: 6, borderRadius: 10, width: '20%' }} />
                        <View style={{ backgroundColor: '#D1D5DB', height: 6, borderRadius: 10, width: '20%' }} />
                    </View>

                    {/* Delivery Details */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 16,
                        borderWidth: 1,
                        borderColor: '#D1D5DB',
                        borderRadius: 12,
                        height: 100,
                        alignItems: 'center',
                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 12,
                            height: 56,
                            width: 56,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#D1D5DB',
                        }}>
                            <MaterialIcons name="delivery-dining" size={50} color="tomato" />
                        </View>
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ fontWeight: 'bold' }}>Delivered your order</Text>
                            <Text style={{ color: '#6B7280', fontSize: 12 }}>We deliver goods to you in</Text>
                            <Text style={{ color: '#6B7280', fontSize: 12 }}>the shortest possible time</Text>
                        </View>
                    </View>

                    {/* Courier Info */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 16,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Replace with actual image URL
                                style={{ width: 48, height: 48, borderRadius: 12 }}
                            />
                            <View>
                                <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold' }}>Johan Hawn</Text>
                                <Text style={{ marginLeft: 16, color: '#6B7280', fontSize: 12 }}>Personal Courier</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{
                                borderWidth: 1,
                                borderColor: '#D1D5DB',
                                borderRadius: 12,
                                height: 40,
                                width: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Feather name="phone-call" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DeliveryScreen;
