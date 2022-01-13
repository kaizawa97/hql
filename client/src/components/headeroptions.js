import React from 'react'
import styled from 'styled-components'
// import { Avatar } from '@material-ui/core'

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

const title = styled.h3`
  font-size: 12px;
  font-weight: 400;
`;

function HeaderOptions({ avator, Icon, Title }) {
  return (
    <div>
      <Options>
        {Icon && <Icon />}
        {avator && <Avator />}
        <title>{Title}</title>
      </Options>
    </div>
  )
}

export default HeaderOptions
