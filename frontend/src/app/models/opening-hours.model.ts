import moment from 'moment';

export interface TimeRange {
    from: moment.Moment;
    to: moment.Moment;
}

export interface OpeningHours {
    monday: TimeRange;
    tuesday: TimeRange;
    wednesday: TimeRange;
    thursday: TimeRange;
    friday: TimeRange;
    saturday?: TimeRange;
    sunday?: TimeRange;
}