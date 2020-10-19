import React from 'react';
import { FlatList, View, Image, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLOR_RED } from '../src/res/strings';
const plainTextList = (props) => {
    return (
        <FlatList
            vertical
            data={props.data}
            renderItem={({ item: rowData, index }) => {
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.innerContainer}
                            disabled={props.loading}
                            onPress={() => props.onItemSelected(rowData)}>

                            <Text style={styles.text}>{rowData.name}</Text>

                        </TouchableOpacity>
                    </View>
                );
            }}
            keyExtractor={(item, index) => index.toString()}

        />
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 10, marginRight: 10, borderRadius: 10
    },
    innerContainer: {
        padding: 10, marginTop: 5,
        backgroundColor: COLOR_RED,
        borderRadius: 10
    },
    heading: {
        alignSelf: 'center',
        color: COLOR_RED,
        fontSize: 35
    }, text: {
        fontSize: 15, color: '#ffffff'
    }
})

export default plainTextList;
