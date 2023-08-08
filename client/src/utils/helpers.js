export const formatPrice = (number) => {
  // Türk Lirası formatında ayarla

  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }
  if (type === 'category') {
    unique = unique.flat();
  }
  if (type === 'company') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};
