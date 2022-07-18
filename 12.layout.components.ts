namespace Components {

  export class Header {
    constructor() {
      const p = document.createElement('p')
      p.id = 'header'
      p.innerText = '我是顶部'
      document.body.appendChild(p)
    }
  }

  export class Content {
    constructor() {
      const p = document.createElement('p')
      p.id = 'content'
      p.innerText = '我是内容'
      document.body.appendChild(p)
    }
  }

  export class Footer {
    constructor() {
      const p = document.createElement('p')
      p.id = 'footer'
      p.innerText = '我是底部'
      document.body.appendChild(p)
    }
  }


  // 进阶写法

  export namespace SubComponents {
    export class Card {
      constructor() {
        const content = document.getElementById('content') as HTMLElement
        const card = document.createElement('div')
        card.style.width = '100px'
        card.style.height = '100px'
        card.style.background = 'red'
        content.appendChild(card)
      }
    }
  }

  export interface User {
    name: string;
  }

}
