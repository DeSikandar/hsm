import React from "react";
import { View ,Text,Button,StyleSheet,ScrollView, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default class WareMasterDouble extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Quantity:"",
            isLoading:false,
        }
    }

    clickhandler=()=>{
        this.setState({isLoading:true})
        if(this.state.Quantity){    

            axios.post("https://highgrip.in/api/InserDoublMaster",{pid:4,Quantity:this.state.Quantity})
            .then(respon=>{
                if(respon.data.sucess){
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
            alert("Please Enter Details");
        }
    }
    render(){
        if(this.state.isLoading){
            return <View style={styles.conta}>
                <ActivityIndicator />
            </View>
        }else{


            return(
                <View>
                    <Text style={styles.mainheading}>Master Double</Text>
    
                    <View>
                        <TextInput placeholder="Enter Quantity"style={styles.weightvalue} onChangeText={(value)=>this.setState({Quantity:value})} />
                    </View>
                    <View  style={styles.submit}>
                    <Button title="Submit" color="#00CCCC" width="80%"  backgroundColor="#00CCCC"  onPress={this.clickhandler}/>
                    </View>
                </View>
            )
        }
    }
}



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
        paddingTop:10,
        
    },
    mainheading:{
        fontSize:25,
        fontFamily:"serif",
        paddingBottom:20,
        justifyContent:"center",
        alignSelf:"center",
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,
        marginTop:10,  
        fontWeight: '400',
    }, 
    
    weightvalue:{
        borderWidth:1,
        alignSelf:"flex-start",
        padding:10,
        width:"85%", 
        alignSelf:"center",
    },
    submit:{
        width:"70%",
        fontSize:20, 
        marginTop:10,
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
