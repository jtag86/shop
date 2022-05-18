import React, { useState } from 'react'
import { Slider, Box } from '@mui/material'

interface Props {
  value: number[],
  handleCost: (arr:number[]) => void,
  min: number,
  max: number,
}

const SliderEl: React.FC<Props> = ({value, handleCost, min, max}) => {
  const minDistanceCost = value[0] /10

  const handleChangeCost = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (newValue[1] - newValue[0] < minDistanceCost) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], max - minDistanceCost);
        handleCost([clamped, clamped + minDistanceCost]);
      } else {
        const clamped = Math.max(newValue[1], minDistanceCost);
        handleCost([clamped - minDistanceCost, clamped]);
      }
    } else {
      handleCost(newValue as number[]);
    }
  };

  const valuetext = (value: number) => {
    return `${value}C`
  }

  return (
    <Box
      m={2}
    >
      <Slider
        value={value}
        onChange={handleChangeCost}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        disableSwap
      />
    </Box>

  )
}

export default SliderEl