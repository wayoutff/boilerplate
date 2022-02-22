/**
 * Функция склонения окончаний
 * Пример использования: declension(attemptsCount, [t('attempt'), t('attempts'), t('attempts')]), declension(daysCount, [t('day'), t('days1'), t('days2')])
 * @param number - Значение поля
 * @param expressions - массив выражений состоящий из строк (не больше трех слов)
 * @returns нужное форма выражения
**/
export const declension = (number: number, expressions: [string, string, string]) => {
  const count = number % 100;
  if (count >= 5 && count <= 20) {
    return expressions[2];
  } else {
    const units = count % 10;
    if (count === 1) {
      return expressions[0];
    } else if (units >= 2 && units <= 4) {
      return expressions[1];
    } else {
      return expressions[2];
    }
  }
};

export const wait = (timeout = 2000) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

