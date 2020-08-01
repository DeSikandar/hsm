import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet,Text,ScrollView, ActivityIndicator } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import axios from 'axios';

var Dispac =[];


export default class Dispatchitem extends Component {

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
      selectedSize:[],
      selectedbrand:[],
      enteredbora:"",
      index:1,
      isLoading:true,
      selectLoadin:true,
      code:"",
      size_id:"",
    
    }
  }


  componentDidMount(){

    return fetch("https://highgrip.in/api/getCUrrent_idfornails")
    .then((respo)=>respo.json())
    .then((resjo)=>{
      // console.log();
      this.setState({
        transport_id:resjo.id,
        
      })
     

    fetch('https://highgrip.in/api/getBrandpackingnail')
    .then((responsess)=>responsess.json())
    .then((responseJss)=>{

        let brs=[]
        responseJss.map(br=>{
            brs.push({"label":br.brand_name,"value":[br.brand_name,br.id]})
        })
        this.setState({
            brands:brs,
            isLoading:false
        })

       


    }).catch(e=>console.log(e));


    

      
    })
    .catch(e=>console.log(e));

    
     


    
  }




  
  getvalue=(values)=>{
    if(values){
        
       this.setState({
           isLoading:true
       })


      fetch(`https://highgrip.in/api/returSizens?code=${values}`)
        .then((response)=>response.json())
        .then((responseJson)=>{
        //    console.log(responseJson) 
            
            if(values=="048"){
            console.log("code nails");
                let neass=[]
        responseJson.map(value=>{
            neass.push({"label":value.thiknesh+"x"+value.length,"value":[value.thiknesh+"x"+value.length,value.tid,value.length,value.perbox]})
        });
       
            this.setState({
              selectedproduct:"nails",
                sizes:neass,
                code:values,
                isLoading:false
            })

        }
            if(values=="018"){
                
        let neass=[]
        responseJson.map(value=>{
            neass.push({"label":value.thiknesh+"x"+value.length,"value":[value.thiknesh+"x"+value.length,value.tid,value.length,value.perbox]})
        });
       
            this.setState({
              selectedproduct:"screw",
                sizes:neass,
                code:values,
                isLoading:false

            })
            }
        
        
        
        }).catch(e=>{console.log(e); this.setState({isLoading:false})});
    }
     
  }


  Submit=()=>{
   
    this.setState({isLoading:true})
    if(this.state.party_name&& this.state.vehical_number && this.state.transport_id ){

    //   console.log(this.state.DispacthItem)  
        axios.post("https://highgrip.in/api/nailDispatch",{data:this.state.DispacthItem,party_name:this.state.party_name,Vehical_number:this.state.vehical_number,transport_id:this.state.transport_id})
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
        .catch(e=>{console.log(e); this.setState({isLoading:false})});

    }else{
      this.setState({isLoading:false})
        alert("Please Provide Details")
    }
  
  }

  addToSes=()=>{
      if(this.state.code && this.state.selectedSize && this.state.selectedbrand && this.state.enteredbora){
        let array={"index":this.state.index,"code":this.state.code,"product":this.state.selectedproduct,"size":this.state.selectedSize[0],"thiknesh_id":this.state.selectedSize[1],"length":this.state.selectedSize[2],"perbox":this.state.selectedSize[3],"brand":this.state.selectedbrand[0],"brid":this.state.selectedbrand[1],"bora":this.state.enteredbora};
        
   
        this.setState({
        index:this.state.index+1
    })

    Dispac.push(array);
    this.setState({

        DispacthItem:Dispac
    });
    
    this.setState({
      
      enteredbora:"",
      code:null,
      size_id:"",
      selectedproduct:null,
      selectedSize:null,
      selectedbrand:null,
      enteredbora:null,
      
    })
        
      }else{
          alert("Enter the details")
      }
      

     }

  render(){

    if(this.state.isLoading){
     return( <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
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
    <RNPickerSelect  style={pickerStyle}
            onValueChange={(value) => this.getvalue(value)}
            items={[
                { label: 'Nails', value: '048' },
                { label: 'Screw', value: '018' },
                
            ]}
            value={this.state.code}
        />
    </View>

    <View style={{borderWidth:1,alignSelf:"flex-start",width:"45%",height:"78%", }}>
      <RNPickerSelect  style={pickerStyle}   onValueChange={(value) => this.setState({selectedSize:value})} items={this.state.sizes} value={this.state.selectedSize}/>
    </View>


</View>

<View  style={{flexDirection:"row"}} >

  <View style={{borderWidth:1,alignSelf:"flex-start",width:"45%",height:"78%", marginRight:10,}}>
    <RNPickerSelect  style={pickerStyle} onValueChange={(value) => this.setState({selectedbrand:value})} items={this.state.brands} value={this.state.selectedbrand}/>
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
    color:"#000",
  },
  heading:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",color:"#000",
      flexDirection:"row"
  },
  body:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",color:"#000",
      flexDirection:"column"
  },
  pdetails:{
    
    flex: 1,      
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'white',color:"#000",
    marginBottom:0,
  },
  pdet:{
    flexDirection:"row",color:"#000",
    
  },
  evn:{   
    padding:5, 
    backgroundColor:"#fff", color:"#000",
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
                 borderRadius:3,color:"#000",
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
brand:{
  padding:7,width:"28%",marginRight:10, fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,color:"#000",
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
size:{
  padding:7,width:"15%",marginRight:10, fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,color:"#000",
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
bora:{
  padding:7,width:"17%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                 textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                 borderRadius:3,color:"#000",
                 shadowColor: "#000",
                 shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},

productvalue:{ 
  alignSelf:"flex-start",padding:10,width:"30%",marginRight:10, color:"#000", textAlign:"center",color:"#000", borderWidth:1,
}, 
brandvalue:{ 
  alignSelf:"flex-start",padding:10,width:"30%",marginRight:10, color:"#000", textAlign:"center",color:"#000", borderWidth:1,
}, 
sizevalue:{ 
  alignSelf:"flex-start",padding:10,width:"15%",marginRight:10, color:"#000", textAlign:"center",color:"#000", borderWidth:1,
}, 
boravalue:{ 
  alignSelf:"flex-start",padding:10,width:"15%",color:"#000", textAlign:"center",color:"#000", borderWidth:1,
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
        textShadowRadius: 5,color:"#000",
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


