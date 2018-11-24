import "./style.css";
import html from "./modal.html";

setTimeout(function() {
  "use strict";

  // save location.href
  let dataLayer = window.MTNetFormDataLayer = window.MTNetFormDataLayer || [];
  function MTNetForm(){MTNetFormDataLayer.push(arguments)};
  MTNetForm("updateValues", {
    "参照元URL": location.href,
  });

  // initialize valiables
  let title = "お問い合わせ";
  let iframeSrc = undefined;

  let script = document.getElementById("mt-net-form-modal-script");

  if (script && script.dataset && script.dataset.iframeSrc) {
    iframeSrc = script.dataset.iframeSrc
  }

  if (script && script.dataset && script.dataset.modalTitle) {
    title = script.dataset.modalTitle;
  }

  if (!iframeSrc) {
    return;
  }

  // insert HTML
  document.body.appendChild((function() {
    let div = document.createElement("DIV")
    div.innerHTML = html;
    return div.childNodes[0];
  })());

  // initialize events
  let container = document.querySelectorAll(".mt-net-form-modal")[0];
  container.addEventListener("click", function(ev) {
    ev.preventDefault();
    ev.cancelBubble = true;
  });

  container.querySelector(".mt-net-form-modal__header").innerHTML = title;

  let icon = container.querySelector(".mt-net-form-modal__icon")
  let closeIcon = container.querySelector(".mt-net-form-modal__close");

  icon.setAttribute("aria-label", title + "を開く");
  icon.addEventListener("click", function(ev) {
    ev.preventDefault();
    ev.cancelBubble = true;

    if (container.classList.contains("mt-net-form-modal--open")) {
      return;
    }

    if (!container.querySelector(".mt-net-form-modal__iframe")) {
      container.querySelector(".mt-net-form-modal__iframe-container").innerHTML = `<iframe width="100%" src="${iframeSrc}" frameborder="0" class="mt-net-form-modal__iframe"></iframe>`;
    }

    container.classList.add("mt-net-form-modal--open");
    container.classList.add("mt-net-form-modal--animation");
    setTimeout(function() {
      container.classList.remove("mt-net-form-modal--animation");
    }, 400);

    function close(ev) {
      container.classList.remove("mt-net-form-modal--open");
      container.classList.add("mt-net-form-modal--animation");
      setTimeout(function() {
        container.classList.remove("mt-net-form-modal--animation");
      }, 400);
      closeIcon.removeEventListener("click", close);
      document.removeEventListener("click", close);
    };
    setTimeout(function() {
      closeIcon.addEventListener("click", close);
      document.addEventListener("click", close);
    }, 500);
  });
}, 0);
