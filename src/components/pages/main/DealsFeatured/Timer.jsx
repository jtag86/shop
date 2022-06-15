import React from 'react'
import styled from 'styled-components'

const TimerBox = styled.div`
  width: 173px;
  padding-left: 3px;
  padding-right: 3px;
  border: solid 1px #cccccc;
  border-radius: 5px;
  margin-right: 1px;
`

const TimerUnit = styled.div`
  width: 33.33333333%;
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 7px;
  padding-bottom: 7px;
  float: left;
  display: block;
  position: relative;
  box-sizing: border-box;
  &:not(:last-child):after {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    width: 1px;
    height: 25px;
    background: #e5e5e5;
    content: '';
  }
`

const TimerUnitSpan = styled.span`
  position: absolute;
  display: block;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 8px;
  color: rgba(0,0,0,0.5);
  text-transform: uppercase;
`

const Timer = () => {

  const [[h, m, s], setTime] = React.useState([40, 0, 0]);

  const tick = () => {
    if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };


  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, [s]);

  return (
    <TimerBox>
      <TimerUnit>{h}<TimerUnitSpan>часы</TimerUnitSpan></TimerUnit>
      <TimerUnit>{m}<TimerUnitSpan>минуты</TimerUnitSpan></TimerUnit>
      <TimerUnit>{s}<TimerUnitSpan>секунды</TimerUnitSpan></TimerUnit>
    </TimerBox>
  )
}

export default Timer