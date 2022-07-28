interface Result {
  success: boolean
  data: any
  errMsg?: string
}

export const responseData = (data: any, errMsg?: string) => {
  if (errMsg) {
    return {
      data,
      success: false,
      errMsg,
    }
  }

  return {
    success: true,
    data,
  }
}
