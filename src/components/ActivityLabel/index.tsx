import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export function ActivityLabel()
{
    return(
        <View style = {styles.activityLabelSection}>
            <Text>ActivityLabel: 활동상태를 라벨링하는 버튼 섹션</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    activityLabelSection : {
        width : '100%',
        height : '50%' , 
        backgroundColor : 'white'
    },
})