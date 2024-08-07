import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";

const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[84vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w--[380px] w-full h-[300px]"
          />

          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Discover Endless Possibilities with {""}
              <Text className="text-secondary-200">Spacious</Text>
            </Text>

            {/* <Image
              source={images.path}
              resizeMode="contain"
              className="w-[136px] h-[15px] absolute -bottom-2 right-50"
            /> */}
          </View>

          <Text className="text-sm font-pregular text-gray-100 text-center mt-7">
            Where creativity meets innovation: embark on a journey of limitless
            exploration
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
