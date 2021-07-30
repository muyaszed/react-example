import styled from 'styled-components';
import CsvDownloader from 'react-csv-downloader';
import { DropDown, ActivityCard } from './components'

interface MainContentProps {
  error: string | null;
}

interface StatusProps {
  isOpen: boolean;
}

export const MainContainer = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }



`;

export const MainHeader = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
  }

`;

export const MainHeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-family: Manrope;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }

`;

export const MainHeaderRight = styled.div`
  display: flex;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    width: 20%;
  }

`;

export const HeaderTitle = styled.div`
  color: #1F2225;
  font-size: 40px;
`;

export const HeaderSubTitle = styled.div`
  color: #7E7E7E;
  margin-left: 3px;
;
`;

export const MainContent = styled.div<MainContentProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    flex-direction: row;
    justify-content: ${props => props.error ? 'center' : 'space-between'};
  }

`;

export const StyledDropDown = styled(DropDown)`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 210px;
  }

`;

export const StyleActivityCard = styled(ActivityCard)`
  margin-bottom: 15px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  @media screen and (min-width: 1024px) {
    width: 32%;
  }


`;

export const ContentWrapper = styled.div`
  display: flex;
  font-family: Manrope;
  flex-direction: column;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    padding: 15px;
  }


`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 140px;

  @media screen and (min-width: 1440px) {
    min-height: 90px;
  }

`;

export const RightContent = styled.div`
  display: flex;
  
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    justify-content: right;
  }

`;

export const NameWrapper = styled.div`
  display: flex;
`;

export const Name = styled.div`
  font-size: 22px;
  color: #12263F;
`;
export const Status = styled.div<StatusProps>`
  align-self: center;
  color: ${props => props.isOpen ? '#1AB72A' : '#DD0E0E'};
  margin-left: 15px;
  margin-top: 3px;

  @media screen and (min-width: 1024px) {
    margin-left: 5px;
    margin-top: 2px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
    margin-top: 2px;
  }


`;
export const Description = styled.div`
  font-size: 13px;
  color: #6F6F6F;
  overflow: hidden;
  position: relative;
  line-height: 2em;
  max-height: 6em;
  padding-right: 1em;
  text-align: justify;

  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    max-height: 4em;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }

`;

export const ToggleTitle = styled.div`
  font-size: 13px;
  white-space: nowrap;
  margin-top: 5px;
  color: rgba(115, 115, 115, 0.77);
`;
export const ToggleSwitchWrapper = styled.div`
  margin-left: 10px;
  margin-top: 3px;

  @media screen and (min-width: 1024px) {
    margin: 0;
    align-self: flex-end;
  }

`;

export const ActivityCount = styled.span`
  font-size: 24px;
  color: #559545;
`;

export const ExportWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 50px 0 100px 0;
`;

export const StyledExportButton = styled(CsvDownloader)`
  background-color: #03A596;
  color: #ffffff;
  font-size: 18px;
  width: 128px;
  height: 48px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 165, 150, 0.2);
  justify-content: center;
  align-items: center;
`;
