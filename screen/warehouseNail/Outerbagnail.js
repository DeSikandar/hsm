import React, { Component } from 'react';
import { View, Text,TextInput, ActivityIndicator ,StyleSheet,ScrollView,SafeAreaView,Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios';

export default class Outerbagnail extends Component {
  constructor(props) {
    super(props);
    this.Submit = this.Submit.bind(this);
    this.state = {
        code:"",
        selectedbrand:"",
        enteredbora:"",
        brands:"",
        isLoading:true,
    };
  }


  componentDidMount(){
    return fetch('https://highgrip.in/api/getBrandpackingnail')
    .then((responsess)=>responsess.json())
    .then((responseJss)=>{

        let brs=[]
        responseJss.map(br=>{
            brs.push({"label":br.brand_name,"value":br.id})
        })
        this.setState({
            brands:brs,
            isLoading:false
        })

       


    }).catch(e=>console.log(e))
  }

  Submit=()=>{
    this.setState({isLoading:true})
   
    if(this.state.code&& this.state.selectedbrand && this.state.enteredbora ){

    //   console.log(this.state.DispacthItem)  
        axios.post("https://highgrip.in/api/InserIntoouter",{ptype:this.state.code,brand:this.state.selectedbrand,cous:this.state.enteredbora})
        .then(response=>{
            // console.log(response.data);
          if(response.data.sucess){
            this.setState({isLoading:false})
            alert("Data Added Success");
            this.props.navigation.goBack();
    
          }else{
            this.setState({isLoading:false})
            alert("Error is Not Proper");
          }
          
        })
        .catch(e=>{console.log(e);this.setState({isLoading:false})});

    }else{
      this.setState({isLoading:false})
        alert("Please Provide Details")
    }
  
  }



  render() {
      if(this.state.isLoading){
          return <View>
              <ActivityIndicator />
          </View>
      }else{

return(
    
<View style={styles.container}>

    <View style={styles.body}>
    <Text style={styles.head}>Outer Bag</Text>
                <View style={styles.bg}>
                    <Text style={styles.matrial}>Matrial</Text>
                    <Text style={styles.brand}>Brand</Text>
                    <Text style={styles.bag}>Bag</Text> 

                </View>
    <View style={{flexDirection:"row"}} >
        <View style={{borderWidth:1,alignSelf:"flex-start",width:"33%",height:"78%", marginRight:10,}}>
        <RNPickerSelect style={pickerStyle}
                onValueChange={(value) => this.setState({code:value})}
                items={[
                    { label: 'Nails', value: '048' },
                    { label: 'Screw', value: '018' },
                    
                ]}
                value={this.state.code}
            />
        </View>
        <View style={{borderWidth:1,alignSelf:"flex-start",width:"33%",height:"78%", marginRight:10,}}>
            <RNPickerSelect style={pickerStyle} onValueChange={(value) => this.setState({selectedbrand:value})} items={this.state.brands} value={this.state.selectedbrand}/>
        </View>

        
        <TextInput style={{borderWidth:1,padding:10, alignSelf:"flex-start",width:"28%",height:"78%",}}
   placeholder="Enter count" onChangeText={(text) => this.setState({enteredbora:text})} value={this.state.enteredbora} />


    </View>

 
    


    
    <View style={styles.submit}>
      <Button  color="#00CCCC" width="60%"  backgroundColor="#00CCCC"  title='Submit' onPress={() => this.Submit()}  />
    </View>

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
        justifyContent:"center", 
    },
    heading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    bg:{
      justifyContent:"center",
      alignItems:"center",   
      flexDirection:"row", 
      fontSize:15, 
      marginBottom:5,
      textAlign:"center",
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
    pdetails:{
      
      flex: 1,      
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: 'white',
      marginBottom:0,
    },
    pdet:{
      flexDirection:"row",
      
    },
    evn:{   
      padding:5, 
      backgroundColor:"#fff", 
      fontSize:15, 
      marginBottom:10,
      fontWeight: "bold",
      borderRadius:10,   
      borderWidth:1,    
      width:"60%",             
  
  },
  matrial:{
    padding:7,marginRight:10, width:"33%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                   textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                   borderRadius:3,
                   shadowColor: "#000",
                   shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  },
  brand:{
    padding:7,width:"33%",marginRight:10, fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                   textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                   borderRadius:3,
                   shadowColor: "#000",
                   shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  },
  bag:{
    padding:7,width:"28%",fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                   textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                   borderRadius:3,
                   shadowColor: "#000",
                   shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  },
 
  
  inmatrial:{ 
    alignSelf:"flex-start",padding:10,width:"28%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
  }, 
  inbrand:{ 
    alignSelf:"flex-start",padding:10,width:"35%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
  }, 
  inbag:{ 
    alignSelf:"flex-start",padding:10,width:"28%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
  }, 
  
  addmore:{
    width:"95%",
          fontSize:20, 
          marginTop:10,
          backgroundColor:"#fff", 
          color:"#fff",
          alignSelf:"center",        
          textShadowColor:"#000", 
          textShadowColor: 'black', 
          textShadowOffset: { width: 1, height: 2 },
          textShadowRadius: 5,
          fontFamily:"serif", textShadowColor:"#000", textShadowColor: 'black', 
           textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 3, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",
          textAlign:"center",
          borderRadius:3,
          shadowColor: "#000",
          shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,
          shadowRadius: 3.84,elevation: 5,
          
  
  },
  submit:{
    width:"80%",
    fontSize:20, 
    marginTop:10,
    padding:10, 
    color:"#fff",
    alignSelf:"center",         
  },
    
})