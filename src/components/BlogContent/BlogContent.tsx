import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector, getBlogById } from "store";
import {
  PostHome,
  PostImage,
  PostInfo,
  PostNumber,
  PostSummaryWrapper,
  PostTitle,
  SiteLink,
  StyledBlogContent,
  Summary,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { WebSiteIcon, imageNotFound } from "assets";
import { setImageNotFound } from "utils";

export const BlogContent = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, articlesPiece, newsPiece, error } = useAppSelector(getBlogById);

  const handleHome = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <StyledBlogContent>
      <PostInfo>
        <PostHome onClick={handleHome}>Home </PostHome>
        <PostNumber>/ Post 14278</PostNumber>
      </PostInfo>

      <PostTitle>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</PostTitle>

      <PostImage src={"123"} alt="Image Not Found" onError={setImageNotFound} />
      <PostSummaryWrapper>
        <Summary>
          Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock
          for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade
          the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st
          day in orbit, a U.S. record for a single spaceflight.
        </Summary>
        <SiteLink href={""}>
          <WebSiteIcon />
        </SiteLink>
      </PostSummaryWrapper>
    </StyledBlogContent>
  );
});
