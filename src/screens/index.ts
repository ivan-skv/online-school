export { default as AppContainer } from './AppContainer'

declare global {
  interface String {
    capitalize: () => string;
  }
}

String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
}
