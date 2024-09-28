import { Image, ScrollView, Text, TextInput, View } from "react-native";
import SecComp from "./Components/SecComp";
import flower from './flowers.webp'

const App = () => {
  return (
    <>
      <ScrollView>
        {/* <View style={{ backgroundColor: "red", height: 300, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 54, color: "white", fontWeight: "bold" }}>
            Ayela
          </Text>
        </View> */}
        <Image style={{width:500,height:250}} source={{uri:"https://i.pinimg.com/736x/68/8d/d3/688dd325dbbdc238f4b70caffe77a5af.jpg"}}/>
        <Image style={{ width: 500, height: 300 }} source={flower} />
        <Image style={{ width: 500, height: 300 }} source={require('./flower1.jpg')} />
     
       <TextInput multiline/>
      
        <SecComp />
        
      </ScrollView>
    </>
  );
};

export default App;
