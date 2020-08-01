import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import axios from 'axios';
import {storesingle,getsingle,cleardata,getData,storeData} from './storeas';
import Moulding from '../screen/moulding';
import Min from '../screen/min';
import Mout from '../screen/mout';
import Mpresentstock from '../screen/mpresetstock';

import Assembling from "../screen/assembling/assmain";
import AssemDetails from "../screen/assembling/AsseDetails";
import StockAs from "../screen/assembling/Status";
import Nailstore from "../screen/assembling/Nailstor";
import CompnetListStore from "../screen/assembling/ComponetListStore";
import ComponentStockList from "../screen/assembling/ComponetStock";
import {Text, Image, View, ActivityIndicator} from "react-native";
import { AppLoading } from 'expo';



import { AuthContext } from "./context";
import {
//   SignIn,
//   CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  // Profile,
//   Splash
} from "./Screens";
import SignIn from '../screen/login';
// import SignIn from '../screen/Login/LoginScreen'
import Splash from '../screen/splash';
import ProductDetails from '../screen/productdetails';

//import for cassembly
import CAssembling from "../screen/assembling/cassembling/cassmain";
import CAssemDetails from "../screen/assembling/cassembling/CAsseDetails";
import CStockAs from "../screen/assembling/cassembling/cStatus";
import CNailstore from "../screen/assembling/cassembling/cNailstor";
import CCompnetListStore from "../screen/assembling/cassembling/cComponetListStore";
import CComponentStockList from "../screen/assembling/cassembling/cComponetStock";


//import for jassembly
import JAssembling from "../screen/assembling/jassembling/jassmain";
import JAssemDetails from "../screen/assembling/jassembling/jAsseDetails";
import JStockAs from "../screen/assembling/jassembling/jStatus";
import JNailstore from "../screen/assembling/jassembling/jNailstor";
import JCompnetListStore from "../screen/assembling/jassembling/jComponetListStore";
import JComponentStockList from "../screen/assembling/jassembling/jComponetStock";


//import fro cpacking
import MainPacking from "../screen/packing/cpacking/cmainpacking";
import MainOUtPacking from "../screen/packing/cpacking/cmainoutpacking";
import MainStockpacking from "../screen/packing/cpacking/cmainpackingStock";
import MainpackingDetails from "../screen/packing/cpacking/cmainpackingdetails";
import CpackingStockDetails from "../screen/packing/cpacking/cmpackingstockdetail";

//import for clamp packing
import CMainPacking from "../screen/packing/clampking/clcmainpacking";
import CMainOUtPacking from "../screen/packing/clampking/clcmainoutpacking";
import CMainStockpacking from "../screen/packing/clampking/clcmainpackingStock";
import CMainpackingDetails from "../screen/packing/clampking/clcmainpackingdetails";
import CCpackingStockDetails from "../screen/packing/clampking/clcmpackingstockdetail";

//profile
import Profile from "./Profiles";

//import fro WarehouseClamp

import WarehouseMainClamp from "../screen/warehouseClamp/MainWarehouse";
import MainWarehouseIn from "../screen/warehouseClamp/MainWarehouseIN";
import MainWarehouseOut from "../screen/warehouseClamp/MainWarehouseOut";
import MainWarehouseStock from "../screen/warehouseClamp/MainwarehouseStock";
import WareHouseProduct from "../screen/warehouseClamp/WarehouseProduc";
import WarehouseStockDetails from "../screen/warehouseClamp/WareHouseStockDetails";
import WareInner from "../screen/warehouseClamp/MainIner";
import WareOutter from "../screen/warehouseClamp/MainOuter";
import WareMaster from "../screen/warehouseClamp/MainMaster";
import WareMasterDouble from "../screen/warehouseClamp/MainDoubleMaster";
import InnerStock from "../screen/warehouseClamp/Innerstock";
import OuterStock from "../screen/warehouseClamp/Outerstock";
import MasterStock from "../screen/warehouseClamp/Masterstock";
import DobleMastStock from "../screen/warehouseClamp/Doublemasterstock";
import { TouchableOpacity } from "react-native-gesture-handler";
import tapin from "../screen/warehouseClamp/tapin";
import tapstock from "../screen/warehouseClamp/tapstock";



//wired import
import MainWiredStroe from "../screen/Nails/wiredstore/MainWiredStore";
import Wiredstore from "../screen/Nails/wiredstore/wiredstore";
import NailWiredIn from "../screen/Nails/wiredstore/Nailwiredin";
import ScurvooWiredin from "../screen/Nails/wiredstore/scruvoowiredin";
import Wiredstoreout from "../screen/Nails/wiredstore/wiredstoreout";
import WiredStock from "../screen/Nails/wiredstore/WiredStock";

//import Nails production
import MainNailsProduction from "../screen/Nails/Nailproduction/MainNailProduction";
import NailsOUt from "../screen/Nails/Nailproduction/NailsOut";
import NailStock from "../screen/Nails/Nailproduction/Nailstock";

//import scroove production
import MainScroovProduction  from "../screen/Nails/scrooveproduction/MainscroovProduction";
import ScroovOut  from "../screen/Nails/scrooveproduction/ScroovOut";
import ScroovStock from "../screen/Nails/scrooveproduction/Scroovstock";



//furnace import
import MainFrance from "../screen/Nails/furnace/MainFrance";
import FurnaceOut from "../screen/Nails/furnace/furnaceout"; 
import FurnaceNailsOut  from "../screen/Nails/furnace/funceNailout";
import FurnaceScrooveOut  from "../screen/Nails/furnace/furncescrooveout";
import FurnceNailstock  from "../screen/Nails/furnace/furnceNailsTock";
import FunraceScrooveStock from "../screen/Nails/furnace/furnceScrooveStock";
import FurnaceStock from "../screen/Nails/furnace/furnacestock";



//zinc import
import Mainzincplating from "../screen/Nails/zincplating/Mainzincplating";
import ZincOut    from "../screen/Nails/zincplating/zincout";    
import ZincStock from "../screen/Nails/zincplating/zincstock";
import ZinckNailOut from "../screen/Nails/zincplating/ZincNailout";
import ZincNailStock from "../screen/Nails/zincplating/ZincnailSTock";


//blackengin import
import MainBlackening  from "../screen/Nails/blackening/Mainblackening";
import BlackeningStock from "../screen/Nails/blackening/blackeningstock";
import BlackeningScrooveStock from "../screen/Nails/blackening/blackeningScrooveStock";
import BlackeningScrooveOut from "../screen/Nails/blackening/blackeningscrooveout";
import BlackeningOut from "../screen/Nails/blackening/blackeningout";

//import for nailpacking
import MainNailPacking from "../screen/Nails/NailsPacking/MainNailpacking";
import MainNailOut from "../screen/Nails/NailsPacking/Nailoutpacking";
import NailAssmOut from "../screen/Nails/NailsPacking/assmNailOut";
import NailWarehouseout from "../screen/Nails/NailsPacking/nailwarehouseout";
import NailpackingStock from "../screen/Nails/NailsPacking/nailsstockpacking";




//import for scroove packing
import MainScroovePacking from "../screen/Nails/Scroovpacking/Mainscroovepacking";
import ScoovepackOut from "../screen/Nails/Scroovpacking/ScoovepackOut";
import ScrooveStock from "../screen/Nails/Scroovpacking/Scroovepsck";


//import warehousenails
import WarehouseNail from "../screen/warehouseNail/warehouse";
import NailsIn from "../screen/warehouseNail/NailsIn";
import NailsOut from "../screen/warehouseNail/NailsOut";
import MainNailsIn from "../screen/warehouseNail/MainNailsIn";
import MainNailsout from "../screen/warehouseNail/MainNailsout";
import MainNailsstock from "../screen/warehouseNail/MainNailsstock";
import packingmaterialIN from "../screen/warehouseNail/packingmaterialIN";
import chemialIn from "../screen/warehouseNail/chemialIn";
import Dispatchitem from "../screen/warehouseNail/Dispatchitem";
import Innerbagnail from "../screen/warehouseNail/Innerbagnail";
import Outerbagnail from "../screen/warehouseNail/Outerbagnail";

import Chemicalstock from "../screen/warehouseNail/Chemicalstock";
import packingstock from "../screen/warehouseNail/packingstock";
import Nailsstock from "../screen/warehouseNail/Nailsstock";
import screwsstock from "../screen/warehouseNail/screwsstock";
import NailsImported from "../screen/warehouseNail/NailsImported";






const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);


//login
// async function Login()
async function Login(username,password,setIsLoading,Setpro,SetLogins,setUserToken,setdepartment){
  
  Setpro(true)
    let url="https://www.highgrip.in/api/signin";
   
    // data={'username':username,'passowrd':password}
    let config = {
      headers: {
        "Content-Type": "application/json",
      }
    }
    await axios.post(url,{'username':username,'password':password},config)
    .then(response=>{

      if(response.data.status){

        setIsLoading(false);
        Setpro(false);
        setUserToken(response.data.token);
        setdepartment(response.data.department);
        // console.log(response.data);
  
        data={'token':response.data.token,
              'department':response.data.department,
              'user_id':response.data.user_id}
        storeData('user',data);
      }else{
        Setpro(false);
        alert("Invalid username or password");
      }  
        // console.log(response.data.token);
        
    }).catch((err)=>{console.log(err);Setpro(false);})
  


}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}  options={({navigation})=>{
        // console.log(navigation);
        return{headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />
  </ProfileStack.Navigator>
);


//stock infor
const StockAssStack = createStackNavigator();
const StockAsStackScreen = () => (
  <StockAssStack.Navigator>
    <StockAssStack.Screen name="Stock" component={StockAs}   options={({navigation})=>{
        // console.log(navigation);
        return{title:"Stock Of Assembly",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}/>
    <StockAssStack.Screen name="Nailst" component={Nailstore} options={{title:"Stock Of Assembly Nails"}} />
    <StockAssStack.Screen name="Compolist" component={CompnetListStore} options={{title:"Stock Of Assembly Componets"}} />
    <StockAssStack.Screen
      name="Details"
      component={ComponentStockList}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  </StockAssStack.Navigator>
);


//cstock
const CStockAssStack = createStackNavigator();
const CStockAsStackScreen = () => (
  <CStockAssStack.Navigator>
    <CStockAssStack.Screen name="Stock" component={CStockAs}   options={({navigation})=>{
        // console.log(navigation);
        return{title:"Stock Of Assembly",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />
    <CStockAssStack.Screen name="Nailst" component={CNailstore} options={{title:"Stock Of Assembly Nails"}} />
    <CStockAssStack.Screen name="Compolist" component={CCompnetListStore} options={{title:"Stock Of Assembly Componets"}} />
    <CStockAssStack.Screen
      name="Details"
      component={CComponentStockList}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  </CStockAssStack.Navigator>
);



//jstock


const JStockAssStack = createStackNavigator();
const JStockAsStackScreen = () => (
  <JStockAssStack.Navigator>
    <JStockAssStack.Screen name="Stock" component={JStockAs}  options={({navigation})=>{
        // console.log(navigation);
        return{title:"Stock Of Assembly",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}/>
    <JStockAssStack.Screen name="Nailst" component={JNailstore} options={{title:"Stock Of Assembly Nails"}} />
    <JStockAssStack.Screen name="Compolist" component={JCompnetListStore} options={{title:"Stock Of Assembly Componets"}} />
    <JStockAssStack.Screen
      name="Details"
      component={JComponentStockList}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  </JStockAssStack.Navigator>
);





const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);


//stack mouding
const Moudlingstack = createStackNavigator();
const MouldStackScreen = () => (
  <Moudlingstack.Navigator>
    <Moudlingstack.Screen name="Mould" component={Moulding}   options={({navigation})=>{
        // console.log(navigation);
        return{title:"Moulding",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />
    <Moudlingstack.Screen name="IN" component={Min} options={{title:"Moulding"}} />
    <Moudlingstack.Screen name="OUT" component={Mout} options={{title:"Moulding"}} />
    <Moudlingstack.Screen name="PRESENT STOCK" component={Mpresentstock} options={{title:"Moulding"}} />
    <Moudlingstack.Screen
      name="Details"
      component={ProductDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
    
  </Moudlingstack.Navigator>
);

//Nail Ware house warehousenails
const WareNailStack = createStackNavigator();
const WareNailMainScreen = () => (
  <WareNailStack.Navigator>
    <WareNailStack.Screen name="wnm" component={WarehouseNail}   options={({navigation})=>{
        // console.log(navigation);
        return{title:"Ware House(Nails)",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />
    <WareNailStack.Screen name="NailsIN" component={NailsIn} options={{title:"Nails"}} />
    <WareNailStack.Screen name="NailsOut" component={NailsOut} options={{title:"Nails OUT"}} />  
    <WareNailStack.Screen name="mainin" component={MainNailsIn} options={{title:"Ware House IN(Nails)"}} />  
    <WareNailStack.Screen name="mainstock" component={MainNailsstock} options={{title:"Ware House STOCK(Nails)"}} />
    
    <WareNailStack.Screen name="mainout" component={MainNailsout} options={{title:"Ware House OUT(Nails)"}} /> 

    <WareNailStack.Screen name="chemicalin" component={chemialIn} options={{title:"Chemicals IN"}} /> 
    <WareNailStack.Screen name="materialin" component={packingmaterialIN} options={{title:"Packing Material IN"}} /> 
    <WareNailStack.Screen name="dispatch" component={Dispatchitem} options={{title:"Dispatch"}} />
    
    <WareNailStack.Screen name="outer" component={Outerbagnail} options={{title:"Outer bag"}} />
    <WareNailStack.Screen name="inner" component={Innerbagnail} options={{title:"Inner bag"}} />

    <WareNailStack.Screen name="chemicalstock" component={Chemicalstock} options={{title:"Chemical Stock"}} />
    <WareNailStack.Screen name="packingstock" component={packingstock} options={{title:"Packing Material Stock"}} />
    <WareNailStack.Screen name="nailstock" component={Nailsstock} options={{title:"Nails Stock"}} />
    <WareNailStack.Screen name="screwstock" component={screwsstock} options={{title:"Screw Stock"}} />  
    <WareNailStack.Screen name="nailsimported" component={NailsImported} options={{title:"Nails Imported Stock"}} />  
    
  </WareNailStack.Navigator>
);

//Assbele stack
const AssemblyStc=createStackNavigator();
const AssemblyStack=()=>(
<AssemblyStc.Navigator initialRouteName="assembly">
    <AssemblyStc.Screen name="assembly" component={Assembling}   options={({navigation})=>{
        // console.log(navigation);
        return{title:"Assembling",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />
  
   
    <AssemblyStc.Screen
      name="Details"
      component={AssemDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  
  </AssemblyStc.Navigator>
)

//cssbele stack
const CAssemblyStc=createStackNavigator();
const CAssemblyStack=()=>(
<CAssemblyStc.Navigator initialRouteName="assembly">
    <CAssemblyStc.Screen name="assembly" component={CAssembling}   options={({navigation})=>{
        // console.log(navigation);
        return{title:"Clamp Assembling",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />
  
   
    <CAssemblyStc.Screen
      name="Details"
      component={CAssemDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  
  </CAssemblyStc.Navigator>
)

//Jssbele stack
const JAssemblyStc=createStackNavigator();
const JAssemblyStack=()=>(
<JAssemblyStc.Navigator initialRouteName="assembly">
    <JAssemblyStc.Screen name="assembly" component={JAssembling}    options={({navigation})=>{
        // console.log(navigation);
        return{title:"Job Assembling",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}/>
  
   
    <JAssemblyStc.Screen
      name="Details"
      component={JAssemDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  
  </JAssemblyStc.Navigator>
)


//cpacking stack
const cpackingstack=createStackNavigator();
const cpackingStack=()=>(
<cpackingstack.Navigator initialRouteName="cpacking">
    <cpackingstack.Screen name="cpacking" component={MainPacking}  options={({navigation})=>{
        // console.log(navigation);
        return{title:"Clip Packing",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}  />
    <cpackingstack.Screen name="packingout" component={MainOUtPacking} options={{title:"Packing Out "}} />
    <cpackingstack.Screen name="packingstock" component={MainStockpacking} options={{title:"Packing Stock"}} />
    
   
    <cpackingstack.Screen
      name="Details"
      component={MainpackingDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />

<cpackingstack.Screen
      name="StockDetails"
      component={CpackingStockDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  
  </cpackingstack.Navigator>
)

//clamp packing 
const clpackingstack=createStackNavigator();
const clpackingStack=()=>(
<clpackingstack.Navigator initialRouteName="cpacking">
    <clpackingstack.Screen name="cpacking" component={CMainPacking}  options={({navigation})=>{
        // console.log(navigation);
        return{title:"Clamp Packing",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}/>
    <clpackingstack.Screen name="packingout" component={CMainOUtPacking} options={{title:"Packing Out "}} />
    <clpackingstack.Screen name="packingstock" component={CMainStockpacking} options={{title:"Packing Stock"}} />
    
   
    <clpackingstack.Screen
      name="Details"
      component={CMainpackingDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />

<clpackingstack.Screen
      name="StockDetails"
      component={CCpackingStockDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  
  </clpackingstack.Navigator>
)

//Warehhouser Stack Navition 
const wareHouseStack=createStackNavigator();
const WareHouseScreeStack=()=>(
<wareHouseStack.Navigator initialRouteName="wareMailClamp" >
    <wareHouseStack.Screen name="wareMailClamp" component={WarehouseMainClamp}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Ware House (Clip)",headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}
   
      />
    <wareHouseStack.Screen name="IN" component={MainWarehouseIn} options={{title:"Warehouse IN "}} />
    <wareHouseStack.Screen name="OUT" component={MainWarehouseOut} options={{title:"WareHouse OUT"}} />
    <wareHouseStack.Screen name="STOCK" component={MainWarehouseStock} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="inner" component={WareInner} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="outer" component={WareOutter} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="master" component={WareMaster} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="masterDouble" component={WareMasterDouble} options={{title:"WareHouse Stock"}} />
    
    <wareHouseStack.Screen name="innerstock" component={InnerStock} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="outerstock" component={OuterStock} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="masterstock" component={MasterStock} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen name="masterDoublestock" component={DobleMastStock} options={{title:"WareHouse Stock"}} />

    <wareHouseStack.Screen name="tap" component={tapin} options={{title:"Tap In"}} />
    <wareHouseStack.Screen name="tapstock" component={tapstock} options={{title:"Tap Stock"}} />
    
    <wareHouseStack.Screen name="Product" component={WareHouseProduct} options={{title:"WareHouse Stock"}} />
    <wareHouseStack.Screen
      name="Details"
      component={WarehouseStockDetails}
      options={({ route }) => ({
        title: route.params.name,
        id:route.params.id
      })}
    />
  
  </wareHouseStack.Navigator>
)

//Wired Store stack screen
const wiredstorestack=createStackNavigator();
const WiredScreeStack=()=>(
<wiredstorestack.Navigator initialRouteName="wiredstorestock" >
    <wiredstorestack.Screen name="wiredstorestock" component={MainWiredStroe}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Wired Store",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}
   
      />
    <wiredstorestack.Screen name="IN" component={Wiredstore} options={{title:"Wired IN "}} />
    <wiredstorestack.Screen name="nailin" component={NailWiredIn} options={{title:"Wired IN "}} />
    <wiredstorestack.Screen name="scruvoo" component={ScurvooWiredin} options={{title:"Wired IN "}} />
    {/* Wiredstoreout */}
    <wiredstorestack.Screen name="wiredout" component={Wiredstoreout} options={{title:"Wired Out "}} />
    {/* WiredStock */}
    <wiredstorestack.Screen name="wirestock" component={WiredStock} options={{title:"Wired Stock "}} />


   
  
  </wiredstorestack.Navigator>
)

//Nailsproduction stack
const Nailproductionstac=createStackNavigator();
const NailProdcutStack=()=>(
<Nailproductionstac.Navigator initialRouteName="nailProduction" >
    <Nailproductionstac.Screen name="nailProduction" component={MainNailsProduction}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Nail Production",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}
    
   
      />

<Nailproductionstac.Screen name="out" component={NailsOUt} options={{title:"Nails Out"}}/>
<Nailproductionstac.Screen name="stock" component={NailStock} options={{title:"Nails Stock"}}/>
  

   
  
  </Nailproductionstac.Navigator>
)


//Scroove stack screen

const SCrooveProductionSt=createStackNavigator();
const Scrooveproductstack=()=>(
<SCrooveProductionSt.Navigator initialRouteName="scrooveproduction" >
    <SCrooveProductionSt.Screen name="scrooveproduction" component={MainScroovProduction}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Screw Production",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }}
    
   
      />

<SCrooveProductionSt.Screen name="out" component={ScroovOut} options={{title:"Screw Out"}}/>
<SCrooveProductionSt.Screen name="stock" component={ScroovStock} options={{title:"Screw Stock"}}/>

  </SCrooveProductionSt.Navigator>
)


//furnace stack screen
const furnaceStackm=createStackNavigator();
const FurnaceStacks=()=>(
<furnaceStackm.Navigator initialRouteName="furnace" >
    <furnaceStackm.Screen name="furnace" component={MainFrance}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Furnace",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />

  <furnaceStackm.Screen name="out" component={FurnaceOut} options={{title:"Furnace Out"}}/>
  <furnaceStackm.Screen name="stock" component={FurnaceStock} options={{title:"Furnace Stock"}}/>

  <furnaceStackm.Screen name="nailsout" component={FurnaceNailsOut} options={{title:"Furnace Nails Out"}}/>

  <furnaceStackm.Screen name="scrooveout" component={FurnaceScrooveOut} options={{title:"Furnace Screw Out"}}/>

  <furnaceStackm.Screen name="nailsstock" component={FurnceNailstock} options={{title:"Furnace Nails Stock"}}/>

  <furnaceStackm.Screen name="scroovestock" component={FunraceScrooveStock} options={{title:"Furnace Screw Stock"}}/>


  </furnaceStackm.Navigator>
)


//Zinc stack screen
const zincstack=createStackNavigator();
const Zincstacksreen=()=>(
<zincstack.Navigator initialRouteName="furnace" >
    <zincstack.Screen name="furnace" component={Mainzincplating}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Zinc Plating",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />

  <zincstack.Screen name="out" component={ZincOut} options={{title:"Zinc Out"}}/>
  <zincstack.Screen name="stock" component={ZincStock} options={{title:"Zinc Stock"}}/>

  <zincstack.Screen name="nailsout" component={ZinckNailOut} options={{title:"Zick Nails Out"}}/>

  

  <zincstack.Screen name="nailsstock" component={ZincNailStock} options={{title:"Zick Nails Stock"}}/>

  

  </zincstack.Navigator>
)

//Blackening stack screen
const blackeningStack=createStackNavigator();
const BlackeningStacSren=()=>(
<blackeningStack.Navigator initialRouteName="furnace" >
    <blackeningStack.Screen name="furnace" component={MainBlackening}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Blackening",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />

  <blackeningStack.Screen name="out" component={BlackeningOut} options={{title:"Blackening Out"}}/>
  <blackeningStack.Screen name="stock" component={BlackeningStock} options={{title:"Blackening Stock"}}/>

  
  <blackeningStack.Screen name="scrooveout" component={BlackeningScrooveOut} options={{title:"Blackening Screw Out"}}/>


  <blackeningStack.Screen name="scroovestock" component={BlackeningScrooveStock} options={{title:"Blackening Screw Stock"}}/>


  </blackeningStack.Navigator>
)


//Nailpacking stack screen
const NailPackingStack=createStackNavigator();
const NailPakingStackScr=()=>(
<NailPackingStack.Navigator initialRouteName="nailpacking" >
    <NailPackingStack.Screen name="nailpacking" component={MainNailPacking}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Nail Packing",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />

  <NailPackingStack.Screen name="out" component={MainNailOut} options={{title:"Nail Packing Out"}}/>
  <NailPackingStack.Screen name="stock" component={NailpackingStock} options={{title:"Nail Packing Stock"}}/>
  <NailPackingStack.Screen name="asm" component={NailAssmOut} options={{title:"Nail Assembling Out"}}/>
  <NailPackingStack.Screen name="ware" component={NailWarehouseout} options={{title:"Nail Warehouse Out"}}/>

  
  {/* <NailPackingStack.Screen name="scrooveout" component={BlackeningScrooveOut} options={{title:"Blackening Scroove Out"}}/>


  <NailPackingStack.Screen name="scroovestock" component={BlackeningScrooveStock} options={{title:"Blackening Scroove Stock"}}/> */}


  </NailPackingStack.Navigator>
)


//Scroove stack screen
const ScroovePackinScrst=createStackNavigator();
const ScroovePackinStack=()=>(
<ScroovePackinScrst.Navigator initialRouteName="nailpacking" >
    <ScroovePackinScrst.Screen name="nailpacking" component={MainScroovePacking}   
      options={({navigation})=>{
        // console.log(navigation);
        return{title:"Screw Packing",
          headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image  source={require("../assets/menu.png")} style={{width:25,height:20,marginLeft:10}}/>
          </TouchableOpacity> 
        )}
      }} />

  <ScroovePackinScrst.Screen name="out" component={ScoovepackOut} options={{title:"Screw Packing Out"}}/>
  <ScroovePackinScrst.Screen name="stock" component={ScrooveStock} options={{title:"Screw Packing Stock"}}/>
  

  
 


  </ScroovePackinScrst.Navigator>
)




//Moudling screen
const Mould = createDrawerNavigator();
const MouldingScreen = () => (
  <Mould.Navigator initialRouteName="Mould">
    <Mould.Screen name="Mould" component={MouldStackScreen} options={{title:"Moulding"}} />
    <Mould.Screen name="Profile" component={ProfileStackScreen} />
  </Mould.Navigator>
);

//warehouse screen
const WareNail=createDrawerNavigator();
const WareNailScreen=()=>(
  <WareNail.Navigator initialRouteName="WareNail">
    <WareNail.Screen name="WareNail" component={WareNailMainScreen} options={{title:"Ware House Nails"}} />
    <WareNail.Screen name="Profile" component={ProfileStackScreen} />
  </WareNail.Navigator>

);

//assemblying screen
const AssemblyScr=createDrawerNavigator();
const AssemblyScreen=()=>(
  <AssemblyScr.Navigator initialRouteName="AssemblyScr">
    <AssemblyScr.Screen name="AssemblyScr" component={AssemblyStack} options={{title:"Assembling "}} />
    <AssemblyScr.Screen name="Profile" component={ProfileStackScreen} />
    <AssemblyScr.Screen name="Status" component={StockAsStackScreen} options={{title:"Stock"}} />
  </AssemblyScr.Navigator>
)


//Cassemblying screen
const CAssemblyScr=createDrawerNavigator();
const CAssemblyScreen=()=>(
  <CAssemblyScr.Navigator initialRouteName="CAssemblyScr">
    <CAssemblyScr.Screen name="CAssemblyScr" component={CAssemblyStack} options={{title:"Assembling "}} />
    <CAssemblyScr.Screen name="Profile" component={ProfileStackScreen} />
    <CAssemblyScr.Screen name="Status" component={CStockAsStackScreen} options={{title:"Stock"}} />
  </CAssemblyScr.Navigator>
)



//jassemblying screen
const JAssemblyScr=createDrawerNavigator();
const JAssemblyScreen=()=>(
  <JAssemblyScr.Navigator initialRouteName="JAssemblyScr">
    <JAssemblyScr.Screen name="JAssemblyScr" component={JAssemblyStack} options={{title:"Assembly "}} />
    <JAssemblyScr.Screen name="Profile" component={ProfileStackScreen} />
    <JAssemblyScr.Screen name="Status" component={JStockAsStackScreen} options={{title:"Stock"}} />
  </JAssemblyScr.Navigator>
)


//cpaking screen
const Cpacking=createDrawerNavigator();
const CpackingScreen=()=>(
  <Cpacking.Navigator initialRouteName="Cpacking">
    <Cpacking.Screen name="Cpacking" component={cpackingStack} options={{title:"Packing "}} />
    <Cpacking.Screen name="Profile" component={ProfileStackScreen} />
   
  </Cpacking.Navigator>
)


//clamp packing

const Clpacking=createDrawerNavigator();
const ClpackingScreen=()=>(
  <Clpacking.Navigator initialRouteName="Clpacking">
    <Clpacking.Screen name="Clpacking" component={clpackingStack} options={{title:"Packing "}} />
    <Clpacking.Screen name="Profile" component={ProfileStackScreen} />
   
  </Clpacking.Navigator>
)

//warehouse Drower
const warehouseDr=createDrawerNavigator();
const WereHouseScreen=()=>(
  <warehouseDr.Navigator initialRouteName="warehouseDr" >
    <warehouseDr.Screen name="warehouseDr" component={WareHouseScreeStack} options={{title:"Ware House "}} />
    <warehouseDr.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </warehouseDr.Navigator>
)

//wirdstore Drower
const wirdstoreD=createDrawerNavigator();
const WiredScreen=()=>(
  <wirdstoreD.Navigator initialRouteName="wirdstoreD" >
    <wirdstoreD.Screen name="wirdstoreD" component={WiredScreeStack} options={{title:"Wired Store "}} />
    <wirdstoreD.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </wirdstoreD.Navigator>
)

//nailproduction drawer
const Nailprodcutdro=createDrawerNavigator();
const NailProdcutDrowe=()=>(
  <Nailprodcutdro.Navigator initialRouteName="Nailprodcutdro" >
    <Nailprodcutdro.Screen name="Nailprodcutdro" component={NailProdcutStack} options={{title:"Nail "}} />
    <Nailprodcutdro.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </Nailprodcutdro.Navigator>
)

//Scroove production drawer
const Scroovedraw=createDrawerNavigator();
const ScroovescreenDraw=()=>(
  <Scroovedraw.Navigator initialRouteName="Scroovedraw" >
    <Scroovedraw.Screen name="Scroovedraw" component={Scrooveproductstack} options={{title:"Screw  "}} />
    <Scroovedraw.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </Scroovedraw.Navigator>
)

//furnace drawer
const furnacedraw=createDrawerNavigator();
const FurnaceDrawScr=()=>(
  <furnacedraw.Navigator initialRouteName="furnacedraw" >
    <furnacedraw.Screen name="furnacedraw" component={FurnaceStacks} options={{title:"Furnace  "}} />
    <furnacedraw.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </furnacedraw.Navigator>
)

//Zinc drawer
const zincdrawer=createDrawerNavigator();
const ZincdrawerScr=()=>(
  <zincdrawer.Navigator initialRouteName="zincdrawer" >
    <zincdrawer.Screen name="zincdrawer" component={Zincstacksreen} options={{title:"Zinc Plating  "}} />
    <zincdrawer.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </zincdrawer.Navigator>
)


//blackening drawer
const blackenginDraw=createDrawerNavigator();
const BlackenginDrScr=()=>(
  <blackenginDraw.Navigator initialRouteName="blackenginDraw" >
    <blackenginDraw.Screen name="blackenginDraw" component={BlackeningStacSren} options={{title:"Blackening   "}} />
    <blackenginDraw.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </blackenginDraw.Navigator>
)

//nails packing drawer
const NailPakcingdrow=createDrawerNavigator();
const NailPackingDrowsc=()=>(
  <NailPakcingdrow.Navigator initialRouteName="NailPakcingdrow" >
    <NailPakcingdrow.Screen name="NailPakcingdrow" component={NailPakingStackScr} options={{title:"Nail Packing   "}} />
    <NailPakcingdrow.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </NailPakcingdrow.Navigator>
)


//scroove packing drawer
const ScroovPackDraw=createDrawerNavigator();
const ScroovePackdrs=()=>(
  <ScroovPackDraw.Navigator initialRouteName="ScroovPackDraw" >
    <ScroovPackDraw.Screen name="ScroovPackDraw" component={ScroovePackinStack} options={{title:"Screw Packing   "}} />
    <ScroovPackDraw.Screen name="Profile" component={ProfileStackScreen}  />
    
   
  </ScroovPackDraw.Navigator>
)






const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken,department }) => {
  
  if(department=='moulding'){
    return(
  
      <RootStack.Navigator headerMode="none">
        
        
        
        {userToken ?  (
          <RootStack.Screen
            name="App"
            component={MouldingScreen}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: false
            }}
          />
        )}
      </RootStack.Navigator>
    )  
  }else if(department=='wearhousenail'){
    return(

    <RootStack.Navigator headerMode="none">
        
        
        
        {userToken ?  (
          <RootStack.Screen
            name="App"
            component={WareNailScreen}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: false
            }}
          />
        )}
      </RootStack.Navigator>
    )
  }else if(department=='assembling'){
    return(
      <RootStack.Navigator headerMode="none">
        
        
        
        {userToken ?  (
          <RootStack.Screen
            name="App"
            component={AssemblyScreen}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: false
            }}
          />
        )}
      </RootStack.Navigator>
    )

  }else if(department=="cassembling"){
    return(
      <RootStack.Navigator headerMode="none">
        
        
        
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={CAssemblyScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )
  }else if(department=="jassembling"){
      return(
        <RootStack.Navigator headerMode="none">
        
        
        
        {userToken ?  (
          <RootStack.Screen
            name="App"
            component={JAssemblyScreen}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
              animationEnabled: false
            }}
          />
        )}
      </RootStack.Navigator>
      )
  }else if(department=="cpacking"){
      return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={CpackingScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )
  }else if(department=="clampacking"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={ClpackingScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )
  }else if(department=="wearhouse"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={WereHouseScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="wiredstore"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={WiredScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="nailsproduction"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={NailProdcutDrowe}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="scrooveproduction"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={ScroovescreenDraw}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="furnace"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={FurnaceDrawScr}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="zinc"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={ZincdrawerScr}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="blackening"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={BlackenginDrScr}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="nailpacking"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={NailPackingDrowsc}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }else if(department=="scroovepacking"){
    return(
      <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={ScroovePackdrs}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
    )

  }
    else{

    return(
    
    <RootStack.Navigator headerMode="none">
      
      
      
      {userToken ?  (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
  )}


  }




export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [department,setdepartment]=React.useState(null);
  const [setLogin,SetLogins]=React.useState(null);

 

  const authContext = React.useMemo(() => {

    

    return {
      signIn: (user,password,Setpro) => {
          // console.log(user+password);

         Login(user,password,setIsLoading,Setpro,SetLogins,setUserToken,setdepartment);
        //  console.log(token);
         
        
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        cleardata().then((val)=>console.log(val));
        setUserToken(null);
      }
    };
  }, []);


  React.useEffect(() => {
    getData('user').then((val)=>{
      if(val){

        setUserToken(val.token)
        setdepartment(val.department)
        
      }
    }).catch(e=>console.log(e));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    );
  }

  if(setLogin){
    <View>
      <ActivityIndicator />
    </View>
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} department={department} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
