import React from 'react';
import { View, Text ,StyleSheet,ActivityIndicator,FlatList} from "react-native";


export default class Nailsstock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            isLoading:true
        }
    }
    componentDidMount(){
        return fetch('https://highgrip.in/api/Nailprodustockremain')
        .then((response)=>response.json())
        .then((responseJson)=>{
            const ds=[]
            responseJson.map((item,value)=>{
                ds.push({key:value,quantity:item.Quantity,brand:item.brand_name,thiknesh:item.thiknesh,length:item.length});

           })
           this.setState({
               isLoading:false,
               dataSource:ds
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
            
            return(
            
                    <View style={styles.container}>
                    <Text style={styles.text5}>STOCK</Text>

                    <View style={styles.bg}>
                        
                        <Text style={styles.size}>Size</Text>
                        <Text style={styles.size}>Brand</Text>
                        <Text style={styles.kg}>KG</Text> 

                    </View>

                    <View style={styles.tcontainer}>



                    <FlatList data={this.state.dataSource}
                        renderItem={(itmes,index)=>
                            
                            <View style={styles.tcontainer}>
                                
                        <Text style={styles.material}>{itmes.item.thiknesh}x{itmes.item.length}</Text>
                        <Text style={styles.material}>{itmes.item.brand}</Text>
                        <Text style={styles.qut}>{parseFloat(itmes.item.quantity).toFixed(2)}</Text>
                            </View>
                        }
                        keyExtractor={item=>item.key.toString()}
                    />


                    </View>
                    </View>
            )

        }
    }
}



const styles = StyleSheet.create({
    container:{ 
        alignItems:"center",
        justifyContent:"center"
    },
    tcontainer:{        
        justifyContent:'center',
        alignItems:'center' , 
        flexDirection:"row", 
        alignContent:'center',  
},
text5:{
    fontSize:35,
    fontFamily:"serif",
    paddingBottom:20,
    textShadowColor:"#ff0000", 
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 3,  
    fontWeight: '400',
},  
 
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6,alignItems:"center",backgroundColor:"#ddd" },

    bg:{
        flexDirection:"row",

        },
     

    size:{
        padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                       textShadowRadius: 3, fontSize:18,marginBottom:10,marginRight:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                       borderRadius:3,
                       shadowColor: "#000",
                       shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
   },
    
   kg:{
       padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 },
                      textShadowRadius: 3, fontSize:18,marginBottom:10, color:"#fff", fontFamily:"serif",backgroundColor:"#00CCCC",textAlign:"center",
                      borderRadius:3,
                      shadowColor: "#000",
                      shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,
  },

  material:{
    padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  
                    fontSize:18,marginBottom:10,marginRight:10,  fontFamily:"serif",borderWidth:1, textAlign:"center",
                   borderRadius:3,
                   
},

qut:{
   padding:7,width:"30%", fontFamily:"serif",textShadowColor:"#000", textShadowColor: 'black',  
                   fontSize:18,marginBottom:10,  fontFamily:"serif",borderWidth:1, textAlign:"center",
                  borderRadius:3,
                 
},
})