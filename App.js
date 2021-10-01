import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Task from './components/NewsCard';
// import Menu from './components/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from './screens/About';

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <>
    <View style={styles.container}>
      {/* Todays News */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Trending News</Text>

        <View style={styles.items}>
          {/* This is where the news will go */}
          <Task text={'News 1'}/>
          <Task text={'News 2'}/>

        </View>
      </View>

       {/* Implement pull down to refresh but placing a button for now since Im not sure how to implement it */}
      <Button style={styles.refreshButton} title="Temp Refresh Button"></Button>

    </View>
    // {/* <Menu/> */}
    // {/* <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={About} />
    //     <Drawer.Screen name="About" component={About} />
    //   </Drawer.Navigator>
    // </NavigationContainer> */}
    // {/* </> */}

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
taskWrapper: {
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
items: {
  marginTop: 30,
},
refreshButton: {
  height: 4,
}
});
