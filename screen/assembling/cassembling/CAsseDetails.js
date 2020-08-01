import React from 'react';
import {Text,View,Picker,StyleSheet, ActivityIndicator, Button} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { getData } from '../../../App/storeas';
import RNPickerSelect from 'react-native-picker-select';




export default class CAssemDetails extends React.Component{
    constructor(props){
        super(props);
        this.clickhandler = this.clickhandler.bind(this);
        this.state={
            isLoading:true,
            name:"",
            dataSource:[],
            id:"",
            size:"",
            bag:"",
            perbg:"",
            user_id:"",
            token:"",
            inputData : [],
            tran:[],
            slec:[],
        }
    }
    componentDidMount(){
        
        getData("user").then((val)=>{
        this.setState({token:val.token,user_id:val.user_id});
        this.setState({id:this.props.route.params.id});
        
        // setUserid(val.user_id)
        return fetch(`https://highgrip.in/api/getSizeforassemblying?id=${this.props.route.params.id}`)
        .then((response)=>response.json())
        .then((responseJson)=>{
           
        //    console.log(this.props.route);
            this.setState({
                isLoading:false,
                dataSource:responseJson
            })
            return fetch('https://highgrip.in/api/getTransferass')
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

        })
        .catch((error)=>{
            console.log(error);
        });

        }).catch(e=>console.log(e));
       

        
       
    }
    clickhandler(){
        // alert("click happend");
        this.setState({isLoading:true});
        if(this.state.inputData && this.state.inputData.length){
          if(this.state.slec&& this.state.slec.length){
            if(this.state.slec.length==this.state.inputData.length){

          
        axios.post("https://highgrip.in/api/CInsertassout",{sizes:this.state.inputData,id:this.state.id,to:this.state.slec})
        .then(response=>{
            // console.log(response.data);
        if(response.data.sucess){
          this.setState({isLoading:false});
            alert("Data Added Success");
            this.props.navigation.goBack();

          }else{
            this.setState({isLoading:false});
            // this.props.navigation.goBack();
            alert("Error is Not Proper");
          }
          
        })
        .catch(e=>{console.log(e);this.setState({isLoading:false});});

      }else{
        this.setState({isLoading:false})
        alert("please check you enter correct data");
      }

      }else{
        this.setState({isLoading:false})
        alert("Select Where to send");
      }
      }
      else{
        this.setState({isLoading:false})
        alert("Please Provide Details");
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

    render(){
        const { isLoading,dataSource } = this.state;

        
    
        if(isLoading){
            return <View style={styles.container}>
                <ActivityIndicator />
            </View>
        }
        else{
            //get the things
            var _items = dataSource.map((key,value) => {
                return <View  key={value} style={styles.bg}>
                        <Text style={{borderWidth:1,alignSelf:"flex-start",color:"#fff",paddingTop:10, paddingBottom:10,paddingLeft:4, paddingRight:4, width:"20%", marginRight:10, color:"#000",textAlign:"center",}} >{key.componet_size}</Text>
                        <TextInput style={{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,width:"20%", height:"75%", marginRight:10, color:"#000",textAlign:"center",}}  placeholder="Enter Bag" onChangeText={(text) => this.addValues(text, key.id)} />
                        <Text style={{borderWidth:1,alignSelf:"flex-start",color:"#fff",padding:10,  width:"20%", height:"75%", marginRight:10, color:"#000",textAlign:"center",}}>{key.perkg}</Text>
                        <View style={{borderWidth:1,alignSelf:"flex-start",width:"30%", height:"75%",}}>
                        <RNPickerSelect  style={pickerStyle} key={value}
                           
                           onValueChange={(rns) =>this.getvalue(rns,key.id) }
                            items={this.state.tran}
                        />
                        </View>
                      
                </View>
            });

            return(
                
            <View style={styles.container}> 
            {this.props.route.params.name && <Text  style={styles.text} >{this.props.route.params.name}</Text>}
            <ScrollView style={{width:"100%"}}>
                
            <View>
                <View style={styles.bg}>
                <Text style={styles.size}>Size</Text>
                    <Text style={styles.bag}>Bag</Text>
                    <Text style={styles.kg}>KG</Text>
                    <Text style={styles.to}>TO</Text>

                </View>
            {_items}
            </View>
                 
                <View style={styles.submit}>
                    <Button title="Submit" color="#00CCCC" width="80%"  backgroundColor="#00CCCC"  onPress={this.clickhandler}/>
                </View>
                </ScrollView>
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
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        textAlign:"center",

    },
    bg:{
        justifyContent:"center",
        alignItems:"center",   
        flexDirection:"row", 
        fontSize:15, 
        marginBottom:5,
        textAlign:"center",
        
       
    },
    
      text:{
        fontSize:25,
        fontFamily:"serif",
        paddingBottom:20,
        textShadowColor:"#ff0000", 
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 3,  
        fontWeight: '400',
      },
      submit:{
        width:"80%", 
        marginTop:10,
        alignSelf:"center",
        marginBottom:20,
      },
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
})