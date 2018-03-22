import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";

const PicItem = props => (
    <View style={styles.item}>
        <Image resizeMode="contain" source={{uri: props.itemImage}} style={styles.image} />
        <Text style={styles.itemText}>{props.itemTitle}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        marginBottom: 10,
        padding: 10
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    itemText: {
        width: '80%'
    }
});

export default PicItem;