/**
 *
 * NavBar
 *
 */

import * as React from 'react';

import { NavBar as NavBarComponent } from '../../components/NavBar/index';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { signinSaga } from '../../../store/user/saga';
import {
  reducer as reducer1,
  sliceKey as sliceKey1,
} from '../../../store/user/slice';
import {
  cartActions,
  reducer as reducer2,
  sliceKey as sliceKey2,
} from '../../../store/cart/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/selectors';
import { useHistory } from 'react-router-dom';
import { getCartSaga } from '../../../store/cart/saga';

interface Props {}

export function NavBar(props: Props) {
  useInjectReducer({ key: sliceKey1, reducer: reducer1 });
  useInjectSaga({ key: sliceKey1, saga: signinSaga });
  useInjectReducer({ key: sliceKey2, reducer: reducer2 });
  useInjectSaga({ key: sliceKey2, saga: getCartSaga });

  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!user.userInfo) {
      history.replace('/signup');
    }
    dispatch(cartActions.getCart());
  }, []);

  return <NavBarComponent isLoggedin={!!user.userInfo} />;
}
