import React from 'react';
import { Card } from 'antd';
import { Activity } from '../../reducers/activitiesReducer';

export interface Props {
  activity: Activity;
  className?: string;
  children: React.ReactNode;
  headerImageHeight?: number;
}

function ActivityCard({
  activity,
  className,
  children,
  headerImageHeight = 150,
}: Props) {

  return (
    <Card
      className={className}
      bordered={false}
      bodyStyle={{
        borderLeft: '1px solid #D2DDEC',
        borderRight: '1px solid #D2DDEC',
        borderBottom: '1px solid #D2DDEC',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 0,
      }}
      cover={
        <img
          style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, height: headerImageHeight, objectFit: 'cover'}}
          alt="activity cover"
          src={activity.image}
        />
      }
    >
      {children}
    </Card>
  );
}

export default ActivityCard;
