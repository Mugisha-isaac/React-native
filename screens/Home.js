import { useState } from "react"
import { View,SafeAreaView,Text,FlatList } from "react-native-web";
import {COLORS,NFTData} from '../constants';
import {NFTCard,FocusedStatusBar,HomeHeader} from '../components'


const Home = ()=>{
    return(
       <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar background ={COLORS.primary} />

            <View style={{flex:1}}>
                <View style={{zIndex:0}}>
                      <FlatList
                        data={NFTData}
                        renderItem={({item})=><Text> {item.name}</Text>}
                        keyExtractor={(item)=>item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader /> }
                      />
                </View>
            </View>
       </SafeAreaView>
    )
}

export default Home