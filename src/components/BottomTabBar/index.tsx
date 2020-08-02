import { connect } from 'react-redux'
import BottomTabBar from './BottomTabBar'
import { IStore } from 'src/redux/interfaces';

export default connect(
  (state: IStore) => ({
    user: state.user,
  }),
  {}
)(BottomTabBar);

