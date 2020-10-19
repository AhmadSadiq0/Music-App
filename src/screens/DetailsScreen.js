import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator, Image, Modal } from 'react-native';
import { HEADING_TEXT, COLOR_RED, COLOR_WHITE } from '../res/strings';
import { PLAY_BUTTON_IMG } from '../res/drawable'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalWebView from '../../components/ModalWebView';

const DetailsScreen = (props) => {
    const { track } = props.route.params;
    const [isModalOpen, setisModalOpen] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>{HEADING_TEXT}</Text>
            <View style={styles.card}>
                <Text style={{
                    ...styles.heading,
                    color: COLOR_WHITE
                }}>
                    {track.name}
                </Text>
                <View style={styles.row}>
                    <Text style={styles.text}>Listeners: {track.listeners}</Text>
                    <Text style={styles.text}>Duration: {track.duration}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Artist name: {track.artist.name}</Text>
                </View>
                <View style={styles.playButton}>
                    <TouchableOpacity onPress={() => toggleModal(setisModalOpen, isModalOpen)}>
                        <Image style={PLAY_BUTTON_IMG} source={PLAY_BUTTON_IMG} />
                    </TouchableOpacity>
                </View>
                <ModalWebView
                    visible={isModalOpen}
                    url={track.url}
                    toggleModal={()=>toggleModal(setisModalOpen,isModalOpen)}
                />
            </View>

        </SafeAreaView>
    )
}

const toggleModal = (setisModalOpen, isModalOpen) => {
    setisModalOpen(!isModalOpen);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    heading: {
        alignSelf: 'center',
        color: COLOR_RED,
        fontSize: 35
    }, card: {
        height: '50%',
        backgroundColor: COLOR_RED,
        padding: 10,
    },
    text: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        fontWeight: 'bold'
    }, img: {
        width: 250,
        height: 250
    }, playButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }, row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default DetailsScreen;