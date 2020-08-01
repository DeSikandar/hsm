import React from "react";
import {StyleSheet,View,Text,Button,TouchableOpacity} from "react-native";
import { AuthContext } from "./context";
import {getsingle} from './storeas';


// export default function 

export default function Profile({ navigation }){
    const { signOut } = React.useContext(AuthContext);
    getsingle('department').then((val)=>console.log(val) )
    return (
      <View style={styles.container}>
           <View style={styles.btn}> 
                
                <TouchableOpacity title="Drawer" onPress={() => navigation.toggleDrawer()} style={styles.btn1}>
                     <Text style={styles.btext}>Drawer</Text>
                </TouchableOpacity>  
               
                <TouchableOpacity ttitle="Sign Out" onPress={() => signOut()} style={styles.btn1}>
                     <Text style={styles.btext}>Sign Out</Text>
                </TouchableOpacity>
            </View>

      </View>
    );
  };


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
    btn1:{
        width:"80%",
        padding:5,
        marginBottom:10,
        fontSize:25, 
        backgroundColor:"#00CCCC",
        borderColor:"#FF0000",  
        justifyContent:"center",
        textAlign:"center",  
        alignItems:"center",
        color:"#000", 
        borderRadius:10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        },
    text:{
        flex:1,
        width:"100%", 
        borderWidth:2,  
        borderWidth: 5,
        color:"#fff",
        padding:5, 
    },
    btext:{
        
        padding:2,
        fontSize:20,    
        justifyContent:"center",
        textAlign:"center",  
        alignItems:"center",
        color:"#fff",
    },
      
  })