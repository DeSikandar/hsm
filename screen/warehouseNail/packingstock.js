import React from 'react';
import {View,StyleSheet,Text, ActivityIndicator,FlatList,ScrollView} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class packingstock extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:[],
            tdata:[],
           
        }
    }
  
    componentDidMount(){
        return fetch(`https://highgrip.in/api/nailpackingstock`)
        .then((response)=>response.json())
        .then((responseJson)=>{
           
           this.setState({
               isLoading:false,
               dataSource:responseJson
           })
            
        })
        .catch((error)=>{
            console.log(error);
        });
    }


    render(){
        if(this.state.isLoading){
            return<View>
                <ActivityIndicator />
            </View>
        }else{
            if(this.state.dataSource){
               console.log( this.state.dataSource.nailiner) 
                
            }
                
        
            return(
            <View style={styles.container}>
                <Text style={styles.text5}>STOCK</Text>
                
                <ScrollView height="50%">
                <View style={styles.head}>
                    <Text style={styles.head}>Nails Outter STOCK</Text>
                    <View style={styles.title}>
                        <Text style={styles.brand}> Brand Name</Text>
                        <Text style={styles.quantity}>Qantity</Text>
                    </View>
                    <View style={styles.bods}>
                        <Text style={styles.inbrand}>{this.state.dataSource.nailouter.brand_name } </Text>
                        <Text style={styles.inquantity}>{this.state.dataSource.nailouter.Quantity}</Text>
                    </View>
                </View>
                
                <View style={styles.head}>
                    <Text style={styles.head}>Nails Inner STOCK</Text>
                    <View style={styles.title}>
                        <Text style={styles.brand}> Brand Name</Text>
                        <Text style={styles.quantity}>Qantity</Text>
                    </View>
                    <View style={styles.bods}>
                        <Text style={styles.inbrand}>{this.state.dataSource.nailiner.brand_name } </Text>
                        <Text style={styles.inquantity}>{this.state.dataSource.nailiner.Quantity}</Text>
                    </View>
                </View>
 

                <View style={styles.head}>
                    <Text style={styles.head}>Screw Outter STOCK</Text>
                    <View style={styles.title}>
                        <Text style={styles.brand} > Brand Name</Text>
                        <Text style={styles.quantity}>Qantity</Text>
                    </View>
                    <View style={styles.bods}>
                        <Text style={styles.inbrand}>{this.state.dataSource.screwouter.brand_name } </Text>
                        <Text style={styles.inquantity}>{this.state.dataSource.screwouter.Quantity}</Text>
                    </View>
                </View>
 

                <View style={styles.head}>
                    <Text style={styles.head}>Screw Inner STOCK</Text>
                    <View style={styles.title}>
                        <Text style={styles.brand}> Brand Name</Text>
                        <Text style={styles.quantity}>Qantity</Text>
                    </View>
                    <View style={styles.bods} >
                        <Text style={styles.inbrand}>{this.state.dataSource.screwinner.brand_name } </Text>
                        <Text style={styles.inquantity}>{this.state.dataSource.screwinner.Quantity}</Text>
                    </View>
                </View>
 
              </ScrollView>
                
        </View>
            )

        }
}

}

const styles = StyleSheet.create({
    container:{ 
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        alignContent:'center',
    },
    title:{
        flexDirection:"row",
    },
    bods:{
        flexDirection:"row"
    },
    tcontainer:{ 
       
        justifyContent:'center',
        alignItems:'center' ,
        width:"100%",
        flexDirection:"row", 
        alignContent:'center',
        alignSelf:"center", 
},
text5:{
    fontSize:25,
    fontFamily:"serif",
    marginTop:10,
    paddingBottom:20,
    textShadowColor:"#ff0000", 
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 3,  
    fontWeight: '400',
    alignSelf:"center",
}, 
head:{
    fontSize:20,
    fontFamily:"serif",
    marginTop:5,
    paddingBottom:10,
    textShadowColor:"#ff0000", 
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 3,  
    fontWeight: '200',
    alignSelf:"center",
    justifyContent:'center',
    alignItems:'center' , 
    alignContent:'center', 
}, 
bg:{
        flexDirection:"row",

        },
        inbrand:{ 
            alignSelf:"flex-start",  padding:10,width:"45%",marginRight:10, height:"85%",color:"#000", textAlign:"center", borderWidth:1,
          },
          inquantity:{ 
            alignSelf:"flex-start",  padding:10,width:"45%", height:"85%",color:"#000", textAlign:"center", borderWidth:1,
          },
          brand:{
            alignSelf:"flex-start",padding:7,width:"45%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3, fontSize:18,marginRight:10,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                            borderRadius:3,
                            shadowColor: "#000",
                            shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
          },
          quantity:{
            alignSelf:"flex-start",padding:7,width:"45%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                            borderRadius:3,
                            shadowColor: "#000",
                            shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
          },

    
})