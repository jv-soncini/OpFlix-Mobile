import Loginzada from "./Pages/Login"
import Profilezada from "./Pages/Profile"
import Mainzada from "./Pages/Main"
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";


const AuthStack = createStackNavigator({
    Sing: { screen: Loginzada }
});

const MainNav = createBottomTabNavigator(
    {
        Main: {
            screen: Mainzada
        },
        Profile: {
            screen: Profilezada
        }
    },
    {
        initialRouteName: 'Main',
        tabBarOptions: {
            activeBackgroundColor: '#f5f5f5',
            showIcon: true,
            showLabel: false,

        }
    }
)

export default createAppContainer(
    createSwitchNavigator(
        {
            MainNav,
            AuthStack
        },
        {
            initialRouteName: 'AuthStack'
        }
    )
)