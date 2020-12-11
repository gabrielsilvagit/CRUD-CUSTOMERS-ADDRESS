import styled, { css } from 'styled-components';
import { darken } from 'polished';

const sizes = {
  small: css`
    padding: ${props => props.theme.button.sizes.small.padding};
    font-size: ${props => props.theme.button.sizes.small.fontSize};
    height: ${props => props.theme.button.sizes.small.height};
    min-height: ${props => props.theme.button.sizes.small.height};
  `,
  default: css`
    padding: ${props => props.theme.button.sizes.default.padding};
    font-size: ${props => props.theme.button.sizes.default.fontSize};
    height: ${props => props.theme.button.sizes.default.height};
    min-height: ${props => props.theme.button.sizes.default.height};
  `,
  large: css`
    padding: ${props => props.theme.button.sizes.large.padding};
    font-size: ${props => props.theme.button.sizes.large.fontSize};
    height: ${props => props.theme.button.sizes.large.height};
    min-height: ${props => props.theme.button.sizes.large.height};
  `,
};

const colors = {
  primary: css`
    background-color: ${props => props.theme.button.colors.primary.bg};
    color: ${props => props.theme.button.colors.primary.font};
    > span.btn-text {
      color: ${props => props.theme.button.colors.primary.font};
    }

    &:hover {
      background-color: ${props => darken(0.05, props.theme.button.colors.primary.bg)};
    }
  `,
  success: css`
    background-color: ${props => props.theme.button.colors.success.bg};
    color: ${props => props.theme.button.colors.success.font};
    > span.btn-text {
      color: ${props => props.theme.button.colors.success.font};
    }

    &:hover {
      background-color: ${props => darken(0.05, props.theme.button.colors.success.bg)};
    }
  `,
  danger: css`
    background-color: ${props => props.theme.button.colors.danger.bg};
    color: ${props => props.theme.button.colors.danger.font};
    > span.btn-text {
      color: ${props => props.theme.button.colors.danger.font};
    }

    &:hover {
      background-color: ${props => darken(0.05, props.theme.button.colors.danger.bg)};
    }
  `,
  warning: css`
    background-color: ${props => props.theme.button.colors.warning.bg};
    color: ${props => props.theme.button.colors.warning.font};
    > span.btn-text {
      color: ${props => props.theme.button.colors.warning.font};
    }

    &:hover {
      background-color: ${props => darken(0.05, props.theme.button.colors.warning.bg)};
    }
  `,
  info: css`
    background-color: ${props => props.theme.button.colors.info.bg};
    color: ${props => props.theme.button.colors.info.font};
    > span.btn-text {
      color: ${props => props.theme.button.colors.info.font};
    }

    &:hover {
      background-color: ${props => darken(0.05, props.theme.button.colors.info.bg)};
    }
  `,
  default: css`
    background-color: ${props => props.theme.button.colors.default.bg};
    color: ${props => props.theme.button.colors.default.font};
    > span.btn-text {
      color: ${props => props.theme.button.colors.default.font};
    }

    &:hover {
      background-color: ${props => darken(0.05, props.theme.button.colors.default.bg)};
    }
  `,
};

export const Container = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.15s ease;

  border: 0;
  font-weight: normal;
  width: max-content;

  & > span.btn-text {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    margin: 0;
    opacity: 1;

    transition: opacity 300ms ease;

    svg {
      &:first-child {
        margin-right: 5px;
      }

      &:last-child {
        margin-left: 5px;
      }
    }
  }

  .loader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 300ms ease;
  }

  &.btn-block {
    width: 100%;
  }

  &.btn-loading {
    >span {
      opacity: 0;
    }
    .loader {
      opacity: 1;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${props =>
      props.theme.button.colors[props.color]
        ? props.theme.button.colors[props.color].bg
        : props.theme.button.colors.default.bg};

    &:hover {
      background-color: ${props =>
        props.theme.button.colors[props.color]
          ? props.theme.button.colors[props.color].bg
          : props.theme.button.colors.default.bg};
    }
  }

  ${props => (colors[props.color] ? colors[props.color] : colors.default)}
  ${props => (sizes[props.size] ? sizes[props.size] : sizes.default)}

  ${props =>
    props.loading &&
    css`
      svg {
        margin-right: 5px;
        animation: spin 2s linear infinite;
      }
    `}

  @keyframes spin {
    100% {
        transform: rotate(360deg);
    }
  }
`;
