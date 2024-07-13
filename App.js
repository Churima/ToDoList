import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewTask from "./screens/NewTask";
import { initializeApp } from "firebase/app";

export default function App() {
  const Stack = createStackNavigator();   
  
  const firebaseConfig = {
    apiKey: "AIzaSyDaTXE9dQEciwCOZb_Y6lwKvQGbrNMf-mQ",
    authDomain: "apptodolist-f166d.firebaseapp.com",
    projectId: "apptodolist-f166d",
    storageBucket: "apptodolist-f166d.appspot.com",
    messagingSenderId: "895582634805",
    appId: "1:895582634805:web:5ddcaf76577faa65aac27c"
  };

  const app = initializeApp(firebaseConfig);

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