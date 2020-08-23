import React from "react";
import { View,Text, ActivityIndicator,Button,StyleSheet,ScrollView } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";


export default class tapin extends React.Component{
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            brands:[],
            sizes:[],
            isLoading:true,
            slec:[],
            slec1:[],
            inputData:[],
            color:[],
            bill:"",
            vehicle:"",
        }
    }
    // size,color,bag,barnd 
    componentDidMount(){
        return fetch("https://highgrip.in/api/GetBrandPacking")
        .then((response)=>response.json())
        .then((responseJson)=>{
            let neass=[];
            responseJson.map(value=>{
                neass.push({"label":value.brand,"value":value.brand})
            });
               
            this.setState({
                brands:neass

            })

            return fetch("https://highgrip.in/api/getsizefortap")
            .then((resp)=>resp.json())
            .then((jrs)=>{
                this.setState({
                    sizes:jrs,
                    isLoading:false

                });

                return fetch("https://highgrip.in/api/gettapcolor")
                .then((response)=>response.json())
                .then((responseJson)=>{
                    let neass=[];
                    responseJson.map(value=>{
                        neass.push({"label":value.color,"value":value.color})
                    });
                    
                    this.setState({
                        color:neass

                    })
                    })

        })
        .catch(e=>console.log(e))
    }).catch(e=>console.log(e))}



    getvalue=(value,id)=>{
       
      
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

    getvalue1=(value,id)=>{
       
      
        let brandsarr=this.state.slec1;
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
            slec1: nesds
            });
        }
        else{
            brandsarr.push({'value':value,'size':id});
            this.setState({
                slec1:brandsarr
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


clickhandler=()=>{
    this.setState({isLoading:true})

    if(this.state.bill && this.state.vehicle){

        if(this.state.inputData && this.state.inputData.length){
            if(this.state.slec&& this.state.slec.length){
    
                
                if(this.state.slec.length == this.state.inputData.length){
           
                    axios.post("https://highgrip.in/api/InsertintoTapin",{brands:this.state.slec,bag:this.state.inputData,color:this.state.slec1,vehicle:this.state.vehicle,bill:this.state.bill})
                    .then(response=>{
                        
                        if(response.data.sucess){
                            this.setState({isLoading:false})
                            alert("Data Added Success");
                            this.props.navigation.goBack();
                
                          }else{
                            this.setState({isLoading:false})
                            alert("Error is Not Proper");
                          }
                    }).catch(e=>{console.log(e);this.setState({isLoading:false})});
    
    
    
                }else{
                    this.setState({isLoading:false})
                    alert("Please Enter Data");
                }
    
            }else{
                this.setState({isLoading:false})
                alert("Please Select Brands");
    
            }
        }else{
            this.setState({isLoading:false})
            alert("Please Provide the Weight ");
        }
    }else{
        alert("Enter vehical and bill No.");
    }

}




    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex:1,justifyContent:"center", alignItems:"center", backgroundColor:"#fff",}}>
                    <ActivityIndicator  />
                </View>
            )
        }else{
            let _itms=this.state.sizes.map(vlue=>(

                <View key={vlue.id}   style={styles.container}>
                    <Text style={styles.sizevalue}>{vlue.size}</Text>
                    <View style={{borderWidth:1,alignSelf:"flex-start",width:"26%",height:"78%", marginRight:10,}}>

                        <RNPickerSelect  style={pickerStyle}  placeholder={{label: 'Brand Select', value: null,}} key={vlue.id}  
                           
                           onValueChange={(rns) =>this.getvalue(rns,vlue.id) }
                            items={this.state.brands}
                        />
                    </View>
                    
                    <View style={{borderWidth:1,alignSelf:"flex-start",width:"26%",height:"78%", marginRight:10,}}>

                        <RNPickerSelect  style={pickerStyle}   key={vlue.id}  
                           
                           onValueChange={(rns) =>this.getvalue1(rns,vlue.id) }
                            items={this.state.color}
                        />
                    </View>
                    <TextInput style={{borderWidth:1,alignSelf:"flex-start",padding:10,width:"18%",height:"78%",}} placeholder="bag" onChangeText={(valu)=>this.addValues(valu,vlue.id)} />
                </View>

               
            ))

            return(
                <View style={styles.conta}>
                <View  style={styles.heading}>
                   <Text style={styles.mainheading}  >Tap IN </Text>

                   <View style={{flexDirection:"row",}}>
                     
                    <Text style={{alignSelf:"flex-start",marginRight:10,marginTop:10,width:110}}>Enter Bill No.</Text>
                    <TextInput style={styles.evn} placeholder="Enter Bill number" onChangeText={(val)=>this.setState({bill:val})} />     
                    
                    </View>
                    <View style={{flexDirection:"row"}}>
                     
                    <Text style={{alignSelf:"flex-start",marginRight:10,marginTop:10,width:110}}>Enter Vehical No.</Text>
                    <TextInput style={styles.evn} placeholder="Enter vehicle number" onChangeText={(val)=>this.setState({vehicle:val})} />     
                    
                    </View>

             <View   style={styles.container}>
                    <Text style={styles.mainhead}>SIZE</Text> 

                    <Text style={styles.brand}>BRAND</Text> 
                    <Text style={styles.brand}>Color</Text> 
                    <Text style={styles.weight}>Bag</Text> 
                    </View>
                
                    <ScrollView height="50%">
                    {_itms}
                    </ScrollView>
                    <View  style={styles.submit}>
                    <Button title="Submit" color="#00CCCC" width="80%"  backgroundColor="#00CCCC"  onPress={this.clickhandler}/>
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
    
    conta:{
        flex:1,
        justifyContent:"center",     
        backgroundColor:"#ffffff",
        width:"100%"
    },
    container:{  
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        width:"100%",
        
        
    },
    mainheading:{
        fontSize:25,
        fontFamily:"serif",
        marginTop:100,
       
        justifyContent:"center",
        alignSelf:"center",
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,
         
        fontWeight: '400',
    }, evn:{   
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
        width:160,              
    
    },
    mainhead:{
        alignSelf:"flex-start",padding:7,width:"18%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:15,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    brand:{
        width:"26%",  alignSelf:"flex-start",padding:7, fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:15,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },  
    weight:{
         padding:7,width:"18%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:15,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },
    sizevalue:{ 
         alignSelf:"flex-start",padding:10,width:"18%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
    },   
    submit:{
        width:"95%",
        fontSize:20, 
        marginBottom:10,
        backgroundColor:"#fff", 
        color:"#fff",
        alignSelf:"center",        
        textShadowColor:"#000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,
        fontFamily:"serif", textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
        
      },
})

        

