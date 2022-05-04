Nova.booting((Vue, router, store) => {
  Nova.inertia('LocaleAnywhere', require('./components/Tool.vue').default)

  Vue.component('locale-anywhere-dropdown', require('./components/Dropdown.vue'));
  Vue.component('index-locale-anywhere', require('./components/IndexField.vue'));
  Vue.component('detail-locale-anywhere', require('./components/DetailField.vue'));
  Vue.component('form-locale-anywhere', require('./components/FormField.vue'));

  if (window.config !== undefined && window.config.customDetailToolbar) {
    Vue.component('custom-detail-toolbar', require('./components/CustomDetailToolbar.vue'));
  }
});
