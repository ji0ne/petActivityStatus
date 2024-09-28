import React from 'react';
import { StyleSheet, Text, View } from "react-native";


export function ActivityData()
{
    return (
        <View>
            <Text>저장된 활동데이터를 일자별로 열람하는 페이지</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : 'blue'
    }
})