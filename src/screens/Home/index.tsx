import React, { useState } from "react";
import { Text, View, Image, Dimensions, StatusBar } from "react-native";
import MenuButton from "../../components/MenuButton";
import { useHeaderHeight } from "@react-navigation/elements";



const Holerites: React.FC = () => {
  const screenHeight = Dimensions.get("screen").height;
  const windowHeight = Dimensions.get("window").height;
  const headerHeight = useHeaderHeight();
  const navbarHeight =
    screenHeight - windowHeight + StatusBar.currentHeight + headerHeight;

  return (
    <View className='flex justify-center items-center'>

      <MenuButton />
      <Image style={{
        height:
          Dimensions.get("window").height - navbarHeight,
        resizeMode: "stretch",
        width: Dimensions.get("window").width,
      }}
        source={{ uri: 'https://images.wondershare.com/pdfelement/forms-templates/medium/paystub.png' }}
      />
    </View>
  )
}

export default Holerites