import { connect } from 'react-redux'
import LoadingScreen from './LoadingScreen'
import { IStore } from 'src/redux/interfaces'

export default connect(
  (state: IStore) => ({
    user: state.user,
  }),
  {}
)(LoadingScreen)