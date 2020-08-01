import React from "react";
import { View ,StyleSheet,Text, ActivityIndicator,ScrollView} from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import axios from "axios";
import RNPickerSelect from 'react-native-picker-select';


export default class NailWarehouseout extends React.Component{
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            data:[],
            isLoading:true,
            inputData:[],
            tran:[],
            slec:[],

        }
    }


    componentDidMount(){
        return fetch("https://highgrip.in/api/packingwsize")
        .then(response=>response.json())
        .then(resj=>{

            this.setState({data:resj})

            fetch("https://highgrip.in/api/getBrandpackingnail")
            .then(resp=>resp.json())
            .then(resjs=>{
                let neass=[];
                resjs.map(value=>{
                    neass.push({"label":value.brand_name,"value":value.id})
                });
                this.setState({
                    tran:neass,
                    isLoading:false
                })
                    
                }).catch(e=>console.log(e));
        })

            
        .catch(e=>console.log(e));
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
  
  
          //   console.log();
        }
    }
  



      clickhandler(){
          this.setState({isLoading:true})
        if(this.state.inputData&&this.state.inputData.length){
            if(this.state.slec&&this.state.slec.length){

                if(this.state.slec.length==this.state.inputData.length){
                axios.post("https://highgrip.in/api/Nailpackingware",{box:this.state.inputData,brand:this.state.slec})
                .then((response)=>{
                    // console.log(response.data);
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
                alert("error data miss match");
            }

            }else{
                this.setState({isLoading:false})
                alert("Select whome to transfer");

            }

        }else{
            this.setState({isLoading:false})
            alert("please Enter details");
        }

    }


    render(){
        if(this.state.isLoading){
           return <View>
                <ActivityIndicator />
            </View>
        }else{

            let _itm=this.state.data.map(valu=>
                (
                <View key={valu.id} style={{flexDirection:"row"}}>
                    <Text style={styles.insize}>{valu.thiknesh}X{valu.length}</Text>
                    <TextInput style={styles.inbag} placeholder="Enter box" onChangeText={(text) => this.addValues(text, valu.id)}/>
                    <View style={{borderWidth:1,alignSelf:"flex-start",width:"32%", height:"75%",}}>
                        <RNPickerSelect   style={pickerStyle}
                           
                           onValueChange={(rns) =>this.getvalue(rns,valu.id) }
                            items={this.state.tran}
                        />
                        </View>

                </View>
            )
            );
            return(
                <View style={styles.container}>
                    <Text style={styles.head}>
                        Nail Packing Out
                    </Text>
                    
                    <View style={styles.title}> 
                    <Text style={styles.size}>Size</Text>
                    <Text style={styles.bag}>Bag</Text>
                    {/* <Text style={styles.kg}>perbag</Text> */}
                    <Text style={styles.brand}>Brand</Text>
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
        marginTop:20,
    },

    insize:{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"31%", marginRight:10, color:"#000",textAlign:"center",},
    inbag:{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"31%", height:"75%", marginRight:10, color:"#000",textAlign:"center",},
        
    size:{
        alignSelf:"flex-start",padding:7,width:"32%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    bag:{
        alignSelf:"flex-start",padding:7,width:"32%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },  
    brand:{
         padding:7,width:"33%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
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