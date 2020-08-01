import React,{useState} from 'react';
import { View ,StyleSheet,KeyboardAvoidingView,Text,Button,TextInput,Image, TouchableOpacity,Animatable, ActivityIndicator} from 'react-native';
import { AuthContext } from "../App/context";
import { Colors } from 'react-native/Libraries/NewAppScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';




export default function SignIn({ navigation })  {
    const { signIn } = React.useContext(AuthContext);
    const [user,setuser]=useState('');
    const [password,setpassword]=useState('');
    const [progres,Setpro]=useState(false);


    const clickhandler=()=>{
      if(user&&password){
        signIn(user,password,Setpro)
      }else{
        alert("Please Enter Login credential");
      }
    }
    
    if(progres){
      return<View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>Try To Login..</Text>
      </View>
    }else{

      return (
        
        
        <View style={styles.container}>
        <View style={styles.img}>
            <Image
            style={styles.tinyLogo}
            source={require('../assets/splash1.png')}
          />
        </View>
        
        
        <KeyboardAvoidingView behavior="padding" style={styles.ke}>
        <View style={styles.btnco}>
            <TextInput style={styles.input} placeholder="Enter Username" onChangeText={(val)=>setuser(val)} />
        </View>
        <View style={styles.btnco}>
            <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} onChangeText={(val)=>setpassword(val)} />
        </View>
        </KeyboardAvoidingView>
      <View style={styles.button}>
        <Button  title="Sign In" color="#00CCCC" width="100%"  backgroundColor="#00CCCC" onPress={clickhandler} />
        </View>
        
      </View>
      );

    }
  };

  
  
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#fff",
      
  },
    
  img:{ 
    width:200,
    height:220,
    
    justifyContent:"center",
    alignItems:"center",

  },
  tinyLogo:{
    flex:1,
    width: "100%",
    height: "100%", 
  },
  input:{
    width:300,
    backgroundColor:"#fff",
    fontSize:15,
    padding:5,
    borderColor:"#D3D3D3",
    borderWidth:2,
    marginBottom:5,
    fontWeight: "bold",
    borderRadius:10,
            

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
  button:{
    width:"92%",
    backgroundColor:"#fff",
    fontSize:35,
    padding:15,  
    marginBottom:5,
    fontWeight: "bold",
    borderRadius:10,

  }

  })