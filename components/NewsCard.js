import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const NewsCard = (props) =>{

    return (
        <View style={styles.items}>
            <View style={styles.itemsLeft}>
                <View style={styles.sqare}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles =  StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    sqare: {
        width: 24,
        height: 24,
        backgroundColor: 'lightblue',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5
    },
});

export default NewsCard;