"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import { ITeamDT } from "@/types/team-d-t";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import TeamDetailsArea from "@/components/team/team-details-area";
import FooterOne from "@/layouts/footers/footer-one";


// prop type 
type IProps = {
  item: ITeamDT;
}

const TeamDetailsMain = ({item}:IProps) => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* team details area */}
            <TeamDetailsArea item={item} />
            {/* team details area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamDetailsMain;
