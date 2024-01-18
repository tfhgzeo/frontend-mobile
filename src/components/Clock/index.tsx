import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

const Clock = () => {
  const [pointer1, setPointer1] = useState(0);
  const [pointer2, setPointer2] = useState(0);

  const handleMove = (pointer, setPointer, gestureState) => {
    const angle = Math.atan2(
      gestureState.moveY - 150,
      gestureState.moveX - 150
    );

    const degree = (angle * 180) / Math.PI;

    const adjustedDegree = (degree + 450) % 360; // Adjusting to start from 0

    const newValue = Math.floor(adjustedDegree / 40); // Dividing 360 into 9 sections

    setPointer(newValue);
  };

  const panResponder1 = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) =>
      handleMove(pointer1, setPointer1, gestureState),
  });

  const panResponder2 = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) =>
      handleMove(pointer2, setPointer2, gestureState),
  });

  return (
    <View style={styles.container}>
      <Svg height="300" width="300">
        <Circle cx="150" cy="150" r="140" stroke="black" strokeWidth="4" />
        <Line
          x1="150"
          y1="150"
          x2="150"
          y2="10"
          stroke="black"
          strokeWidth="4"
        />
        <Line
          x1="150"
          y1="150"
          x2="150"
          y2="290"
          stroke="black"
          strokeWidth="4"
        />
        <Line
          x1="150"
          y1="150"
          x2="290"
          y2="150"
          stroke="black"
          strokeWidth="4"
        />
        <Line
          x1="150"
          y1="150"
          x2="10"
          y2="150"
          stroke="black"
          strokeWidth="4"
        />
        <Line
          x1="150"
          y1="150"
          x2="150"
          y2="70"
          stroke="red"
          strokeWidth="8"
          transform={`rotate(${ pointer1 * 40} 150 150)`}
          {...panResponder1.panHandlers}
        />
        <Line
          x1="150"
          y1="150"
          x2="150"
          y2="110"
          stroke="blue"
          strokeWidth="8"
          transform={`rotate(${pointer2 * 40} 150 150)`}
          {...panResponder2.panHandlers}
        />
      </Svg>
      <Text>Pointer 1: {pointer1}</Text>
      <Text>Pointer 2: {pointer2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Clock;