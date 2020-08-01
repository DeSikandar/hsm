import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet,Text,ScrollView, ActivityIndicator } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import axios from 'axios';

var Dispac =[];


export default class MainWarehouseOut extends Component {

  constructor(props){
    super(props);
    this.Submit = this.Submit.bind(this);
    this.state = {
      textInput : [ ],
      inputData : [],
      dataSource:[],
      sizes:[],
      brands:[],
      party_name:"",
      vehical_number:"",
      transport_id:"",
      
      DispacthItem:[],
      selectedproduct:"",
      selectedSize:"",
      selectedbrand:"",
      enteredbora:"",
      index:1,
      isLoading:true,
      selectLoadin:true,
    
    }
  }


  componentDidMount(){

    return fetch("https://highgrip.in/api/getCUrrent_id")
    .then((respo)=>respo.json())
    .then((resjo)=>{
      // console.log();
      this.setState({
        transport_id:resjo.id
      })
      fetch('https://highgrip.in/api/product')
    .then((response)=>response.json())
    .then((responseJson)=>{
    //    console.log(responseJson);
    let neass=[]
    responseJson.map(value=>{
        neass.push({"label":value.product_name,"value":value.product_name})
    });
    // console.log(neass);
    this.setState({
            isLoading:false,
            dataSource:neass
        })
       

    fetch('https://highgrip.in/api/getBrandWare')
    .then((responsess)=>responsess.json())
    .then((responseJss)=>{

        let brs=[]
        responseJss.map(br=>{
            brs.push({"label":br.brand,"value":br.brand})
        })
        this.setState({
            brands:brs
        })

       


    }).catch(e=>console.log(e));


    })
    .catch((error)=>{
        console.log(error);
    });


      // console.log(this.state.Transport_id);
    })
    .catch(e=>console.log(e));

    
     


    
  }




  
  getvalue=(values)=>{
    this.setState({isLoading:true})
    if(values){


      fetch(`https://highgrip.in/api/getsizebyname?name=${values}`)
        .then((response)=>response.json())
        .then((responseJson)=>{
        
        let neass=[]
        responseJson.map(value=>{
            neass.push({"label":value.size,"value":value.size})
        });
       
            this.setState({
              selectedproduct:values,
                sizes:neass,
                isLoading:false
            })
            // console.log(this.state.selectedproduct);
        }).catch(e=>{console.log(e);this.setState({isLoading:false})});
    }
     
  }


  Submit=()=>{
    this.setState({isLoading:true})
   
    if(this.state.party_name&& this.state.vehical_number && this.state.transport_id ){
    axios.post("https://highgrip.in/api/Dispatch",{data:this.state.DispacthItem,party_name:this.state.party_name,Vehical_number:this.state.vehical_number,transport_id:this.state.transport_id})
    .then(response=>{
       
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
    alert("please Provide details");
  }
  
  }

  addToSes=()=>{
      let array={"index":this.state.index,"product":this.state.selectedproduct,"size":this.state.selectedSize,"brand":this.state.selectedbrand,"bora":this.state.enteredbora};
   
    this.setState({
        index:this.state.index+1
    })

    Dispac.push(array);
    this.setState({

        DispacthItem:Dispac
    });
    
    this.setState({
      
      enteredbora:"",
      selectedproduct:null,
      selectedSize:null,
      selectedbrand:null,
      enteredbora:null,
      
    })
    

     }

  render(){

    if(this.state.isLoading){
     return( <View style={styles.container}>
        <ActivityIndicator />
      </View>)
    }else{

    
    //   console.log(this.state.DispacthItem);
      let _itemss=this.state.DispacthItem.map(value=>
        (
        <View style={styles.heading} key={value.index.toString()}>
        <Text style={styles.productvalue}>{value.product}</Text>
        <Text style={styles.brandvalue}>{value.brand}</Text>
        <Text style={styles.sizevalue}>{value.size}</Text>
        <Text style={styles.boravalue}>{value.bora}</Text>
    </View>
      )
      );
    return(
      
      <ScrollView style={styles.main}>
        <SafeAreaView style={styles.pdetails}>
              <View style={styles.pdet}>
                     
                     <Text style={{alignSelf:"flex-start",width:"30%",marginRight:10,marginTop:10}}>Party Name</Text>
                     <TextInput style={styles.evn}  placeholder="Party Name" value={this.state.party_name} onChangeText={(value)=>this.setState({party_name:value})} />     
              </View>
              <View style={{flexDirection:"row"}}>
                     
                     <Text style={{alignSelf:"flex-start",width:"30%",marginRight:10,marginTop:10}}>Enter Vehical No.</Text>
                     <TextInput style={styles.evn} placeholder="Vehical Number" value={this.state.vehical_number} onChangeText={(value)=>this.setState({vehical_number:value})}/>     
              </View>
              <View style={{flexDirection:"row"}}>
                     
                     <Text style={{alignSelf:"flex-start",width:"30%",marginRight:10,marginTop:10}}>Transport ID. {this.state.transport_id}</Text>
                     <TextInput style={styles.evn} placeholder="Transport Id /1,2,3"   value={this.state.transport_id.toString()}  onChangeText={(values)=>this.setState({transport_id:values})} />     
              </View>

            

          
            


            
          


<View style={styles.body}>
  <View style={{flexDirection:"row"}} >
    <View style={{borderWidth:1,alignSelf:"flex-start",width:"45%",height:"78%", marginRight:10,}}>
      <RNPickerSelect  onValueChange={(value) => this.getvalue(value)} items={this.state.dataSource} style={pickerStyle} value={this.state.selectedproduct}/>
    </View>

    <View style={{borderWidth:1,alignSelf:"flex-start",width:"45%",height:"78%", }}>
      <RNPickerSelect onValueChange={(value) => this.setState({selectedSize:value})} style={pickerStyle} items={this.state.sizes} value={this.state.selectedSize}/>
    </View>


</View>

<View  style={{flexDirection:"row"}} >

  <View style={{borderWidth:1,alignSelf:"flex-start",width:"45%",height:"78%", marginRight:10,}}>
    <RNPickerSelect onValueChange={(value) => this.setState({selectedbrand:value})} items={this.state.brands} style={pickerStyle} value={this.state.selectedbrand}/>
  </View>
  <TextInput style={{borderWidth:1,padding:10, alignSelf:"flex-start",width:"45%",height:"78%",}}
   placeholder="Enter Bag" onChangeText={(text) => this.setState({enteredbora:text})} value={this.state.enteredbora} />

</View>
 
    

    <View style={styles.addmore}>
      <Button title="Submit" color="#00CCCC" width="50%"  backgroundColor="#00CCCC"  title='Add More Item' onPress={() => this.addToSes(this.state.DispacthItem)} />
    </View>

    
    <View style={styles.submit1}>
      <Button color="#00CCCC" width="60%"  backgroundColor="#00CCCC"  title='Submit' onPress={() => this.Submit()}  />
    </View>

    </View> 
    <View style={styles.heading}>
                <Text style={styles.product}>Product</Text>                
                <Text style={styles.brand}>brand</Text>
                <Text style={styles.size}>Size</Text>
                <Text style={styles.bora}>Bora</Text>
            </View>
            <ScrollView>
            {_itemss}

            </ScrollView>


        </SafeAreaView>

        </ScrollView>

    )}
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
  main:{
     

  },
  container: {
    flex: 1,      
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'white', 
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
product:{
  padding:7,marginRight:10, width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
brand:{
  padding:7,width:"28%",marginRight:10, fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
size:{
  padding:7,width:"15%",marginRight:10, fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
bora:{
  padding:7,width:"17%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},

productvalue:{ 
  alignSelf:"flex-start",padding:10,width:"30%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
}, 
brandvalue:{ 
  alignSelf:"flex-start",padding:10,width:"30%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
}, 
sizevalue:{ 
  alignSelf:"flex-start",padding:10,width:"15%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
}, 
boravalue:{ 
  alignSelf:"flex-start",padding:10,width:"15%",color:"#000", textAlign:"center", borderWidth:1,
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
  width:"50%",
  marginTop:15,
  fontSize:25,     
  borderColor:"#FF0000",  
  color:"#000", 
  borderRadius:10,
  shadowOpacity: 0.25,
  shadowRadius: 3.84, 
  marginBottom:10,
},
submit1:{
  width:"50%",
  marginTop:15,
  fontSize:25,     
  borderColor:"#FF0000",  
  color:"#000", 
  borderRadius:10,
  shadowOpacity: 0.25,
  shadowRadius: 3.84, 
  marginBottom:20,
},
 
});

