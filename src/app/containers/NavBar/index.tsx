/**
 *
 * NavBar
 *
 */

import * as React from 'react';

import { NavBar as NavBarComponent } from '../../components/NavBar/index';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { signinSaga } from '../../../store/user/saga';
import { reducer, sliceKey } from '../../../store/user/slice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/selectors';
import { useHistory } from 'react-router-dom';

interface Props {}

export function NavBar(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: signinSaga });

  const user = useSelector(selectUser);
  const history = useHistory();

  React.useEffect(() => {
    if (!user.userInfo) {
      history.replace('/signup');
    }
  }, [user]);

  return <NavBarComponent isLoggedin={!!user.userInfo} />;
}
