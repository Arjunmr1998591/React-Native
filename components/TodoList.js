import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../Colors';

export default TodoList = ({list}) => {
    return(
        <View styles={[styles.listContainer,{backgroundColor:list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginHorizontal:12,
        alignItems:"center",
        width:200
    }
})