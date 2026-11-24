export function filterWorkshops(workshops, state = {}, savedIds = []) {
  const query = (state.query || '').trim().toLocaleLowerCase();
  const saved = new Set(savedIds);
  return workshops.filter(workshop => {
    const searchable = [workshop.title, workshop.description, workshop.topic, workshop.format, workshop.location].join(' ').toLocaleLowerCase();
    return (!query || searchable.includes(query))
      && (!state.topic || workshop.topic === state.topic)
      && (!state.format || workshop.format === state.format)
      && (!state.month || workshop.date.startsWith(state.month))
      && (state.view !== 'saved' || saved.has(workshop.id));
  }).sort((left, right) => state.sort === 'title'
    ? left.title.localeCompare(right.title, 'en')
    : left.date.localeCompare(right.date) || left.title.localeCompare(right.title, 'en'));
}

export function normalizeSavedIds(value, workshops) {
  if (!Array.isArray(value)) return [];
  const knownIds = new Set(workshops.map(workshop => workshop.id));
  return [...new Set(value.filter(id => typeof id === 'string' && knownIds.has(id)))];
}
