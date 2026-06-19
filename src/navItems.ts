interface TNavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: TNavItem[] = [
  { label: 'Главная', path: '/' },
  { label: 'Список зданий', path: '/list' },
  { label: 'Диаграммы', path: '/chart' },
  { label: 'Проверь себя', path: '/check-yourself' },
];
