import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Jose Gerald
      </SectionTitle>
      <SectionText>
        I'm a computer engineering student. I love writing code, solving
        problems as well as automating stuff, and building software.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
