import React from "react";
import { View, Text, ActivityIndicator,StyleSheet,ScrollView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import RNPickerSelect from 'react-native-picker-select';

export default class NailWiredIn extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            thik:[],
            isLoading:true,
            inputData:[],
            slec:[],
            inputData1:[],
            vehical_no:"",
            
        }
    }
    componentDidMount(){
        this._isMounted = true;
        return fetch("https://highgrip.in/api/getNailthik")
        .then((response)=>response.json())
        .then(responsejson=>{
            // console.log(responsejson);
            this.setState({
                thik:responsejson,
                isLoading:false
            })
        })
        .catch(e=>console.log(e));
    }
    
    componentWillUnmount() {
        this._isMounted = false;
      }


      getvalue=(value,id)=>{
        // this.refs.picker._reactInternalInstance._renderedComponent._instance.setState({ initialSelectedIndex: id, id });
      
        let brandsarr=this.state.slec;
        let chck=false;
        if(brandsarr.length!==0){
            brandsarr.forEach(element=>{
                if(element.size==id){
                    element.value=value;
                    chck=true;
                }
            });
        }
        if(chck){
          let nesds=[]
          brandsarr.map(valu=>{
              if(valu.value!==null){
                              nesds.push({'value':valu.value,'size':valu.size})
                      }
              })
          this.setState({
          slec: nesds
          });
        }
        else{
            brandsarr.push({'value':value,'size':id});
            this.setState({
                slec:brandsarr
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
            let neds=[]
            dataArray.map(valu=>{
                if(valu.text!==""){
                            neds.push({'text':valu.text,'index':valu.index})
                    }
            })
        this.setState({
          inputData: neds
        });
      }
      else {
        dataArray.push({'text':text,'index':index});
        this.setState({
          inputData: dataArray
        });
      }
      }



      addValues1 = (text, index) => {
        let dataArray = this.state.inputData1;
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
            let neds=[]
            dataArray.map(valu=>{
                if(valu.text!==""){
                            neds.push({'text':valu.text,'index':valu.index})
                    }
            })
        this.setState({
          inputData1: neds
        });
      }
      else {
        dataArray.push({'text':text,'index':index});
        this.setState({
          inputData1: dataArray
        });
      }
      }






      clickhandler(){
          this.setState({isLoading:true})
          if(this.state.vehical_no){

            if(this.state.inputData&&this.state.inputData.length){
  
                axios.post("https://highgrip.in/api/insertNailThik",{data:this.state.inputData,type:this.state.slec,coil:this.state.inputData1,vehical:this.state.vehical_no})
                .then((response)=>{
                  //   console.log(response.data);
                  // this.setState({isLoading:false})
                  //  
                  if(response.data.sucess){
                      this.setState({isLoading:false})
                      alert("Data Added Success");
                      this.props.navigation.goBack();
          
                    }else{
                      this.setState({isLoading:false})
                      alert("Error is Not Proper");
                    }
                }).catch(e=>{console.log(e);this.setState({isLoading:false})})
            }else{
              this.setState({isLoading:false})
                alert("please Enter details");
            }
          }else{
            alert("Please Enter vehical No.");
          }

      }


    render(){
        if(this.state.isLoading){
            return <View style={styles.container}>
                <ActivityIndicator />
            </View>
        }
        else{
            let _itm=this.state.thik.map(val=>(
                <View key={val.id} style={styles.input} >
                    <Text style={styles.insize}>{val.thiknesh}</Text>
                    <View style={{borderWidth:1,alignSelf:"flex-start",width:"30%", marginRight:10, height:"68%",}}>
                    <RNPickerSelect  style={pickerStyle} 
                        onValueChange={(value) =>this.getvalue(value,val.id)}
                        items={[
                            { label: 'plan', value: 'plan' },
                            { label: 'grue', value: 'grue' },
                          
                        ]}
                    />

                    </View>
                    <TextInput style={styles.inkg} placeholder="Enter kg " onChangeText={(text) => this.addValues(text, val.id)}/>
                    <TextInput style={styles.incoil} placeholder="Enter coil " onChangeText={(text) => this.addValues1(text, val.id)}/>
                    
                </View>
            ))
            return(
                
                 
                   <View style={styles.container}>
                   <Text style={styles.head}>
                   Wired in
                   </Text>
                   
                   <View style={{flexDirection:"row"}}>
                     
                     <Text style={{alignSelf:"flex-start",marginRight:10,marginTop:10}}>Enter Vehical No.</Text>
                     <TextInput style={styles.evn} placeholder="Enter vehicle number" onChangeText={(text)=>this.setState({vehical_no:text})} />     
                     </View>

                   <View style={styles.title}> 
                   <Text style={styles.size}>Size</Text>
                   <Text style={styles.type} >Type</Text>
                   <Text style={styles.kg}>KG</Text>
                   <Text style={styles.coil}>Coil</Text> 
                   </View>
                   <View > 
                   </View>
                   <ScrollView style={{width:"100%", height:"65%"}}> 
                        {_itm}
                    </ScrollView>
   
                   <TouchableOpacity style={styles.btn1} onPress={this.clickhandler}>
                       <Text style={styles.btext}>Submit</Text>
                   </TouchableOpacity>
   
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
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff"
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
    input:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    title:{
        flexDirection:"row",
        margin:10
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
        marginTop:20,
    },

    thiknesh:{
            borderWidth:1,alignSelf:"flex-start",color:"#fff",width:"10%", marginRight:10, color:"#000",textAlign:"center",
        },
        weight:{
        borderWidth:1,alignSelf:"flex-start",color:"#fff", height:"85%",  color:"#000",textAlign:"center",
        }, 


        insize:{
          borderWidth:1,alignSelf:"flex-start",color:"#fff", width:"20%", padding:7, marginRight:10, color:"#000",textAlign:"center",
        },
   
        inkg:{
          borderWidth:1,alignSelf:"flex-start",color:"#fff", width:"20%", height:"68%", marginRight:10, color:"#000",textAlign:"center",
         },
         
         
        incoil:{
          borderWidth:1,alignSelf:"flex-start",color:"#fff", width:"20%", height:"68%",color:"#000",textAlign:"center",
         }, 

        
    size:{
      width:"20%",  alignSelf:"flex-start", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:12, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },
    type:{
      width:"30%",  alignSelf:"flex-start", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:12, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    kg:{
      width:"25%",  alignSelf:"flex-start", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:12, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    coil:{
      width:"20%",  alignSelf:"flex-start", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginBottom:12, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 


     
    
    btn1:{
        width:200,
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