import React from 'react'
import styled from 'styled-components'


const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const IconOption = styled.div`
  object-ft: contain;
  height: 25px !important;
  width: 25px !important;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: 400;
`;

function HeaderOptions({ Avator, Icon, title }) {
  return (
    <div>
      <Options>
        <IconOption>{Icon && <Icon />}</IconOption>
        <Title>{title}</Title>
      </Options>
    </div>
  )
}

export default HeaderOptions
