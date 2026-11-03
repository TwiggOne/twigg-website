/* Step-by-step lead form shared by /expert/insurance and /expert/home-loan.
   Each page sets window.EXPERT_FORM = {topic, adRef, waTopic, steps, askCity} before loading this file. */
(function () {
  'use strict';
  var cfg = window.EXPERT_FORM;
  var card = document.getElementById('form-card');
  if (!cfg || !card) return;

  var total = cfg.steps.length + 1;
  var answers = {};
  var current = 0;
  var started = false;
  var q = new URLSearchParams(window.location.search);

  function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params);
  }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  function waLink() {
    return 'https://wa.me/919667780860?text=Hi%2C%20I%20just%20filled%20the%20form%20for%20' +
      cfg.waTopic + '%20(ref%3A%20' + cfg.adRef + ')';
  }

  function waButton(label, cls) {
    var a = el('a', { 'class': cls, href: waLink(), rel: 'noopener', text: label });
    a.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_cta_click', topic: cfg.topic });
      track('whatsapp_cta_click', { topic: cfg.topic, transport_type: 'beacon' });
      if (typeof fbq === 'function') fbq('track', 'Contact', { content_name: cfg.topic });
    });
    return a;
  }

  function progress() {
    var row = el('div', { 'class': 'progress' }, [el('span', { text: 'Step ' + (current + 1) + ' of ' + total })]);
    if (current > 0) {
      var back = el('button', { type: 'button', 'class': 'back', text: '← Back' });
      back.addEventListener('click', function () { show(current - 1); });
      row.appendChild(back);
    }
    var bar = el('div', { 'class': 'bar', 'aria-hidden': 'true' }, [el('i', {})]);
    bar.firstChild.style.width = Math.round(((current + 1) / total) * 100) + '%';
    return [row, bar];
  }

  function heading(text) {
    return el('h2', { 'class': 'q', tabindex: '-1', id: 'q-title', text: text });
  }

  function mount(nodes) {
    card.textContent = '';
    nodes.forEach(function (n) { card.appendChild(n); });
    var t = document.getElementById('q-title');
    if (t) t.focus({ preventScroll: true });
  }

  function show(i) {
    current = i;
    track('form_step', { topic: cfg.topic, step: i + 1 });
    if (i < cfg.steps.length) showQuestion(cfg.steps[i]);
    else showContact();
  }

  function showQuestion(step) {
    var opts = el('div', { 'class': 'opts', role: 'group', 'aria-labelledby': 'q-title' });
    step.options.forEach(function (label) {
      var b = el('button', { type: 'button', 'class': 'opt', text: label, 'aria-pressed': answers[step.key] === label ? 'true' : 'false' });
      b.addEventListener('click', function () {
        if (!started) { started = true; track('form_start', { topic: cfg.topic }); }
        answers[step.key] = label;
        b.setAttribute('aria-pressed', 'true');
        setTimeout(function () { show(current + 1); }, 140);
      });
      opts.appendChild(b);
    });
    mount(progress().concat([heading(step.q), opts]));
  }

  function normPhone(v) {
    var d = String(v).replace(/[\s\-().]/g, '');
    if (/^\+91\d{10}$/.test(d)) d = d.slice(3);
    else if (/^91\d{10}$/.test(d)) d = d.slice(2);
    else if (/^0\d{10}$/.test(d)) d = d.slice(1);
    return /^[6-9]\d{9}$/.test(d) ? '+91' + d : null;
  }

  function field(label, input, errId) {
    return el('label', { 'class': 'field' }, [el('span', { text: label }), input]);
  }

  function showContact() {
    var name = el('input', { type: 'text', name: 'name', autocomplete: 'name', required: '', maxlength: '80', 'aria-describedby': 'err-name' });
    var errName = el('p', { 'class': 'err', id: 'err-name', 'aria-live': 'polite' });
    var phone = el('input', { type: 'tel', name: 'phone', inputmode: 'numeric', autocomplete: 'tel-national', required: '', maxlength: '16', placeholder: '98765 43210', 'aria-describedby': 'err-phone' });
    var errPhone = el('p', { 'class': 'err', id: 'err-phone', 'aria-live': 'polite' });
    var city = el('input', { type: 'text', name: 'city', autocomplete: 'address-level2', maxlength: '80', value: 'Delhi NCR' });
    var consent = el('input', { type: 'checkbox', id: 'wa-consent', checked: '' });
    var hp = el('input', { type: 'text', name: 'website', tabindex: '-1', autocomplete: 'off' });
    var alertBox = el('div', { 'class': 'alert', role: 'alert' });
    alertBox.hidden = true;
    var submit = el('button', { type: 'submit', 'class': 'cta', text: 'Get my free expert call' });

    var form = el('form', { novalidate: '' }, [
      el('div', { 'class': 'hp', 'aria-hidden': 'true' }, [el('label', {}, [el('span', { text: 'Leave this empty' }), hp])]),
      field('Your name', name), errName,
      el('label', { 'class': 'field' }, [el('span', { text: 'Mobile number' }), el('div', { 'class': 'phone' }, [el('b', { text: '+91' }), phone])]), errPhone
    ]);
    if (cfg.askCity) form.appendChild(field('City of the property', city));
    form.appendChild(el('label', { 'class': 'consent', 'for': 'wa-consent' }, [consent, el('span', { text: 'Send me updates on WhatsApp' })]));
    var small = el('p', { 'class': 'small' });
    small.appendChild(document.createTextNode('By continuing you agree to be contacted by Twigg. We never share your number. '));
    small.appendChild(el('a', { href: '/privacy-policy', text: 'Privacy policy' }));
    form.appendChild(small);
    form.appendChild(alertBox);
    form.appendChild(submit);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      errName.textContent = errPhone.textContent = '';
      name.removeAttribute('aria-invalid'); phone.removeAttribute('aria-invalid');
      var n = name.value.trim();
      var p = normPhone(phone.value);
      var bad = null;
      if (!n) { errName.textContent = 'Please tell us your name.'; name.setAttribute('aria-invalid', 'true'); bad = name; }
      if (!p) { errPhone.textContent = 'Enter a valid 10-digit mobile number, e.g. 98765 43210.'; phone.setAttribute('aria-invalid', 'true'); bad = bad || phone; }
      if (bad) { bad.focus(); return; }
      send(form, submit, alertBox, {
        topic: cfg.topic,
        answers: answers,
        name: n,
        phone: p,
        city: cfg.askCity ? city.value.trim() : '',
        whatsapp_consent: consent.checked,
        utm_source: q.get('utm_source') || '',
        utm_medium: q.get('utm_medium') || '',
        utm_campaign: q.get('utm_campaign') || '',
        utm_content: q.get('utm_content') || '',
        fbclid: q.get('fbclid') || '',
        page_path: window.location.pathname,
        ad_ref: cfg.adRef,
        website: hp.value
      });
    });

    mount(progress().concat([heading('Where should our expert reach you?'), form]));
  }

  function send(form, submit, alertBox, payload) {
    submit.disabled = true;
    submit.textContent = 'Sending…';
    alertBox.hidden = true;
    fetch('/api/expert-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) { return r.json().then(function (j) { return j && j.ok === true; }, function () { return false; }); })
      .catch(function () { return false; })
      .then(function (ok) {
        if (ok) return thanks(payload.name);
        alertBox.textContent = '';
        alertBox.appendChild(document.createTextNode('Something went wrong. '));
        alertBox.appendChild(el('a', { href: waLink(), rel: 'noopener', text: 'Tap here to message us on WhatsApp' }));
        alertBox.appendChild(document.createTextNode(', or try again.'));
        alertBox.hidden = false;
        submit.disabled = false;
        submit.textContent = 'Get my free expert call';
      });
  }

  function thanks(name) {
    track('generate_lead', { topic: cfg.topic });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_submitted', topic: cfg.topic });
    var box = el('div', { 'class': 'thanks' }, [
      el('h2', { tabindex: '-1', id: 'q-title', text: 'Thanks, ' + name + '! 🙌' }),
      el('p', { text: 'An expert from Twigg will call or WhatsApp you within 24 hours.' }),
      waButton('Prefer to chat now? Message us on WhatsApp', 'cta wa')
    ]);
    mount([box]);
  }

  show(0);
})();
