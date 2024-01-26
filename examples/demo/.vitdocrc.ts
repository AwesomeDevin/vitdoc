import px2vw from 'vite-plugin-px2vw';
import vitdocPackageNameAliasPlugin from '@vitdoc-plugins/package-alias';

export default {
  logo: '',
  plugins: [px2vw({}), vitdocPackageNameAliasPlugin()],

  template: '@vitdoc/template-mobile',
};
