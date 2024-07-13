import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewTask from "./screens/NewTask";

export default function App() {
  const Stack = createStackNavigator();   
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home"    component={Home}/>
          <Stack.Screen name="Login"   component={Login}/>
          <Stack.Screen name="NewTask" component={NewTask}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>  
  );
}