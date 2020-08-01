import React from 'react';
import { View, Text,StyleSheet, ActivityIndicator,ScrollView } from 'react-native';


export default class OuterStock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            isLoading:true,
        }
    }

componentDidMount(){
    return fetch("https://highgrip.in/api/outerstock")
    .then(response=>response.json())
    .then(respj=>{
        this.setState({
            isLoading:false,
            data:respj
        })
    })
    .catch(e=>console.log(e))
}


    render(){
        if(this.state.isLoading){
            return <View style={styles.container}>
                <ActivityIndicator />
            </View>
        }else{
            let _item =this.state.data.map((value,key)=>(
                <View style={styles.container} key={key.toString()}>
                    <Text style={styles.sizevalue}>{value.size}</Text>                  
                    <Text style={styles.qutvalue}>{value.Quantity}</Text>
                    
                </View>
            ))
            return(
                <View style={styles.conta}>
                <View  style={styles.heading}>
                   <Text style={styles.mainheading} >OUTER STOCK</Text>

             <View style={styles.container}>
                    <Text style={styles.mainhead}>SIZE</Text>  
                    <Text style={styles.qut}>Quantity</Text> 
                    </View>
                
                    <ScrollView height="65%">
                        {_item}
                        </ScrollView>
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
    mainhead:{
        alignSelf:"flex-start",padding:7,width:"45%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    }, 
       
    qut:{
         padding:7,width:"45%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                        borderRadius:3,
                        shadowColor: "#000",
                        shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
    },
    sizevalue:{ 
         alignSelf:"flex-start",padding:10,width:"45%",marginRight:10, color:"#000", textAlign:"center", borderWidth:1,
    },
    
   qutvalue:{ 
    alignSelf:"flex-start",padding:10,width:"45%", color:"#000", textAlign:"center", borderWidth:1,
},   
   
})

        
