import React from "react";

import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: JSX.Element | string;
}

function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>

      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
}

export default PageTitle;
