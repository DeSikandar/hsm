import React from 'react';
import {View,StyleSheet,Text, ActivityIndicator, Button,ScrollView , TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';


export default class Assembling extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
        }
    }
    componentDidMount(){
        return fetch('https://highgrip.in/api/product')
        .then((response)=>response.json())
        .then((responseJson)=>{
        //    console.log(responseJson);
            this.setState({
                isLoading:false,
                dataSource:responseJson
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){

        const { isLoading,dataSource } = this.state;

        if(isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        }else{
            let button=dataSource.map((key,value)=>{
                return <View key={value} style={styles.item}> 

                    <ScrollView style={{width:"100%"}}>       
                  

                  <TouchableOpacity  key={value} style={styles.btn1}  onPress={()=>{this.props.navigation.push("Details", { name: key.product_name ,id:key.pid})}}>
                       <Text style={styles.btext}>{key.product_name}</Text>
                  </TouchableOpacity>
   
  
                  </ScrollView>
                </View>
                
            })

           return (
                <View style={styles.container}>
                    
                    {button}
                </View>
               )
        }

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff"
    },
    item:
    {
    width:"80%",
    padding:10, 
    marginLeft:10,
    alignContent:"center",   
    fontSize:15, 
   
    color:"#000", 
    borderRadius:8,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,  
        
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