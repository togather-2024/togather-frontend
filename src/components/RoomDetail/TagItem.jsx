import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

const TagItem = ({ data }) => {
  return <Tag>{data?.tagContent}</Tag>;
};

export default TagItem;

const Tag = styled.div`
  background-color: ${colors.point04};
  padding: 6px 12px;
  border-radius: 15px;
`;
