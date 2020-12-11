import React from 'react';
import { Menu as AntMenu } from 'antd';
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UserInfo from '~/pages/_partials/UserInfo';
import Button from '~/components/Button';
import { signOutRequest } from '~/store/modules/auth/actions';

import { MenuGlobalStyle, Nav } from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Menu() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const userName = useSelector(state => (state.user.profile ? state.user.profile.name : null));

  function handleSignOut() {
    dispatch(signOutRequest());
  }

  const MenuItem = ({ permission = null, role = null, children, ...props }) => {
    return <AntMenu.Item {...props}>{children}</AntMenu.Item>;
  };

  const SubMenu = ({ permission = null, role = null, children, ...props }) => {
    return <AntMenu.SubMenu {...props}>{children}</AntMenu.SubMenu>;
  };

  const renderSubMenuTitle = label => {
    return (
      <>
        <span>{label}</span>
        <MdKeyboardArrowDown size={13} className="ant-menu-submenu-caret" />
      </>
    );
  };

  const renderMenu = item => {
    const { type } = item;
    if (type === 'divider') {
      return <AntMenu.Divider key={item.key} />;
    } else if (type === 'sub') {
      return (
        <SubMenu key={item.key} permission={item.permission} title={renderSubMenuTitle(item.label)}>
          {item.children.map(subItem => renderMenu(subItem))}
        </SubMenu>
      );
    } else if (type === 'rightSub') {
      return (
        <SubMenu key={item.key} permission={item.permission} title={item.label}>
          {item.children.map(subItem => renderMenu(subItem))}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem key={item.key} permission={item.permission}>
          {//TODO: Converter o Link com click para Button
          item.click ? (
            <Button onClick={item.click}>
              {item.icon && item.icon}
              {item.label}
            </Button>
          ) : (
            <Link to={item.url}>
              {item.icon && item.icon}
              {item.label}
            </Link>
          )}
        </MenuItem>
      );
    }
  };

  const menuItems = [
    {
      type: 'item',
      key: 'customers',
      label: t('menus:customers'),
      url: '/customers',
    },
  ];

  return (
    <>
      <MenuGlobalStyle />
      <Nav>
        <AntMenu mode="horizontal" defaultSelectedKeys={['cadastros']}>
          {menuItems.map(item => renderMenu(item))}
        </AntMenu>
      </Nav>
      <UserInfo>
        <AntMenu mode="horizontal" defaultSelectedKeys={['perfil']}>
          <AntMenu.SubMenu key="perfil" title={renderSubMenuTitle(userName)}>
            <AntMenu.Item key="logout" onClick={handleSignOut}>
              <AiOutlineLogout /> {t('menus:user_logout')}
            </AntMenu.Item>
          </AntMenu.SubMenu>
        </AntMenu>
      </UserInfo>
    </>
  );
}
