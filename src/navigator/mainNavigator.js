import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem197888Navigator from '../features/Additem197888/navigator';
import Maps197884Navigator from '../features/Maps197884/navigator';
import UserProfile197880Navigator from '../features/UserProfile197880/navigator';
import BlankScreen0197857Navigator from '../features/BlankScreen0197857/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem197888: { screen: Additem197888Navigator },
Maps197884: { screen: Maps197884Navigator },
UserProfile197880: { screen: UserProfile197880Navigator },
BlankScreen0197857: { screen: BlankScreen0197857Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
