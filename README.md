## mt-net-form-modal

MovableType.netフォームのフォームをモーダルウィンドウで表示します。

### 使い方

フォーム表示用のIFRAME要素の代わりに、以下のSCRIPT要素を挿入します。

```
<script data-modal-title="お問い合わせ" data-iframe-src="https://form.movabletype.net/XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX?embed=true" id="mt-net-form-modal-script" src="https://cdn.jsdelivr.net/gh/usualoma/mt-net-form-modal@v1.0.7/dist/mt-net-form-modal.min.js" integrity="sha384-VWb11HsI5Wruij+pBZnz+3sqonHSMaiOKl1jMZD8s80LmlFYvTiw+JBdbGaIoiYY" crossorigin="anonymous" defer async></script>
```

#### SCRIPT要素のdata属性

利用する際には以下の属性をサイトにあわせて書き換えてください。

* data-modal-title : モーダルウィンドウのタイトル
* data-iframe-src : IFRAMEのsrc属性

### カスタマイズ

アイコンの表示位置やモーダルウィンドウのデザインはCSSでカスタマイズすることができます。

#### アイコンを左下に表示

```css
.mt-net-form-modal {
  right: auto;
  left: 20px;
}
.mt-net-form-modal--open {
  left: 100px;
}
@media (max-width: 767.98px) {
  .mt-net-form-modal--open {
    left: 0;
  }
}
```

#### モーダルの幅を指定

```css
.mt-net-form-modal--open {
  width: 600px;
}
@media (max-width: 767.98px) {
  .mt-net-form-modal--open {
    width: 100vw;
  }
}
```

#### 閉じるボタンの変更

```css
.mt-net-form-modal__close:before {
  content: "×";
  background-image: none;
}
```

### より高度なカスタマイズのための情報

JavaScriptが読み込まれると[表示用のHTML](https://github.com/usualoma/mt-net-form-modal/blob/master/src/modal.html)がBODY要素の末尾に、[デフォルトのCSS](https://github.com/usualoma/mt-net-form-modal/blob/master/src/style.css)がHEAD要素の先頭に追加されます。スタイルシートでこれらのスタイルを上書きすることで表示をカスタマイズできます。
