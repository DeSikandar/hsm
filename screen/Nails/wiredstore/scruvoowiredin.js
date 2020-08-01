import React from "react";
import { View, Text, ActivityIndicator,StyleSheet,ScrollView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

export default class ScurvooWiredin extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            thik:[],
            isLoading:true,
            inputData:[]
            
        }
    }
    componentDidMount(){
        this._isMounted = true;
        return fetch("https://highgrip.in/api/screwthiknesh")
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
      clickhandler(){
          this.setState({isLoading:true})
          if(this.state.inputData&&this.state.inputData.length){

              axios.post("https://highgrip.in/api/insertscroThik",{data:this.state.inputData})
              .then((response)=>{
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
            return <View style={styles.container}>
                <ActivityIndicator />
            </View>
        }
        else{
            let _itm=this.state.thik.map(val=>(
                <View key={val.id} style={styles.input} >
                    <Text style={styles.thiknesh}>{val.thiknesh}</Text>
                    <TextInput  style={styles.weight} placeholder="Enter weight " onChangeText={(text) => this.addValues(text, val.id)}/>
                    
                </View>
            ))
            return(
                
                            

            <View style={styles.container}>
            <Text style={styles.head}>
            Screw Wired in
            </Text>

            <View style={styles.title}> 
            <Text style={styles.size}>Size</Text>
            <Text style={styles.bag}>BOX</Text> 
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

const styles = StyleSheet.create({
    container:{ 
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff"
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
            borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,  width:"40%", marginRight:10, color:"#000",textAlign:"center",
        },
        weight:{
        borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,  width:"40%", height:"85%",  color:"#000",textAlign:"center",
        }, 
        
    size:{
        alignSelf:"flex-start",padding:7,width:"40%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:12, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
    bag:{
        alignSelf:"flex-start",padding:7,width:"40%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
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