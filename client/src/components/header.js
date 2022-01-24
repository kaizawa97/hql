import React from 'react'
import styled from 'styled-components'
import HeaderOptions from './headeroptions';

// Icon
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AvatarIcon from '@mui/material/Avatar';

const HeaderMain = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  // padding-bottom: 10px;
  width: 100%;
  Z-index: 999;
`;

const HeaderLeft = styled.div`
  display: flex;
  > img {
    object-fit: contain;
    height: 40px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
`;

const HeaderSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f6;
  > input {
    outline: none;
    border: none;
    background: none;
`;


function Header() {
  return (
    <div>
      <HeaderMain>
        <HeaderLeft>
          <img src='https://kaizawa97.com/logo.png' alt='sample' />
          <HeaderSearch>
            <SearchIcon />
            <input type={'text'} placeholder={'Search'} />
          </HeaderSearch>
        </HeaderLeft>
      <HeaderRight>
        <HeaderOptions Icon={HomeIcon} title='Home' />
        <HeaderOptions Icon={MessageIcon} title='Message' />
        <HeaderOptions Icon={AvatarIcon} title='Profile' />
      </HeaderRight>
      </HeaderMain>
    </div>
  )
}

export default Header;