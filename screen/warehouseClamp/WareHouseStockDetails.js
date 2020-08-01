import React from 'react';
import {Text,View,Picker,StyleSheet, ActivityIndicator, Button} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { getData } from '../../App/storeas';
import RNPickerSelect from 'react-native-picker-select';




export default class WarehouseStockDetails extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            isLoading:true,
            name:"",
            dataSource:[],
            id:"",
            size:"",
            bag:"",
            perbg:"",
            user_id:"",
            token:"",
            inputData : [],
            tran:[],
            slec:[],
        }
    }
    componentDidMount(){
        
        getData("user").then((val)=>{
        this.setState({token:val.token,user_id:val.user_id});
        this.setState({id:this.props.route.params.id});
        
        // setUserid(val.user_id)
        return fetch(`https://highgrip.in/api/getStockWrea?id=${this.props.route.params.id}`)
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
            var _items = dataSource.map((key,value) => 
                {           
               return <View style={styles.head1} key={value.toString()}>
                    <Text style={styles.sizess}>{key.size}</Text>
                    <Text style={styles.qutss}>{parseFloat(key.Quantity).toFixed(2)}</Text>
                </View>
                });

            return(
                
            <View style={styles.container}> 
            {this.props.route.params.name && <Text  style={styles.text} >{this.props.route.params.name}</Text>}
            <ScrollView style={{width:"100%"}}>
                
            <View>
                <View style={styles.head}>
                    <Text style={styles.size}>Size</Text>
                    <Text style={styles.qut}>Quantity</Text>
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
        fontFamily:"serif",
        paddingBottom:20,
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,  
        fontWeight: '400',
      },
      submit:{
        width:"80%", 
        marginTop:10,
        alignSelf:"center",
      },
      head:{
        
        justifyContent:"center",
        alignItems:"center", 
        textAlign:"center",
        flexDirection:"row",
      },
      head1:{
        justifyContent:"center",
        alignItems:"center", 
        textAlign:"center",
        flexDirection:"row",
      },
      sizess:{   
        width:"45%", 
        marginLeft:10, 
        color:"#fff",
        padding:10,  
        fontSize:15,  
        color:"#000", 
        borderRadius:8,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignSelf:"center",     
        justifyContent:"center",
        alignItems:"center", 
        textAlign:"center",
        borderWidth:1,
        marginBottom:10,
    
    },
    qutss:{
        width:"45%", 
        marginLeft:10, 
        color:"#fff",
        padding:10,  
        fontSize:15,  
        color:"#000", 
        borderRadius:8,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,      
        justifyContent:"center",
        alignItems:"center", 
        textAlign:"center",
        borderWidth:1,
        marginBottom:10,
    },

size:{   
    width:"45%", 
    marginLeft:10, 
    color:"#fff",
    padding:10,  
    fontSize:15, 
    backgroundColor:"#00CCCC", 
    color:"#000", 
    borderRadius:8,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignSelf:"center",     
    justifyContent:"center",
    alignItems:"center", 
    textAlign:"center",
    marginBottom:10,

},
qut:{
    width:"45%", 
    marginLeft:10, 
    color:"#fff",
    padding:10,  
    fontSize:15, 
    backgroundColor:"#00CCCC", 
    color:"#000", 
    borderRadius:8,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,      
    justifyContent:"center",
    alignItems:"center", 
    textAlign:"center",
    marginBottom:10,
},
})
