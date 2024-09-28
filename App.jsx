import { Text, View } from "react-native"
import SecComp from "./Components/SecComp"

const App =()=>{
  return(
  <>
    <View style={{backgroundColor:"red", height:300,justifyContent:"center", alignItems:"center"}} >
    <Text style={{fontSize:54,color:"white",fontWeight:"bold"}}>
     Ayela
    </Text>
    </View>
    <SecComp/>
  </>

  )
}

export default App