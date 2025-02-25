import React from 'react';
import { Timeline as MUITimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography } from '@mui/material';
import workTimelineData from '../data/work-timeline-data.json';

const Timeline = () => {
  return (
    <MUITimeline position="alternate">
      {workTimelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {item['Start Date']} - {item['End Date']}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              {item.Role}
            </Typography>
            <Typography>
                <a href={item.Organization.Link} target='_blank' rel='noopener noreferrer'>
                    {item.Organization.Name}
                </a>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.Description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MUITimeline>
  );
};

export default Timeline;