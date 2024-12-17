import React from 'react';
import { View, StyleSheet } from 'react-native';
// Lottie
import LottieView from 'lottie-react-native';

export const DefaultLoader = () => {
  return (
    <View style={styles.loading}>
      <LottieView
        source={require('../animations/default-loader.json')}
        autoPlay
        loop
        style={{ width: 70, height: 70 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});

export default DefaultLoader;
