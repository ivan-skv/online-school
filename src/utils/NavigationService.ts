import { NavigationActions, NavigationContainerComponent } from 'react-navigation';

let navigator: NavigationContainerComponent | null = null;

const setTopLevelNavigator = (navigatorRef: NavigationContainerComponent) => {
  navigator = navigatorRef;
};

const navigate = (routeName: string, params?: any) => {
  if (!navigator) return;
  navigator.dispatch(
    NavigationActions.navigate({ routeName, params }),
  );
};

const back = () => {
  if (!navigator) return;
  navigator.dispatch(
    NavigationActions.back(),
  );
};

const currentRouteName = () => {
  if (!navigator) return;
  let { nav: value } = navigator.state as { nav: any };
  while (value.index !== undefined) {
    value = value.routes[value.index];
  }
  return value.routeName;
};

const currentRouteParams = () => {
  if (!navigator) return;
  let { nav: value } = navigator.state as { nav: any };
  while (value.index !== undefined) {
    value = value.routes[value.index];
  }
  return value.params;
};

// add other navigation functions that you need and export them

export default {
  back,
  navigate,
  setTopLevelNavigator,
  currentRouteName,
  currentRouteParams,
};
