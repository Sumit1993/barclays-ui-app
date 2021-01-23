/**
 *
 * NavBar
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { NavBar as NavBarComponent } from '../../components/NavBar/index';
interface Props {}

export function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <NavBarComponent />;
}
