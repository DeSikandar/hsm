import React from "react";
import { View ,StyleSheet,Text,} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class ZincStock extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
             <View style={styles.container}>
                    
             <Text style={styles.head}>Zinc Out</Text>
             <View style={styles.btn}> 
 
             <TouchableOpacity  onPress={()=>this.props.navigation.push("nailsstock")} style={styles.btn1}>
                 <Text style={styles.btext}>Nails stock</Text>
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
        // alignContent:"center",
        alignItems:"center",
        backgroundColor:"#ffff"
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
        width:180,
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