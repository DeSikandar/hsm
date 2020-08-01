import React from "react";
import { View, Text,StyleSheet,TouchableOpacity } from "react-native";



export default class MainWiredStroe extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.head}>Wired Store</Text>
                
                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.btn1} onPress={()=>this.props.navigation.push("nailin")}>
                        <Text style={styles.btext}>IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} onPress={()=>this.props.navigation.push("wiredout")}>
                        <Text style={styles.btext}>OUT</Text>
                    </TouchableOpacity>
                    {/* wirestock */}
                    <TouchableOpacity style={styles.btn1} onPress={()=>this.props.navigation.push("wirestock")} >
                        <Text style={styles.btext}>STOCK</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        justifyContent:"center",
        alignItems:"center"
    },btncontainer:{
        width:"100%"

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
        marginTop:20,
    },
    btn1:{
        width:"50%",
        padding:8,
        marginBottom:20,
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