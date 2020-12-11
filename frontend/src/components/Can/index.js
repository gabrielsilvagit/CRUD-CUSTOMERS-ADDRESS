import React from 'react';
import { useSelector } from 'react-redux';

export default function Can({ children, permission, role }) {
  const { permissions: permissionList, roles: roleList } = useSelector(state => state.user);
  const checkAuth = (permission, role) => {
    let auth = false;
    if (roleList && !roleList.includes('@superAdmin')) {
      if (role) {
        auth = roleList && roleList.includes(role);
      } else if (permission) {
        auth = permissionList && permissionList.includes(permission);
      } else {
        auth = false;
      }
    } else {
      auth = true;
    }

    return auth;
  };
  return (checkAuth(permission, role) && children) || null;
}
