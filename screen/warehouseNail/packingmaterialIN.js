import React from "react";
import { View, Text,StyleSheet, Button,TouchableOpacity,} from "react-native";
  
export default class packingmaterialIN extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
        }
    }

    clickhander=()=>{
        console.log("Button Click");
    }

    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.head}>IN</Text>
                <View style={styles.btn}> 
                <TouchableOpacity  onPress={()=>this.props.navigation.push("outer")}
                 style={styles.btn1}>
                     <Text style={styles.btext}>Outer bag</Text>
                </TouchableOpacity>

                <TouchableOpacity   onPress={()=>this.props.navigation.push("inner")}
                 style={styles.btn1}>
                     <Text style={styles.btext}>Inner Bag</Text>
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

})