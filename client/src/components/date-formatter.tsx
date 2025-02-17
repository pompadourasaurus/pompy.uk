import { format } from "date-fns"

type Props = {
  date: Date
}

export const DateFormatter = ({ date }: Props) => {
  const isoDateString = format(date, "yyyy-MM-dd")
  const humanReadableDateString = format(date, "LLLL do, yyyy")
  return <time dateTime={isoDateString}>{humanReadableDateString}</time>
}
