import React from 'react';
import {View,StyleSheet,Text, Button,Modal,TouchableHighlight,Alert,ActivityIndicator, Picker} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';
import { getData } from '../App/storeas';
import { render } from 'react-dom';
import RNPickerSelect from 'react-native-picker-select';




export default class Min extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
            brand:[],
            inputData : [],
            brands:[],
            driver:"",
        }
    }

    componentDidMount(){
       

       return fetch('https://www.highgrip.in/api/get_material_clamp')
        .then((response)=>response.json())
        .then((responseJson)=>{
        //    console.log(responseJson);
            this.setState({
                isLoading:false,
                dataSource:responseJson
            })
            let neass=[];
           return fetch('https://www.highgrip.in/api/getbrand')
            .then((response)=>response.json())
            .then((responseJson)=>{
            //    console.log(responseJson);
            responseJson.map(value=>{
                neass.push({"label":value.brand,"value":value.brand})
            });
                this.setState({
                    isLoading:false,
                    brand:neass
                })
            })
            .catch((error)=>{
                console.log(error);
            });

        })
        .catch((error)=>{
            console.log(error);
        });
    }

    getvalue=(value,id)=>{
        // this.refs.picker._reactInternalInstance._renderedComponent._instance.setState({ initialSelectedIndex: id, id });
        this.refs.picke
        let brandsarr=this.state.brands;
        let chck=false;
        if(brandsarr.length!==0){
            brandsarr.forEach(element=>{
                if(element.id==id){
                    element.value=value;
                    chck=true;
                }
            });
        }
        if(chck){
            this.setState({
                brands:brandsarr
            });
        }
        else{
            brandsarr.push({'value':value,'id':id});
            this.setState({
                brands:brandsarr
            })
        }
    }


    addValues = (text, index) => {
        let dataArray = this.state.inputData;
        let checkBool = false;
        if (dataArray.length !== 0){
          dataArray.forEach(element => {
            if (element.index === index ){
              element.text = text;
              checkBool = true;
            }
          });
        }
        if (checkBool){
        this.setState({
          inputData: dataArray
        });
      }
      else {
        dataArray.push({'text':text,'index':index});
        this.setState({
          inputData: dataArray
        });
      }
      }

    

      clickhandler=()=>{
          this.setState({
              isLoading:true
          })

          if(this.state.inputData&&this.state.inputData.length){
            if(this.state.brands&&this.state.brands.length){}
          axios.post("https://www.highgrip.in/api/stockarin",{bag:this.state.inputData,brand:this.state.brands,vehical:this.state.driver})
          .then((data)=>{
            //   console.log(data.data);
              if(data.data.sucess){
                    this.setState({isLoading:false})
                alert("Data Added Success");
                  this.props.navigation.goBack();

              }
              
          }).catch(e=>console.log(e));
        }else{
            alert("Please Provide Details")
        }
      }
    
    

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
                
            )}else{

               
    
                        
        var _items = this.state.dataSource.map((n) => {
                return <View key={n.id} style={styles.mul}>
                        <TextInput  value={n.material} style={{borderWidth:1,alignSelf:"flex-start",padding:10,width:"27%", marginRight:10,}}/>
                        <View key={n.id} style={{borderWidth:1,alignSelf:"flex-start",width:"30%", marginRight:10,}}>
                            
                          
                           
                            <RNPickerSelect   style={pickerStyle} 
                            onValueChange={(value) =>this.getvalue(value,n.id) }
                            items={this.state.brand}
                        />
                        
                        </View>
                        <TextInput style={{borderWidth:1,alignSelf:"flex-start",padding:10,width:"17%", marginRight:10,}}placeholder="En. Bag"  onChangeText={(text) => this.addValues(text, n.id)} />
                        <TextInput value={n.perbag} style={{borderWidth:1,alignSelf:"flex-start",padding:10,width:"13%",}}/>
                        
                                
                            
                    
                    </View>
            })

       

    return(
       
        
        <View style={styles.container}>
                <Text style={styles.heading}>STOCK IN</Text>
                    <View style={{flexDirection:"row"}}>
                     
                    <Text style={{alignSelf:"flex-start",marginRight:10,marginTop:10}}>Enter Vehical No.</Text>
                    <TextInput style={styles.evn} placeholder="Enter vehicle number" onChangeText={(val)=>this.setState({driver:val})} />     
                    </View>
        <View style={{width:"100%"}} >

            <View style={styles.mul}>
            <Text style={styles.material} >Materail</Text>
            <Text style={styles.brand}>Brand</Text>
            <Text style={styles.bag}>BAG</Text>
            <Text style={styles.kg} >KG</Text>
            </View>
                {_items}
        </View>
            
            <View style={styles.submit}>
            <Button title="Submit" color="#00CCCC" width="100%"  backgroundColor="#00CCCC"  onPress={this.clickhandler} />
            </View>
            </View>                  
    
    )
            }

        
}
}




const pickerStyle = {
    inputIOS: {
        color: 'black',
        paddingHorizontal: 10,
        
        borderRadius: 5,
    },
    placeholder: {
        color: 'black',
      },
    inputAndroid: {
        color: 'black',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
  };
  	
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        width:"100%"
        

    },
    heading:{
        fontSize:25,
        fontFamily:"serif",
        paddingBottom:20,
        justifyContent:"center",
        alignSelf:"center",
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,  
        fontWeight: '400',
    },
    mul:{ 
        justifyContent:"center",
        alignItems:"center",
        
       width:"100%",
        flexDirection:"row", 
        fontSize:15, 
        marginBottom:5,
        textAlign:"center",
       
       
    }, 
    dropdown1:{
       
        borderWidth:1,   
        fontSize:13, 
        backgroundColor:"#ddd",
        width:"20%",
        borderRadius:5,
        marginBottom:5,
        textAlign:"center",
      

    },
    entbag:{
        borderWidth:1,  
        fontSize:13, 
        width:"20%",
        marginBottom:5,
        textAlign:"center",
        marginLeft:6,
    },
    pr:{    
        borderWidth:1,  
        fontSize:15, 
        width:"15%",
        marginBottom:5,
        textAlign:"center",

    },
    evn:{   
        padding:5,
        textAlign:"left",
        justifyContent:'flex-end', 
        backgroundColor:"#fff",
        alignSelf:"flex-end",
        fontSize:15, 
        marginBottom:20,
        fontWeight: "bold",
        borderRadius:10,   
        borderWidth:1,                 
    
    },
    submit:{
        width:"80%",
        marginTop:15,
        fontSize:25,     
        borderColor:"#FF0000",  
        color:"#000", 
        borderRadius:10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
    },

    material:{
        alignSelf:"flex-start",padding:7,width:"27%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    brand:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },  
    bag:{
         padding:7,width:"17%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginBottom:10,marginRight:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },
     
    kg:{
        padding:7,width:"13%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                       textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                       borderRadius:3,
                       shadowColor: "#000",
                       shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
   },
   
   
})
