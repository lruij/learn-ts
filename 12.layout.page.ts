
/// <reference path="./12.layout.components.ts"/>

namespace Layout {
  export class Page {
    user: Components.User = {
      name: 'layout'
    }
    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.Footer()

      new Components.SubComponents.Card()
    }
  }
}


