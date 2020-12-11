import styled, { createGlobalStyle } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const MenuGlobalStyle = createGlobalStyle`
  .ant-menu{
    height: 100%;
  }

  .ant-menu-vertical.ant-menu-sub, .ant-menu-vertical-left.ant-menu-sub, .ant-menu-vertical-right.ant-menu-sub  {
    padding: 15px 0;
    border-radius: 7px;
  }

  .ant-menu-submenu-popup {
    border-radius: 7px;
  }

  .ant-menu-horizontal {
    line-height: 70px;
    border-bottom: 0;

    .ant-menu-item {
      top: 0;
    }
  }

  .ant-menu-submenu-title {
    display:flex;
    align-items: center;

    .ant-menu-submenu-caret{
      margin-right: 0;
      margin-left: 3px;
      margin-top: -2px;
      transition: transform 0.3s ease;
    }
  }


  .ant-menu-item, .ant-menu-submenu-title {
    color: #666;
    opacity: 0.7;

    svg {
      font-size: 16px;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .ant-menu-item > a {
    display: flex;
    align-items: center;
  }

  .ant-menu-submenu-open {
    .ant-menu-submenu-caret{
      transform: rotate(180deg);
    }
  }

  .ant-menu-submenu-open > .ant-menu-submenu-title, .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected,
  .ant-menu-item:hover, .ant-menu-item-active, .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
    color: ${props => props.theme.color1};
    border-color: transparent;
    opacity: 1;
  }

  .ant-menu-item-selected > a:hover, .ant-menu-item-selected > a, .ant-menu-item > a:hover, .ant-menu-item > a:active, .ant-menu-horizontal > .ant-menu-item > a:hover{
    color: ${props => props.theme.color7};
    border-color: transparent;
    opacity: 1;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #f0f0f0;
  }

  .ant-divider {
    margin: 0;
  }

  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title {
    margin-bottom: 0;
    margin-top: 0;
  }
  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 0;
  }

  .ant-menu-item > button  {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    padding: 0;
    height: 40px;
    width: 100%;
    margin-right: 5px;

    color: #666;
    opacity: 1;

    &:hover {
      background-color: transparent;
    }

    svg {
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
