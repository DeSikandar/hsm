import React from "react";
import { View, Text, ActivityIndicator,StyleSheet,ScrollView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios";

export default class Wiredstoreout extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            thik:[],
            isLoading:true,
            inputData:[],
            slec:[]

            
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



      clickhandler(){
          this.setState({isLoading:true})
       
        if(this.state.inputData&&this.state.inputData.length){
            if(this.state.slec&& this.state.slec.length){
                if(this.state.slec.length==this.state.inputData.length){

                    axios.post("https://highgrip.in/api/Wiredout",{kg:this.state.inputData,w:this.state.slec})
                    .then((response)=>{
                        console.log(response.data);
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
                    alert("Please provide proper details");
                }

            }else{
                this.setState({isLoading:false})
                alert("Select where to transfer");
            }

          }else{
            this.setState({isLoading:false})
              alert("please Enter details");
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
                <View key={val.id} style={styles.bg} >
                    <Text style={styles.inthiknesh}>{val.thiknesh}</Text>
                    
                    <View style={{borderWidth:1,alignSelf:"flex-start",width:"33%", marginRight:10, height:"75%",}}>
                    <RNPickerSelect  style={pickerStyle} 
                        onValueChange={(value) =>this.getvalue(value,val.id)}
                        items={[
                            { label: 'plan', value: 'plan' },
                            { label: 'grue', value: 'grue' },
                          
                        ]}
                    />
                    </View>
                        <TextInput   style={styles.inweight} placeholder="Enter coil " onChangeText={(text) => this.addValues(text, val.id)}/>
                    </View>
                    
                
            ))
            return(
                
                <View style={styles.container}>
                <Text style={styles.head}>
                    Wire Out
                </Text>
                
                <View style={styles.title}> 
                <Text style={styles.thickness}>Size</Text>
                <Text style={styles.weight}>Type</Text>
                <Text style={styles.to}>Coil</Text>
              
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
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        textAlign:"center",
        alignSelf:"center",
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
        marginTop:50,
    },
    bg:{
        justifyContent:"center",
        alignItems:"center",   
        flexDirection:"row", 
        fontSize:15,  
        textAlign:"center",
        
        
       
    },

    inthiknesh:{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"30%", marginRight:10, color:"#000",textAlign:"center",},
    inweight:{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"29%", height:"75%", color:"#000",textAlign:"center",},
        
    thickness:{
        alignSelf:"flex-start",padding:7,width:"32%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    weight:{
        alignSelf:"flex-start",padding:7,width:"33%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
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