import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface MenuButtonProps {

}

const MenuButton: React.FC = () => {
    return (
        <View className=" flex flex-row justify-around items-center w-11/12 h-12 mt-6 ">
              <TouchableOpacity className=" p-3 justify-center items-center"  >
                <Text className="text-text font-bold">OUT</Text>
                <Text className="text-text">2024</Text>
              
              </TouchableOpacity>
              <TouchableOpacity className=" bg-secondary p-3 rounded-md justify-center items-center" >
                <Text className="text-primary font-bold">NOV</Text>
                <Text className="text-primary">2024</Text>
              
              </TouchableOpacity>

              <TouchableOpacity className=" p-3 justify-center items-center " >
                <Text className="text-text font-bold">DEZ</Text>
                <Text className="text-text">2024</Text>
              
              </TouchableOpacity>

        </View>
    );
};

export default MenuButton;