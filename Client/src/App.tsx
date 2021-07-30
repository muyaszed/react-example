import "@fontsource/manrope";
import "@fontsource/roboto";
import { useDispatch, useSelector } from 'react-redux';
import { ICsvDownloadProps } from 'react-csv-downloader';
import { useGetActivities } from './hooks';
import { Switch, Result, Spin } from 'antd';
import {
  MainContainer,
  MainHeader,
  MainHeaderRight,
  MainHeaderLeft,
  HeaderTitle,
  HeaderSubTitle,
  StyledDropDown,
  MainContent,
  ContentWrapper,
  StyleActivityCard,
  NameWrapper,
  LeftContent,
  RightContent,
  Name,
  Status,
  Description,
  ToggleTitle,
  ToggleSwitchWrapper,
  ActivityCount,
  ExportWrapper,
  StyledExportButton,
  LoadingWrapper,
} from './App.style';
import { _toggleActivityOpen, _filterActivities } from './actions/activityActions';
import { RootState } from "./store";
import { FilterKey } from "./reducers/activitiesReducer";

export interface FilterOption {
  value: FilterKey;
  title: string;
};

function App() {
  const [activities, getActivitiesIsLoading, error] = useGetActivities();
  const dispatch = useDispatch();
  const activityCount = useSelector((state: RootState) => state.activities.list.filter(listItem => listItem.isOpen)).length;
  if(getActivitiesIsLoading) {
    return <LoadingWrapper><Spin size="large"/></LoadingWrapper>
  }

  const filterOptions: FilterOption[] = [
    {
      value: 'showAll',
      title: 'Show All',
    },
    {
      value: 'open',
      title: 'Open',
    },
    {
      value: 'close',
      title: 'Close',
    },
  ];

  const handleDropDownSelect = (e: FilterKey) => {
    dispatch(_filterActivities(e));
  };

  return (
    <MainContainer>
      <MainHeader>
        <MainHeaderLeft>
          <HeaderTitle>My activities</HeaderTitle>
          <HeaderSubTitle>No of activities currently open <ActivityCount>{activityCount}</ActivityCount></HeaderSubTitle>
        </MainHeaderLeft>
        <MainHeaderRight>
          <StyledDropDown options={filterOptions} onSelect={handleDropDownSelect} />
        </MainHeaderRight>
      </MainHeader>
      <MainContent error={error}>
        {
          error ? (
            <Result
              status="error"
              title="Fetched Failed"
              subTitle="There might be some technical difficulties. Please refresh your window"
            />              
          ) : (
            activities.map(activity => (
              <StyleActivityCard key={activity.id} activity={activity}>
                <ContentWrapper>
                  <LeftContent>
                    <NameWrapper>
                      <Name>{activity.name}</Name>
                      <Status isOpen={activity.isOpen}>{activity.isOpen ? 'Open' : 'Closed'}</Status>
                    </NameWrapper>
                    <Description>
                      {activity.description}
                    </Description>
                  </LeftContent>
                  <RightContent>
                    <ToggleTitle>Toggle Open</ToggleTitle>
                    <ToggleSwitchWrapper>
                      <Switch checked={activity.isOpen} onChange={() => dispatch(_toggleActivityOpen(activity.id))}/>
                    </ToggleSwitchWrapper>
                  </RightContent>
                </ContentWrapper>
              </StyleActivityCard>
            ))  
          )
        }
      </MainContent>
      {!error && <ExportWrapper>
      <StyledExportButton
        filename="activitiesCSV"
        extension=".csv"
        separator=";"
        wrapColumnChar="'"
        datas={activities as unknown as ICsvDownloadProps["datas"]}
        text="EXPORT"/>
      </ExportWrapper>}
    </MainContainer>
  );
}

export default App;
