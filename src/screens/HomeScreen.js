import { View, Text, SafeAreaView, Platform, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    AdjustmentsIcon,
    SearchIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <SafeAreaView style={styles.droidSafeArea}>
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-sm">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={25} color="#00CCBB" />
            </View>

            {/* Search */}

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-3  bg-gray-200 p-2">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder='Restaurants and Cuisine'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsIcon color="#00CCBB" />
            </View>

            {/* Body */}

            <ScrollView>
                {/* Categories */}

                <Categories />


                {/* Featured Rows */}
            </ScrollView>

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        backgroundColor: "#ffffff",

    }
})

export default HomeScreen
