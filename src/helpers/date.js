import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from '../constants/Date';

export function formatDate(date) {
  return date ? moment(date, DEFAULT_DATE_FORMAT).fromNow() : 'unknown date';
}