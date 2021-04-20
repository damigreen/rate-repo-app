import React from 'react'
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'purple',
    color: '#fff'
  },
});

const BigBlueText = () => {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Text style={{ color: 'blue', fontSize: 24, fontWeight: '700' }}>
        Big Blue Text
      </Text>
    </View>
  )
}

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <RepositoryList />
      <BigBlueText />
    </View>
  )
}

export default Main;