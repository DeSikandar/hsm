import React from 'react';
import {Text,View,Picker,StyleSheet, ActivityIndicator, Button} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { getData } from '../../App/storeas';
import RNPickerSelect from 'react-native-picker-select';




export default class ComponentStockList extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            isLoading:true,
            name:"",
            dataSource:[],
            
        }
    }
    componentDidMount(){
        
        getData("user").then((val)=>{
        this.setState({token:val.token,user_id:val.user_id});
        this.setState({id:this.props.route.params.id});
        
        // setUserid(val.user_id)
        return fetch(`https://highgrip.in/api/getAssiblingStock?id=${this.props.route.params.id}`)
        .then((response)=>response.json())
        .then((responseJson)=>{
        //    console.log(responseJson);
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

        
    
        if(isLoading){
            return <View style={styles.container}>
                <ActivityIndicator />
            </View>
        }
        else{
            //get the things
            var _items = dataSource.map((key,value) => {
                return <View  key={value} style={styles.bg}>
                        <Text style={{borderWidth:1,alignSelf:"flex-start",padding:10,width:"30%", marginRight:10,textAlign:"center",}}>{key.size}</Text>
                        <Text style={{borderWidth:1,alignSelf:"center",padding:10,width:"30%", marginRight:10,textAlign:"center",}}>{parseFloat(key.bag).toFixed(2)}</Text>
                        <Text style={{borderWidth:1,padding:10,width:"30%",textAlign:"center",}} >{parseFloat(key.Quantity).toFixed(2)}</Text>
                   
                      
                </View>
            });

            return(
                
            <View style={styles.container}> 
            {this.props.route.params.name && <Text  style={styles.text} >{this.props.route.params.name}</Text>}
            <ScrollView style={{width:"100%"}}>
                
            <View>
                <View style={styles.bg}>
                    <Text style={styles.size}>Size</Text>
                    <Text style={styles.bag}>BAG</Text>
                    <Text style={styles.tweight}>Twieght</Text>
                   

                </View>
            {_items}
            </View>
                 
                
                </ScrollView>
            </View>
            
          )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        textAlign:"center",backgroundColor:"#ffff",

    },
    bg:{
        justifyContent:"center",
        alignItems:"center",   
        flexDirection:"row", 
        fontSize:15, 
        marginBottom:5,
        textAlign:"center",backgroundColor:"#ffff",
        
       
    },
    
      text:{
        fontSize:25,
        fontFamily:"serif",
        paddingBottom:20,
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,  
        fontWeight: '400',
      },
      size:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    bag:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },  
    tweight:{
         padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },
      submit:{
        width:"80%", 
        marginTop:10,
        alignSelf:"center",
      },
})
