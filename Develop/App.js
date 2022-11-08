import React from 'react';
import {StyleSheet, View} from 'react-native';

import BlurBackground from './dist';

const App = () => {
  return (
    <View style={styles.container}>
      <BlurBackground />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
