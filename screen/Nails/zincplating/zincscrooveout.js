import React from "react";
import { View ,StyleSheet,Text, ActivityIndicator} from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import axios from "axios";


export default class ZincScrooveOut extends React.Component{
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            data:[],
            isLoading:true,
            inputData:[],
        }
    }


    componentDidMount(){
        return fetch("https://highgrip.in/api/getscrooveswrie")
        .then(response=>response.json())
        .then(resj=>
            this.setState({data:resj,isLoading:false}))
        .catch(e=>console.log(e));
    }
    componentWillUnmount(){
        this.setState({})
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



      clickhandler(){
          this.setState({isLoading:true})
        if(this.state.inputData&&this.state.inputData.length){

            axios.post("https://highgrip.in/api/FurnaceOut",{data:this.state.inputData,code:"018"})
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
                <Text style={styles.inkg}>{valu.perbox}</Text>

            </View>
            )
            );
            return(
                 

                <View style={styles.container}>
                <Text style={styles.head}>
                    Scroove Out
                </Text>

                <View style={styles.title}> 
                <Text style={styles.size}>Size</Text>
                <Text style={styles.bag}>BOX</Text>
                <Text style={styles.kg}>KG</Text>
                </View>
                <View >
                    {_itm}
                </View>

                <TouchableOpacity style={styles.btn1} onPress={this.clickhandler}>
                    <Text style={styles.btext}>Submit</Text>
                </TouchableOpacity>

                </View>
            )
        }
    }    
}


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

        insize:{
            borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,  width:"30%", marginRight:10, color:"#000",textAlign:"center",
        },
        inbag:{
        borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,  width:"30%", height:"80%", marginRight:10, color:"#000",textAlign:"center",
        },
        inkg:{
        borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,  width:"30%", color:"#000",textAlign:"center",
        },
        
    size:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    bag:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },  
    kg:{
         padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginBottom:10,marginRight:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
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