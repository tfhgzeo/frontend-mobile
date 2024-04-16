import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



const camisa = [
  { label: 'Camisa', value: '0' },
  { label: 'Camisa esta Ok', value: '1' },
  { label: 'Camisa esta Ruim', value: '2' },
  { label: 'Camisa - Não tem', value: '3' },
];
const calca = [
  { label: 'calca', value: '0' },
  { label: 'calca esta Ok', value: '1' },
  { label: 'calca esta Ruim', value: '2' },
  { label: 'calca - Não tem', value: '3' },
];
const bota = [
  { label: 'bota', value: '0' },
  { label: 'bota esta Ok', value: '1' },
  { label: 'bota esta Ruim', value: '2' },
  { label: 'bota - Não tem', value: '3' },
];
const protetor = [
  { label: 'protetor', value: '0' },
  { label: 'protetor esta Ok', value: '1' },
  { label: 'protetor esta Ruim', value: '2' },
  { label: 'protetor - Não tem', value: '3' },
];
const luva = [
  { label: 'luva', value: '0' },
  { label: 'luva esta Ok', value: '1' },
  { label: 'luva esta Ruim', value: '2' },
  { label: 'luva - Não tem', value: '3' },
];
const alicate = [
  { label: 'alicate', value: '0' },
  { label: 'alicate esta Ok', value: '1' },
  { label: 'alicate esta Ruim', value: '2' },
  { label: 'alicate - Não tem', value: '3' },
];
const capa = [
  { label: 'capa', value: '0' },
  { label: 'capa esta Ok', value: '1' },
  { label: 'capa esta Ruim', value: '2' },
  { label: 'capa - Não tem', value: '3' },
];
const espelho = [
  { label: 'espelho', value: '0' },
  { label: 'espelho esta Ok', value: '1' },
  { label: 'espelho esta Ruim', value: '2' },
  { label: 'espelho - Não tem', value: '3' },
];
const impressora = [
  { label: 'impressora', value: '0' },
  { label: 'impressora esta Ok', value: '1' },
  { label: 'impressora esta Ruim', value: '2' },
  { label: 'impressora - Não tem', value: '3' },
];

const smartphone = [
  { label: 'smartphone', value: '0' },
  { label: 'smartphone esta Ok', value: '1' },
  { label: 'smartphone esta Ruim', value: '2' },
  { label: 'smartphone - Não tem', value: '3' },
];
const chave = [
  { label: 'chave', value: '0' },
  { label: 'chave esta Ok', value: '1' },
  { label: 'chave esta Ruim', value: '2' },
  { label: 'chave - Não tem', value: '3' },
];
const bolca = [
  { label: 'bolca', value: '0' },
  { label: 'bolca esta Ok', value: '1' },
  { label: 'bolca esta Ruim', value: '2' },
  { label: 'bolca - Não tem', value: '3' },
];

const DropDownChekcList = ({epi}) => {
  const [value, setValue] = useState('0');
  const [data, setData] = useState()
    const renderItem = item => {
    if (value === '0') {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="black"
              name="user"
              size={20}
            />
          )}
        </View>
      );
    }
    if (value === '1') {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="green"
              name="checkcircle"
              size={20}
            />
          )}
        </View>
      );
    }
    if (value === '2') {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="orange"
              name="warning"
              size={20}
            />
          )}
        </View>
      );
    }
    if (value === '3') {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="red"
              name="closecircle"
              size={20}
            />
          )}
        </View>
      );
    }
  };

  
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={epi === "camisa"? camisa:epi ==='calca'?calca:epi ==='bota'?bota:epi ==='espelho'?espelho:
      epi ==='impressora'?impressora:epi ==='smartphone'?smartphone:epi ==='protetor'?protetor:epi ==='luva'?luva:
      epi ==='alicate'?alicate:epi ==='capa'?capa:epi ==='chave'?chave:epi ==='bolca'?bolca:[]}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        value === '1' ? <AntDesign style={styles.icon} color="green" name="checkcircle" size={20} /> :
          value === '2' ? <AntDesign style={styles.icon} color="orange" name="warning" size={20} /> : value === '3' ?
            <AntDesign style={styles.icon} color="red" name="closecircle" size={20} /> : <AntDesign style={styles.icon} color="black" name="user" size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropDownChekcList;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    marginBottom: 5,
    backgroundColor: 'white',
    width: 300,
    borderRadius: 3,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});