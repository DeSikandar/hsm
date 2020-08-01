import React from "react";
import {StyleSheet, View, Text, Button,TouchableOpacity} from "react-native";


export default class CStockAs extends React.Component{
    constructor(props){
        super(props)
    }


handleNailsClick=()=>{
    this.props.navigation.push("Nailst");
//    this.props.navigation.push("Nailst");
}

handleComponetClick=()=>{
     this.props.navigation.push("Compolist");
}

    render(){
        return(

        <View style={styles.container}>
             

            <Text style={styles.head}>Stock Assembly</Text>
                <View style={styles.btn}> 
                
                <TouchableOpacity title="Componets" onPress={this.handleComponetClick} 
                 style={styles.btn1}>
                     <Text style={styles.btext}>Componets Stock</Text>
                </TouchableOpacity>  
               
                <TouchableOpacity title="Nails" onPress={this.handleNailsClick}
                 style={styles.btn1}>
                     <Text style={styles.btext}>Nails Stock</Text>
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
        alignContent:"center",
        alignItems:"center"
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
    text:{
        flex:1,
        width:"100%", 
        borderWidth:2,  
        borderWidth: 5,
        color:"#fff",
        padding:5, 
    }, 
    btn1:{
        width:"80%",
        padding:8,
        marginBottom:10,
        fontSize:25, 
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
         
        fontSize:18,     
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
})