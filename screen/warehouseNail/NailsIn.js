import React from "react";
import { View, Text,StyleSheet, Button,TextInput,ActivityIndicator,TouchableOpacity, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';


class NailsIn extends React.Component{
    constructor(props){
        super(props);
        this.clickhandler = this.clickhander.bind(this);
       
        this.state={
            isLoading:true,
            dataSource:[],
            inputData : [],
        }
    }
    componentDidMount(){
        // getNailSize
        return fetch(`https://highgrip.in/api/getNailSize`)
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson);
           
        //    console.log(this.props.route);
            this.setState({
                isLoading:false,
                dataSource:responseJson
            })
        })
        .catch((error)=>{
            console.log(error);
        });
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
            axios.post("https://highgrip.in/api/NailsIn",{sizes:this.state.inputData})
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
            .catch(e=>{console.log(e); this.setState({isLoading:false})});

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
                    return  <View style={styles.bg} key={value}>
                    <Text style={styles.insize}>{key.size}</Text>

                    <TextInput  style={styles.incount} placeholder="count" onChangeText={(text) => this.addValues(text, key.id)} />
                     
                    <Text style={styles.inkg}>{key.perbag}</Text>
                    

                </View>
                })

                return(
                    <View style={styles.container} >   
                    <ScrollView> 
                    <Text style={styles.head}>Import Nails IN</Text>

                        <View style={styles.bg}>
                                <Text style={styles.size}>Size</Text>
        
                                <Text style={styles.count}>Count</Text>
        
                                <Text style={styles.kg}>Per KG</Text>
        
                            </View>
        
                        
               <ScrollView height="65%">
               {itme}
               </ScrollView>   

                        <TouchableOpacity   title="Submit" onPress={this.clickhander} >
                            <Text style={styles.submit}   >Nails Out</Text>
                        </TouchableOpacity>

                        </ScrollView>  
                    </View>
                        
        
                )
            }

    }
}


export default NailsIn;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
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
        marginTop:10, 
        alignSelf:"center",
    },
    

    insize:{
        alignSelf:"flex-start",padding:10,width:"30%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
      },
      incount:{ 
        alignSelf:"flex-start",  padding:10,width:"30%",marginRight:10, height:"85%",color:"#000", textAlign:"center", borderWidth:1,
      },
      inkg:{ 
        alignSelf:"flex-start",  padding:10,width:"30%", height:"85%",color:"#000", textAlign:"center", borderWidth:1,
      },
      size:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
      },
      count:{
        alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
      },
      kg:{
          alignSelf:"flex-start",padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                          textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                          borderRadius:3,
                          shadowColor: "#000",
                          shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
      },


    btn1:{
        width:"80%",
        padding:5,
        marginBottom:10,
        marginTop:10,
        fontSize:25, 
        backgroundColor:"#00CCCC",
        borderColor:"#FF0000",  
        justifyContent:"center",
        textAlign:"center",  
        alignItems:"center",
        color:"#000", 
        borderRadius:10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        alignSelf:"center",
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
