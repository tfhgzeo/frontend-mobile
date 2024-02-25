import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";


const MenuButton: React.FC = () => {
  const [filter,setFilter] = useState("mes3");

    return (
        <View className=" flex flex-row justify-around items-center w-11/12 h-12 mt-6 ">
              <TouchableOpacity 
              className={` ${filter =="mes1"?"bg-secondary":""} p-3 rounded-md justify-center items-center`}
              onPress={() =>{setFilter("mes1")}}
              >
                <Text className={`${filter =="mes1"?"text-primary":"text-text"} font-bold`}>OUT</Text>
                <Text className={`${filter =="mes1"?"text-primary":"text-text"}`}>2024</Text>
              
              </TouchableOpacity>
              <TouchableOpacity 
              className={` ${filter =="mes2"?"bg-secondary":""} p-3 rounded-md justify-center items-center`} 
              onPress={() =>{setFilter("mes2")}}
              >
                <Text className={`${filter =="mes2"?"text-primary":"text-text"} font-bold`}>NOV</Text>
                <Text className={`${filter =="mes2"?"text-primary":"text-text"}`}>2024</Text>
              
              </TouchableOpacity>

              <TouchableOpacity 
              className={` ${filter =="mes3"?"bg-secondary":""} p-3 rounded-md justify-center items-center`}
              onPress={() =>{setFilter("mes3")}}
              >
                <Text className={`${filter =="mes3"?"text-primary":"text-text"} font-bold`}>DEZ</Text>
                <Text className={`${filter =="mes3"?"text-primary":"text-text"}`}>2024</Text>
              
              </TouchableOpacity>

        </View>
    );
};

export default MenuButton;