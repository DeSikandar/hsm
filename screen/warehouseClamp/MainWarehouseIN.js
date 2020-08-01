import React from 'react';
import {Text,View,Picker,StyleSheet, ActivityIndicator, Button, TouchableOpacity} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { getData } from '../../App/storeas';
import RNPickerSelect from 'react-native-picker-select';




export default class MainWarehouseIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            isLoading:true,
            name:"",
            dataSource:[],
            inputData:[],
          
        }
    }
    componentDidMount(){
        
        getData("user").then((val)=>{
        this.setState({token:val.token,user_id:val.user_id});
        // this.setState({id:this.props.route.params.id});
        
        // setUserid(val.user_id)
        return fetch(`https://highgrip.in/api/GetthePorduct`)
        .then((response)=>response.json())
        .then((responseJson)=>{
           
        //    console.log(this.props.route);
            this.setState({
                isLoading:false,
                dataSource:responseJson
            })
            
        })
        .catch((error)=>{
            console.log(error);
        });

        }).catch(e=>console.log(e));
       

        
       
    }
   

    
    render(){
        
      const { isLoading,dataSource } = this.state;

        return(
                
            <View style={styles.container}> 
            <Text  style={styles.text} >Ware House Cover IN</Text>
            <ScrollView style={{width:"100%"}}>
                
           
                  

                <TouchableOpacity title="Inner Cover"  style={styles.btn1} onPress={()=>this.props.navigation.push("inner")}>
                     <Text style={styles.btext}>Inner Cover</Text>
                </TouchableOpacity>

                <TouchableOpacity  title="Out Cover" style={styles.btn1} onPress={()=>this.props.navigation.push("outer")}>
                     <Text style={styles.btext}>Out Cover</Text>
                </TouchableOpacity>

                <TouchableOpacity title="Master"  style={styles.btn1} onPress={()=>this.props.navigation.push("master")}>
                     <Text style={styles.btext}>Master</Text>
                </TouchableOpacity>

                <TouchableOpacity  title="Double Master"  style={styles.btn1} onPress={()=>this.props.navigation.push("masterDouble")}>
                     <Text style={styles.btext}>Double Master</Text>
                </TouchableOpacity>
                <TouchableOpacity    style={styles.btn1} onPress={()=>this.props.navigation.push("tap")}>
                     <Text style={styles.btext}>Tap</Text>
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
    bg:{
        justifyContent:"center",
        alignItems:"center",   
        flexDirection:"row", 
        fontSize:15,  
        textAlign:"center",
        
        
       
    },
    drd:{
      width:"100%",
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
      submit:{
        width:"80%", 
        marginTop:10,
        alignSelf:"center",
        fontSize:25,
        

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
