import React from "react";
import { View, Text } from "react-native";

function App(){
  return(
  <View style={{alignItems: 'center', padding: '10px',backgroundColor: 'rgb(17, 193, 216)', height: "100%", width: "300px"}}>
    <View style={{marginBottom: "10px",borderTopRightRadius: "20px", borderTopStartRadius: "20px" , borderWidth:"5px", borderBlockColor:'#000',backgroundColor: 'forestgreen', height: "20%", width: "80%"}}>
      <Text style={{fontSize: 20}} >COMPONENTE VIEW</Text>
   </View>
    <View style={{marginBottom: "10px", borderWidth:"5px", borderBlockColor:'#000', backgroundColor: 'pink', height: "60%", width: "80%"}}>
      <Text style={{fontSize: 30}} >CONTEÚDO</Text>
   </View>
   <View style={{borderWidth:"5px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", borderBlockColor:'#000', backgroundColor: 'orange', height: "10%", width: "80%"}}>
      <Text>Nossso nome</Text>
      <Text>27/02/2026</Text>
      
   </View>
  </View>
  );
}


export default App; 
