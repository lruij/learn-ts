"use strict";
var Components;
(function (Components) {
    class Header {
        constructor() {
            const p = document.createElement('p');
            p.id = 'header';
            p.innerText = '我是顶部';
            document.body.appendChild(p);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const p = document.createElement('p');
            p.id = 'content';
            p.innerText = '我是内容';
            document.body.appendChild(p);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const p = document.createElement('p');
            p.id = 'footer';
            p.innerText = '我是底部';
            document.body.appendChild(p);
        }
    }
    Components.Footer = Footer;
    let SubComponents;
    (function (SubComponents) {
        class Card {
            constructor() {
                const content = document.getElementById('content');
                const card = document.createElement('div');
                card.style.width = '100px';
                card.style.height = '100px';
                card.style.background = 'red';
                content.appendChild(card);
            }
        }
        SubComponents.Card = Card;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
})(Components || (Components = {}));
var Layout;
(function (Layout) {
    class Page {
        constructor() {
            this.user = {
                name: 'layout'
            };
            new Components.Header();
            new Components.Content();
            new Components.Footer();
            new Components.SubComponents.Card();
        }
    }
    Layout.Page = Page;
})(Layout || (Layout = {}));
