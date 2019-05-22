//Import a library to help create component
import React from 'react';
import { View , AppRegistry } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'


// Create component
const App = () => (
    <View>
        <Header headerText={'Albums !'}/>
        <AlbumList/>
    </View>
);


//Render it to the device


AppRegistry.registerComponent('startReactNative', () => App);
