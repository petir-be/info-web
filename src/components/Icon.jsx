const paths = {
  leaf: <><path d="M20 3C9 2 3 7 5 14c2 7 14 7 15-11Z" /><path d="M3 22 15 10M9 16l-1-5m1 5 5 1" /></>,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  book: <path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2Z" />,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4m2-17a3 3 0 0 1 0 6m2 4c2 1 2 3 2 7" /></>,
  chart: <path d="M4 3v18h17M9 16v-5m5 5V7m5 9V3" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  sprout: <path d="M12 22V10C5 11 2 7 3 3c6 0 9 3 9 7 0-5 4-7 9-7 1 5-3 8-9 7" />
};
export default function Icon({
  name = 'leaf',
  size = 20,
  ...props
}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.leaf}</svg>;
}
