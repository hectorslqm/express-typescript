import { NewDiaryEntry, Visibility, Weather } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest) || commentFromRequest.length < 5) {
    throw new Error('Incorrect or missing comment: ')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param as Visibility)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param as Weather)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newEntry
}

export default toNewDiaryEntry
