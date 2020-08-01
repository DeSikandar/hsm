import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button, ActivityIndicator,ScrollView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";

export default class chemialIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        material:[],
        isLoading:true,
        inputData:[]

    };
  }

  componentDidMount(){
      return fetch("https://highgrip.in/api/getmaterials")
      .then(resp=>resp.json())
      .then(resj=>{ 

        this.setState({
            material:resj,
            isLoading:false
        })
      }).catch(e=>console.log(e));
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
      if(this.state.inputData&& this.state.inputData.length){
          axios.post("https://highgrip.in/api/InserDatainchecmial",{data:this.state.inputData})
          .then(resp=>{
            if(resp.data.sucess){
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
          alert("Enter details");
      }

  }

  render() {


    if(this.state.isLoading){
        return <View style={styles.container}>
            <ActivityIndicator />
        </View>
    }else{
            let _itm=this.state.material.map(valu=>(
                <View style={styles.bg} key={valu.id}>
                    <Text style={styles.inchemical}>{valu.material_name}</Text>
                    <TextInput style={styles.inqantity} placeholder="Enter Qantity" onChangeText={(val)=>this.addValues(val,valu.id)} />
                </View>
            ));

        return (
           
           <View style={styles.conta}>
           <View  style={styles.heading}>
              <Text style={styles.mainheading}  >CHEMICAL IN</Text>

        <View   style={styles.container}> 

               <Text style={styles.chemical}>Chemical</Text> 
               <Text style={styles.qantity}>Qantity</Text> 
               </View>
           
               <ScrollView height="65%">
               {_itm}
               </ScrollView>
               <View  style={styles.submit}>
               <Button title="Submit" color="#00CCCC" width="80%"  backgroundColor="#00CCCC"  onPress={this.clickhandler}/>
           </View>
           </View>
           </View>
        );
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
bg:{
  justifyContent:"center",
  alignItems:"center",   
  flexDirection:"row", 
  fontSize:15, 
  marginBottom:5,
  textAlign:"center",
},
inchemical:{
  alignSelf:"flex-start",padding:10,width:"45%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
},
inqantity:{ 
  alignSelf:"flex-start",  padding:10,width:"45%", height:"85%",color:"#000", textAlign:"center", borderWidth:1,
},
chemical:{
  alignSelf:"flex-start",padding:7,width:"45%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                  textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                  borderRadius:3,
                  shadowColor: "#000",
                  shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
qantity:{
    alignSelf:"flex-start",padding:7,width:"45%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                    borderRadius:3,
                    shadowColor: "#000",
                    shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
},
  
   
submit:{
    width:"95%",
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

    
