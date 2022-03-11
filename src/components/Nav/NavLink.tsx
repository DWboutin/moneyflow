import React, { SyntheticEvent } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { ThemeContainer } from "../../styles/styles";
import { fontSizes } from "../../styles/typography";
import Boxicon, { BoxiconTypes } from "../BoxIcons/BoxIcons";

const Container = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 24px;
  align-items: center;
  padding-left: 60px;
  margin: 5px 0;
  color: ${({ theme }: ThemeContainer) => theme.nav.navigation.normal.text};
  text-decoration: none;
  font-size: ${fontSizes.normal};
  transition: all
    ${({ theme }: ThemeContainer) =>
      `${theme.animation.timing} ${theme.animation.easeInOutQuart}`};

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background-color: ${({ theme }: ThemeContainer) =>
      theme.nav.navigation.normal.icon};
    transition: all
      ${({ theme }: ThemeContainer) =>
        `${theme.animation.timing} ${theme.animation.easeInOutQuart}`};
  }

  & > .bx {
    margin-right: 10px;
    color: ${({ theme }: ThemeContainer) => theme.nav.navigation.normal.icon};
    transition: all
      ${({ theme }: ThemeContainer) =>
        `${theme.animation.timing} ${theme.animation.easeInOutQuart}`};
  }

  &:hover {
    color: ${({ theme }: ThemeContainer) => theme.nav.navigation.hover.text};

    &::after {
      width: 5px;
      background-color: ${({ theme }: ThemeContainer) =>
        theme.nav.navigation.hover.icon};
    }
    & > .bx {
      color: ${({ theme }: ThemeContainer) => theme.nav.navigation.hover.icon};
    }
  }

  &.active {
    color: ${({ theme }: ThemeContainer) => theme.nav.navigation.active.text};

    &::after {
      width: 5px;
      background-color: ${({ theme }: ThemeContainer) =>
        theme.nav.navigation.active.icon};
    }
    & > .bx {
      color: ${({ theme }: ThemeContainer) => theme.nav.navigation.active.icon};
    }
  }
`;

export interface Props {
  to: string;
  icon: string;
  iconType?: BoxiconTypes;
  label: string;
  onClick?: (e: SyntheticEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.VoidFunctionComponent<Props> = ({
  to,
  icon,
  iconType,
  label,
  onClick,
}) => {
  return (
    <Container to={to} activeClassName="active" onClick={onClick}>
      <Boxicon name={icon} size="small" type={iconType} />
      <span>{label}</span>
    </Container>
  );
};

export default NavLink;
