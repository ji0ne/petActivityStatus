import React from "react";
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import {Alert, Button, Text, View} from 'react-native';
import {useUserContext} from '../hooks/useUserContext';



function MainMenu({navigation}: {navigation: NavigationProp<ParamListBase>} )
{
    return (
        <View>
            <Button
            title = "테스트 시작"
            onPress={() => navigation.navigate('ActivityLogPage')}
            />
        </View>
    );
}

export default MainMenu;