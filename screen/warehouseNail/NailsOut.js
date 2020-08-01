import React from "react";
import { View, Text,StyleSheet, Button,TextInput,ActivityIndicator,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';


class NailsOut extends React.Component{
    constructor(props){
        super(props);
        this.clickhandler = this.clickhander.bind(this);
       
        this.state={
            isLoading:true,
            dataSource:[],
            inputData : [],
            tran:[],
            slec:[],
        }
    }
    componentDidMount(){
        // getNailSize


        return fetch(`https://highgrip.in/api/getOutRemaiNail`)
        .then((response)=>response.json())
        .then((responseJson)=>{

            this.setState({
                isLoading:false,
                dataSource:responseJson
            })

            // console.log(responseJson);
            return fetch('https://highgrip.in/api/getTransferto')
            .then((response1)=>response1.json())
            .then((responseJson1)=>{
                // console.log(responseJson1);
                let neass=[];
                responseJson1.map(value=>{
                    neass.push({"label":value.Name,"value":value.Name})
                });
                    this.setState({
                        isLoading:false,
                        tran:neass
                    })
                })
 
            .catch(e=>console.log(e))

        //    console.log(this.props.route);
           
        })
        .catch((error)=>{
            console.log(error);
        });

        
    }

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



   

    clickhander=()=>{
        this.setState({isLoading:true})
        if(this.state.inputData&&this.state.inputData.length){
            if(this.state.slec&&this.state.slec.length){
                    // console.log(this.state.slec)
                    // console.log(this.state.inputData)
            if(this.state.slec.length==this.state.inputData.length){

            // console.log(this.state.slec);
            axios.post("https://highgrip.in/api/NailStockOut",{to:this.state.inputData,howm:this.state.slec})
            .then(response=>{
                // console.log(response.data)
              if(response.data.sucess){
                  this.setState({isLoading:false})
                  
                alert("Data Added Success");
                this.props.navigation.goBack();
    
              }else{
                this.setState({isLoading:false})
                alert("Error Data is required");
              }
              
            })
            .catch(e=>{console.log(e);this.setState({isLoading:false})});
        }else{
            this.setState({isLoading:false})
            alert("please check you enter correct data");
          }

        }else{
            this.setState({isLoading:false})
            alert("select whome to transfer");
        }
        }else{
            this.setState({isLoading:false})
            alert("Please Enter Details");
        }
        // console.log("Button Click");
    }

    render(){
            if(this.state.isLoading){
                return <View style={styles.container}>
                <ActivityIndicator />
            </View>
            }else{
                var itme=this.state.dataSource.map((key,value)=>{
                    // console.log(key.id)
                    return  <View style={styles.bg} key={value}>
                    <Text style={styles.insize}>{key.size} ({key.Quantity})</Text>
                    <Text style={styles.inkg}>{key.perkg}</Text>
                     <TextInput  style={styles.incount} placeholder="count" onChangeText={(text) => this.addValues(text, key.size)} />
                                      
                   <View key={value} style={{borderWidth:1,alignSelf:"flex-start",width:"30%", height:"75%",}}>
                    <RNPickerSelect  style={pickerStyle} key={value}
                           
                           onValueChange={(rns) =>this.getvalue(rns,key.size) }
                            items={this.state.tran}
                        />
                     </View>

                   
                    

                </View>
                })

                return(
                    <View style={styles.container} >   
                    <ScrollView style={{width:"100%"}}> 
                    <Text style={styles.head}>Nails Out</Text>
                        <View style={styles.bg}>
                     
                               <Text style={styles.size}>Size</Text>
                               <Text style={styles.kg}>PerKg</Text>
                               <Text style={styles.bag}>Bag</Text>

                               <Text style={styles.to}>TO</Text>



        
                            </View>
        
                          
                        <ScrollView style={{width:"100%",height:"65%"}}>
                             {itme}
                          </ScrollView>
                         
                        <TouchableOpacity   title="Submit" onPress={this.clickhander}>
                            <Text style={styles.submit}>Nails Out</Text>
                        </TouchableOpacity>
                        </ScrollView>  
                    </View>
                        
        
                )
            }

    }
}


export default NailsOut;



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
        alignContent:"center",
        alignItems:"center"
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
        marginTop:10, 
        alignSelf:"center",
    },
     bg:{
        justifyContent:"center",
        alignItems:"center",   
        flexDirection:"row", 
        fontSize:15, 
        marginBottom:5,
        textAlign:"center",
       

       
    }, 
       
      insize:{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"20%", marginRight:10, color:"#000",textAlign:"center",},
      inkg:{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"20%", height:"75%", marginRight:10, color:"#000",textAlign:"center",},
      incount:{borderWidth:1,alignSelf:"flex-start",color:"#fff",paddingTop:10, paddingBottom:10,paddingLeft:4, paddingRight:4, width:"20%",height:"75%", marginRight:10, color:"#000",textAlign:"center",},
    
      size:{
      alignSelf:"flex-start",padding:7,width:"20%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                      borderRadius:3,
                      shadowColor: "#000",
                      shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  }, 
  bag:{
      alignSelf:"flex-start",padding:7,width:"20%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                      borderRadius:3,
                      shadowColor: "#000",
                      shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  },  
  kg:{
       padding:7,width:"20%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 3, fontSize:18,marginBottom:10,marginRight:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                      borderRadius:3,
                      shadowColor: "#000",
                      shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  },
   
  to:{
      padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                     textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                     borderRadius:3,
                     shadowColor: "#000",
                     shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
 },
 submit:{
    width:"80%",
    fontSize:20, 
    marginTop:10,
    padding:10,
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

