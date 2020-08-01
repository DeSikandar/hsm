import React from "react";
import { View, Text, Button,StyleSheet,TouchableOpacity } from "react-native";

export default class WarehouseMainClamp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
            <Text  style={styles.head}>Ware House</Text>
            <View style={styles.btn}> 

                
                <TouchableOpacity style={styles.btn1}  onPress={()=>this.props.navigation.push("IN")} >
                    <Text  style={styles.btext}>IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn1}  title="OUT" onPress={()=>this.props.navigation.push("OUT")} >
                    <Text  style={styles.btext}>OUT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity  style={styles.btn1}  onPress={()=>this.props.navigation.push("STOCK")} >
                    <Text  style={styles.btext}>PRESENT STOCK</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
    },
    head:{ 
        fontSize:25,
        fontFamily:"serif",
        paddingBottom:20,
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,  
        fontWeight: '400',
    },
    btn:
    {        
        width:"80%",
        padding:5,
        fontSize:25,  
        borderColor:"#FF0000",  
        justifyContent:"center",
        textAlign:"center",  
        alignItems:"center",
    },
    btn1:{
        width:"80%",
        padding:8, 
        fontSize:30, 
        backgroundColor:"#00CCCC",
        borderColor:"#FF0000",  
        justifyContent:"center",
        textAlign:"center",  
        alignItems:"center",
        color:"#000",
        alignSelf:"center", 
        shadowColor: "#000",
        shadowOffset: {	width: 0,	height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  

        }, 
    btext:{
         
        fontSize:22,    
        justifyContent:"center",
        textAlign:"center",  
        alignItems:"center", 
        fontFamily:"serif",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5, 
        color:"#fff",  
        shadowColor: "#000", 
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        flex:1,
        width:"100%", 
        borderWidth:2,  
        borderWidth: 5,
        color:"#fff",
        padding:5, 
    }, 
})