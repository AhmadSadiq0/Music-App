
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Modal, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { CLOSE_BUTTON_IMG } from '../src/res/drawable'

const WebViewModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            transparent
        >
            <View style={styles.cotainer}>
                <TouchableOpacity onPress={() => props.toggleModal()}>
                    <Image style={styles.image} source={CLOSE_BUTTON_IMG} />
                </TouchableOpacity>
                <View style={styles.modalContainer}>
                    <WebView
                        javaScriptEnabled={true}
                        //For the Cache
                        domStorageEnabled={true}
                        style={styles.container}
                        source={{ uri: props.url }} />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, modalContainer: {
        margin: 20,
        backgroundColor: '#000000',
        height: '100%'

    }, image: {
        width: 40,
        height: 40
    }
})

export default WebViewModal;