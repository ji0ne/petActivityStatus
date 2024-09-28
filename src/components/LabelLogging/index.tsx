import { StyleSheet, Text, View } from "react-native";

export function LabelLogging()
{
    return(
        <View style = {styles.labelLoggingSection}>
            <Text>LavelLogging : 실시간 라벨링되고 있는 데이터를 보는 섹션</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    labelLoggingSection : {
        width : '100%',
        height : '50%',
        backgroundColor : 'blue'
    }
})