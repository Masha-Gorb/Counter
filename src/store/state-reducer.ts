
export const initialState = 0
export const stateReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'SET-MIN-VALUE': {
      return state = action.minValue
    }
    case 'INCREASE-STATE': {
      return state+1
    }
    case 'RESET-STATE': {
      return state = 0
    }
    default: return state
  }
}

export const stateReducerAC = (maxValue: number, minValue: number) => {
  return {
    type: 'INCREASE-STATE',
    maxValue: maxValue,
    minValue: minValue
  } as const
}

export const stateReducerResetAC = () => {
  return {
    type: 'RESET-STATE'
  } as const
}

export const stateReducerSetMinValueAC = (minValue: number) => {
  return {
    type: 'SET-MIN-VALUE',
    minValue: minValue
  } as const
}