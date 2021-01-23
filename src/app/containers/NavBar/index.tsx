/**
 *
 * NavBar
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { NavBar as NavBarComponent } from '../../components/NavBar/index';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { logoutSaga, signinSaga, signupSaga } from '../../../store/user/saga';
import { reducer, sliceKey } from '../../../store/user/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/selectors';
interface Props {}

export function NavBar(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: signupSaga });
  useInjectSaga({ key: sliceKey, saga: signinSaga });
  useInjectSaga({ key: sliceKey, saga: logoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useSelector(selectUser);

  return <NavBarComponent isLoggedin={!!user.userInfo} />;
}
