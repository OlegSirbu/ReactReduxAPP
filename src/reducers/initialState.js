export default {
  notesState : {
    notesCount: 0,
    notes: [],
    note: { _id: '', title: '', text: '' }
  },
  pagination: {
    limit: 5,
    notesPage: 1
  },
  news: [],
  finance: {
    cities: {},
    organizations: [],
    bank: {
      title: '', phone: '', address: '', city: '',
      currencies: {
        EUR: { ask: '', bid: '' },
        USD: { ask: '', bid: '' }
      }
    }
  },
  ajaxStatusReducer: 0,
  films:[],
  film: {}
};
