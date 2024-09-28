import React from "react";
import { NativeStackNavigationOptions, NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import MainMenu from "./MainMenu";
import { ActivityLogPage } from "./ActivityLogPage";
import { ActivityData } from "../components/ActivityData";
import { ActivityDataPage } from "./ActivityDataPage";

export type RootStackParamList ={
    ActivityLog : undefined;
    ActivityData : undefined;
}

interface PageConfig
{
    endPoint : keyof RootStackParamList;
    component : React.ComponentType<any>;
    option? : NativeStackNavigationOptions;
}

const data : ReadonlyArray<PageConfig> = Object.freeze([
    {
        endPoint : "MainMenu",
        component : MainMenu,
        option : {}
    },
    {
        endPoint : "ActivityLogPage",
        component : ActivityLogPage,
        option : {}
    },
    {
        endPoint : "ActivityDataPage",
        component : ActivityDataPage,
        option : {}
    }
])

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Pages = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                {
                    data.map(({endPoint, component, option}, index) => {
                        return (
                            <Stack.Screen/>
                        )
                    })
                }
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default {}