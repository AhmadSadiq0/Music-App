import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getTopTracksFromServerLastFm } from '../service';
import { HEADING_TEXT, COLOR_RED, ERR_MSG_TEXT } from '../res/strings';
import List from '../../components/List';

const MainScreen = (props) => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopTracksFromServerLastFm((success, responseJson) => {
            if (success) {
                setTracks(responseJson.tracks.track);
                setLoading(false);
            } else {
                alert(ERR_MSG_TEXT)
            }
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>{HEADING_TEXT}</Text>
            <ActivityIndicator
                size="large"
                animating={true}
                style={{
                    ...styles.activityIndicatorStyle,
                    opacity: loading ? 1.0 : 0.0,
                    margin: 5
                }}
                color={COLOR_RED} />
            <List
                data={tracks}
                loading={loading}
                onItemSelected={(item) => onItemSelected(props, item)}
            />
        </SafeAreaView>
    )
}

//Click listener for list
const onItemSelected = (props, track) => {
    props.navigation.navigate('details', { track })
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
    },
    activityIndicatorStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    }
})

export default MainScreen;