import { createStackNavigator, createAppContainer } from "react-navigation";
import ScreenImage from './screen/ScreenImage';
import ScreenListImages from './screen/ScreenListImages';

const AppNavigator = createStackNavigator(
    {
        ScreenListImages: ScreenListImages,
        ScreenImage: ScreenImage,
    },
    {
        initialRouteName: 'ScreenListImages',
    }
);

export default createAppContainer(AppNavigator);