import { connect } from 'react-redux'
import LoginScreen from './LoginScreen'
import { IStore } from 'src/redux/interfaces'
import { user } from 'src/redux'

export default connect(
  (state: IStore) => ({
    user: state.user,
  }),
  {
    setUserGuest: user.userActions.setUserGuest,
    setUserStudent: user.userActions.setUserStudent,
    setUserParent: user.userActions.setUserParent,
    setUserEmployee: user.userActions.setUserEmployee,
  }
)(LoginScreen);
