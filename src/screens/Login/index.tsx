import React, { useState } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import Input from "../../components/Input";
import { CheckBox } from 'react-native-elements'
import Loading from "../../components/Loading";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>()
  const [senha, setSenha] = useState<string>()
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View className="flex flex-1 justify-center items-center p-6" >
      <Image className="w-48 h-16 mb-8" source={require('../../../assets/loginImage.png')} resizeMode="stretch" />
      <Input value={email} setValue={setEmail} placeholder="Entre com o seu E-mail" />
      <Input value={senha} setValue={setSenha} placeholder="Senha" password />
      <Text className="relative self-end mr-10 mb-4">Esqueceu sua senha?</Text>
      <Pressable className='w-80 h-14 bg-primary rounded-full flex justify-center items-center mb-5'>
        <Loading />
        {/* <Text className='text-white text-[15px]'>Entrar</Text> */}
      </Pressable>

      <Pressable className='w-80 h-14 bg-white rounded-full flex justify-center items-center border border-primary mb-2'>
        <Text className='text-primary text-[15px]'>Meu Primeiro Acesso</Text>
      </Pressable>

      <View>
        <CheckBox
          checked={isChecked}
          title={
            <Text>
              Aceito os termos e politicas de privacidade.
            </Text>
          }
          onPress={() => setIsChecked(!isChecked)}
          checkedColor="#00266F"
          containerStyle={{
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
          textStyle={{
            color: "#414141",
          }}
        />
      </View>


    </View>
  )
}

export default Login