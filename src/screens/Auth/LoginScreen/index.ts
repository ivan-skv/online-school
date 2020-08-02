import { connect } from 'react-redux'
import LoginScreen from './LoginScreen'
import { IStore } from 'src/redux/interfaces'
import { user } from 'src/redux'

export default connect(
  (state: IStore) => ({
    user: state.user,
    schoolInfo: state.schoolInfo,
  }),
  {
    setUserGuest: user.userActions.setUserGuest,
    setUserStudent: user.userActions.setUserStudent,
    setUserEmployee: user.userActions.setUserEmployee,
    setUserParent: user.userActions.setUserParent,
    loginUser: user.userActions.loginUser,
    sendRecoveryEmail: user.userActions.sendRecoveryEmail,
  }
)(LoginScreen);
