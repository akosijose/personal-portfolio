import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:josegerald0307@protonmail.com">
            josegerald0307@protonmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>If you can't find a way, Create one.</Slogan>
        </CompanyContainer>
        <LinkColumn>
          <LinkTitle>Follow me:</LinkTitle>
          <SocialContainer>
            <SocialIcons target="_blank" href="https://github.com/akosijose">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              target="_blank"
              href="https://www.linkedin.com/in/jose-gerald-lumbao-2a1077215/"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons
              target="_blank"
              href="https://www.instagram.com/_josegerald/"
            >
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </LinkColumn>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
