import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/categoriesScreen';
import CategoryMealsScreen from './screens/categoryMealsScreen';
import MealDetailScreen from './screens/mealDetailScreen';
import FavoriteScreen from './screens/favoriteScreen';
import { Ionicons } from '@expo/vector-icons'; 

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
  return (
  <Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#ccc',
  }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{title:'All Categories', drawerIcon:({color,size})=>(<Ionicons color={color} size={size} name='list'/>)}}/>
    <Drawer.Screen name='Favorites' component={FavoriteScreen} options={{drawerIcon:({color,size})=>(<Ionicons color={color} size={size} name='star'/>)}}/>
  </Drawer.Navigator>)
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        {/* 作用于所有screens */}
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen 
            name='Drawer' 
            component={DrawerNavigator} 
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name='MealOverview' 
            component={CategoryMealsScreen}
            /* options={({route, navigation})=>{
              const catId=route.params.categoryId  //c1
              return {
                title:catId,
              }
            }} */
          />
          <Stack.Screen 
            name='MealDetail' 
            component={MealDetailScreen}
            options={{title:'About the Meal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
