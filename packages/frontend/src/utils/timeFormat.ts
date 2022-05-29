let dtFormat = new Intl.DateTimeFormat("default", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const FormatData = (iso: string) => {
  const date = new Date(iso);
  return dtFormat.format(date);
};

export default FormatData;
