import React from "react";
import styled from "styled-components";

import { ThemeContainer } from "../../styles/styles";
import { fontSizes } from "../../styles/typography";
import NavLink from "./NavLink";

const Container = styled.div`
  display: flex;
  flex: 0;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  background-color: ${({ theme }: ThemeContainer) => theme.nav.bg};
  border-radius: 0 110px 0 0;
  z-index: 1;
`;

const Logo = styled.div`
  padding: 75px 60px 40px;
  font-weight: bold;
  font-size: ${fontSizes.large};
  color: ${({ theme }: ThemeContainer) => theme.nav.logoColor};
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 60px;
`;

const ProfilePicture = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 0 40px 40px 40px;
  margin-right: 7px;
  background-color: ${({ theme }: ThemeContainer) => theme.nav.profile.imageBg};
  margin-bottom: 17px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 80px;
    width: 80px;
    left: 7px;
    top: 7px;
    border-radius: 0 40px 40px 40px;
    background-color: ${({ theme }: ThemeContainer) =>
      theme.nav.profile.shadowBg};
    z-index: -1;
  }
`;

const WelcomeMessage = styled.div`
  font-size: ${fontSizes.small};
  color: ${({ theme }: ThemeContainer) => theme.nav.profile.text};
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-size: ${fontSizes.large};
  color: ${({ theme }: ThemeContainer) => theme.nav.profile.text};
`;

const Navigation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0 40px;
`;

interface Props {}

const Nav: React.VoidFunctionComponent<Props> = ({}) => {
  return (
    <Container>
      <div>
        <Logo>MoneyFlow</Logo>
        <ProfileContainer>
          <ProfilePicture />
          <WelcomeMessage>Welcome back</WelcomeMessage>
          <UserName>Michael Gregson</UserName>
        </ProfileContainer>
      </div>
      <Navigation>
        <div>
          <NavLink to="/" label="Dashboard" icon="dashboard" iconType="solid" />
          <NavLink
            to="/record-payment"
            label="Record Payment"
            icon="message-square-add"
          />
          <NavLink
            to="/tracking-expenses"
            label="Tracking Expenses"
            icon="notepad"
          />
        </div>
        <NavLink
          to="/log-out"
          label="Log out"
          icon="log-out"
          onClick={(e) => {
            e.preventDefault();

            alert("log out");
          }}
        />
      </Navigation>
    </Container>
  );
};

export default Nav;
