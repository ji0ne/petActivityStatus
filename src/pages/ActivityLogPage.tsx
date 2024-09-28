import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityLabel } from '../components/ActivityLabel';
import { LabelLogging } from '../components/LabelLogging';

export function ActivityLogPage()
{
    return (
        <View>
            <ActivityLabel/>
            <LabelLogging/>
        </View>
    );
}
