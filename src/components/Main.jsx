import React from 'react'
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList';

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

export default Main;