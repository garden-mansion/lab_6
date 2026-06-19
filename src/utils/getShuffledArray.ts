/**
 * Перемешивает элементы массива в случайном порядке (алгоритм Фишера-Йетса)
 * @param array - исходный массив элементов произвольного типа T
 * @returns новый массив с элементами в случайном порядке
 */
export function getShuffledArray<T>(array: T[]): T[] {
  // Создаем копию массива, чтобы не мутировать оригинал
  const shuffled = [...array];

  // Алгоритм Фишера-Йетса (тасование Кнута)
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Случайный индекс от 0 до i
    const j = Math.floor(Math.random() * (i + 1));

    // Меняем местами элементы
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
