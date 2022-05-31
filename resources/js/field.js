Nova.booting((Vue, router, store) => {
  Vue.component('locale-anywhere', require('./components/Tool').default)

  Vue.component('locale-anywhere-dropdown', require('./components/Dropdown').default);
  Vue.component('index-locale-anywhere', require('./components/IndexField').default);
  Vue.component('detail-locale-anywhere', require('./components/DetailField').default);
  Vue.component('form-locale-anywhere', require('./components/FormField').default);

  if (window.config !== undefined && window.config.customDetailToolbar) {
    Vue.component('custom-detail-toolbar', require('./components/CustomDetailToolbar').default);
  }
});