import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('profile-page')
export class ProfilePage extends LitElement {
  render() {
    return html`
      <div>テスト</div>
    `
  }

  static styles = css`
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'profile-page': ProfilePage
  }
}
