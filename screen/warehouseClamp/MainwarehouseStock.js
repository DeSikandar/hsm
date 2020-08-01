import React from 'react';
import { View, Text,StyleSheet, Button, ActivityIndicator,TouchableOpacity,ScrollView } from 'react-native';

export default class MainWarehouseStock extends React.Component{
    constructor(props){
        super(props)
        
        
    }

   
    render(){

       

            return(
           

                    <View style={styles.container}> 
                    <Text  style={styles.text} >Ware House Stock</Text>
                    <ScrollView style={{width:"100%"}}>                 
                        
                    <TouchableOpacity   title="Components" style={styles.btn1} onPress={()=>this.props.navigation.push("Product")}>
                            <Text style={styles.btext}>Components</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity  title="Inner Cover"    style={styles.btn1} onPress={()=>this.props.navigation.push("innerstock")}>
                            <Text style={styles.btext}>Inner Cover</Text>
                        </TouchableOpacity>

                        <TouchableOpacity   title="Outer Cover"  style={styles.btn1} onPress={()=>this.props.navigation.push("outerstock")}>
                            <Text style={styles.btext}>Out Cover</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  title="Master Cover"   style={styles.btn1} onPress={()=>this.props.navigation.push("masterstock")}>
                            <Text style={styles.btext}>Master Cover</Text>
                        </TouchableOpacity>

                        <TouchableOpacity   title="Double Master" style={styles.btn1} onPress={()=>this.props.navigation.push("masterDoublestock")}>
                            <Text style={styles.btext}>Double Master</Text>
                        </TouchableOpacity>



                        <TouchableOpacity  style={styles.btn1} onPress={()=>this.props.navigation.push("tapstock")}>
                            <Text style={styles.btext}>TAP STOCK</Text>
                        </TouchableOpacity>

                        </ScrollView>
                    </View>
            )
        }
    }



    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            textAlign:"center",
    
        },  
        text:{
            fontSize:25,    
            justifyContent:"center",
            textAlign:"center",  
            alignItems:"center", 
            fontFamily:"serif",
            textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
            marginBottom:20, 
            marginTop:20,
            color:"#000",  
            shadowColor: "#000", 
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,  
            fontWeight: '400',
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