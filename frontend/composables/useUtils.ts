import moment from "moment"

export const useQueryToString = (query: Record<string, any> = {}): string => {
  const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")

  return queryString ? `?${queryString}` : ""
}

export const useFormattedDate = (date: string | undefined, format = "YYYY-MM-DD HH:mm"): string => {
  return date ? moment(date).format(format) : ""
}

export const useNumberWithCommas = (number: number | undefined): string => {
  if (number !== undefined) {
    return number.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ".")
  }
  return "0"
}
