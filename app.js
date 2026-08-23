'use strict';

/* =========================================================
   CONFIG
   ========================================================= */
const WHATSAPP_NUMBER = '50258253416';

/* =========================================================
   DATA — Menú extraído del rótulo "Tacos El Pocas"
   ========================================================= */
const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'tacos', label: '🌮 Tacos y Birria' },
  { id: 'especialidades', label: '🍲 Especialidades' },
  { id: 'bebidas-frias', label: '🥤 Bebidas Frías' },
  { id: 'bebidas-calientes', label: '☕ Bebidas Calientes' },
  { id: 'gaseosas', label: '🥫 Gaseosas' },
];

const MENU = [
  // ---- Tacos y Birria ----
  { id: 't1', category: 'tacos', name: 'Tacos de Birria', desc: 'Tortillas rellenas de birria deshebrada, cebolla y cilantro. Se sirven con consomé para mojar.', price: 35, icon: '🌮' },
  { id: 't2', category: 'tacos', name: 'Tacos de Birria c/ Queso', desc: 'Nuestros clásicos tacos de birria gratinados con queso derretido.', price: 40, icon: '🧀' },
  { id: 't3', category: 'tacos', name: 'Big Birria', desc: 'Orden grande de tacos de birria, ideal para compartir entre dos.', price: 65, icon: '🌮' },
  { id: 't4', category: 'tacos', name: 'King Birria', desc: 'La porción más grande de la casa, para los verdaderos amantes de la birria.', price: 75, icon: '👑' },
  { id: 't5', category: 'tacos', name: 'Tacos de Lengua', desc: 'Lengua de res cocida a fuego lento hasta quedar suave y jugosa.', price: 35, icon: '🌮' },
  { id: 't6', category: 'tacos', name: 'Tacos de Adobado', desc: 'Carne de cerdo marinada en adobo casero con un toque ahumado.', price: 35, icon: '🌮' },
  { id: 't7', category: 'tacos', name: 'Tacos de Pollo', desc: 'Pollo sazonado y jugoso, perfecto para todos los gustos.', price: 35, icon: '🌮' },
  { id: 't8', category: 'tacos', name: 'Pequebirrias', desc: 'Porción especial para los peques de la casa.', price: 30, icon: '🧒' },

  // ---- Especialidades ----
  { id: 'e1', category: 'especialidades', name: 'Sopa de Birria Pequeña', desc: 'Consomé de birria bien cargado de sabor, servido bien caliente.', price: 40, icon: '🍲' },
  { id: 'e2', category: 'especialidades', name: 'Sopa de Birria Grande', desc: 'Consomé de birria bien cargado de sabor, servido bien caliente.', price: 50, icon: '🍲' },
  { id: 'e3', category: 'especialidades', name: 'Sopa de Birria Extragrande', desc: 'Consomé de birria bien cargado de sabor, servido bien caliente.', price: 75, icon: '🍲' },
  { id: 'e4', category: 'especialidades', name: 'La Nachada', desc: 'Totopos bañados en queso, birria y toppings de la casa.', price: 25, icon: '🧀' },

  // ---- Bebidas Frías ----
  { id: 'bf1', category: 'bebidas-frias', name: 'Horchata Artesanal', desc: 'Refrescante bebida de arroz y canela, preparada en casa.', price: 15, icon: '🥤' },
  { id: 'bf2', category: 'bebidas-frias', name: 'Naranjada Loca c/ Soda', desc: 'Naranjada natural con un toque de soda.', price: 20, icon: '🥤' },
  { id: 'bf3', category: 'bebidas-frias', name: 'Naranjada Loca', desc: 'Naranjada natural, dulce y refrescante.', price: 15, icon: '🥤' },
  { id: 'bf4', category: 'bebidas-frias', name: 'Cremita Tímida', desc: 'Bebida cremosa, suave y deliciosa.', price: 15, icon: '🥤' },
  { id: 'bf5', category: 'bebidas-frias', name: 'Limonada Enojona c/ Soda', desc: 'Limonada bien cargada con un toque de soda.', price: 20, icon: '🥤' },
  { id: 'bf6', category: 'bebidas-frias', name: 'Limonada Enojona', desc: 'Limonada natural bien cargada de limón.', price: 15, icon: '🥤' },
  { id: 'bf7', category: 'bebidas-frias', name: 'Jamaica Entacuchada', desc: 'Agua fresca de jamaica, ácida y refrescante.', price: 15, icon: '🥤' },
  { id: 'bf8', category: 'bebidas-frias', name: 'Tamarindo Humilde', desc: 'Agua fresca de tamarindo, dulce y agridulce.', price: 15, icon: '🥤' },
  { id: 'bf9', category: 'bebidas-frias', name: 'Agua Pura en Botella', desc: 'Agua embotellada.', price: 10, icon: '💧' },

  // ---- Bebidas Calientes ----
  { id: 'bc1', category: 'bebidas-calientes', name: 'Café Simple', desc: 'Café negro recién preparado.', price: 10, icon: '☕' },
  { id: 'bc2', category: 'bebidas-calientes', name: 'Café c/ Cremora o Leche', desc: 'Café suavizado con cremora o leche.', price: 15, icon: '☕' },
  { id: 'bc3', category: 'bebidas-calientes', name: 'Chocolate', desc: 'Chocolate caliente, cremoso y reconfortante.', price: 15, icon: '☕' },
  { id: 'bc4', category: 'bebidas-calientes', name: 'Té Manzanilla', desc: 'Infusión de manzanilla.', price: 15, icon: '🍵' },
  { id: 'bc5', category: 'bebidas-calientes', name: 'Té Bora Bora (Frutos Rojos)', desc: 'Infusión de frutos rojos.', price: 15, icon: '🍵' },
  { id: 'bc6', category: 'bebidas-calientes', name: 'Té Canela', desc: 'Infusión de canela.', price: 15, icon: '🍵' },

  // ---- Gaseosas ----
  { id: 'g1', category: 'gaseosas', name: 'Gaseosa en Vidrio', desc: 'Coca-Cola, Sprite o Fanta en presentación de vidrio.', price: 10, icon: '🥫' },
  { id: 'g2', category: 'gaseosas', name: 'Gaseosa en Lata', desc: 'Coca-Cola, Sprite o Fanta en lata.', price: 13, icon: '🥫' },
];

// Categorías que abren el modal de personalización (modificadores)
const MODIFIER_CONFIG = {
  tacos: [
    {
      key: 'tortilla', label: 'Tipo de Tortilla', type: 'single', required: true,
      options: [
        { id: 'maiz', label: 'Maíz', price: 0 },
        { id: 'harina', label: 'Harina', price: 0 },
      ],
    },
    {
      key: 'picante', label: 'Nivel de Picante', type: 'single', required: true,
      options: [
        { id: 'sin', label: 'Sin picante', price: 0 },
        { id: 'medio', label: 'Medio 🌶️', price: 0 },
        { id: 'extra', label: 'Extra picante 🌶️🌶️', price: 0 },
      ],
    },
    {
      key: 'extras', label: 'Extras', type: 'multi', required: false,
      options: [
        { id: 'queso', label: 'Queso extra', price: 5 },
        { id: 'consome', label: 'Consomé extra', price: 10 },
        { id: 'aguacate', label: 'Aguacate', price: 5 },
        { id: 'cebolla', label: 'Cebolla y cilantro extra', price: 0 },
      ],
    },
  ],
  especialidades: [
    {
      key: 'extras', label: 'Extras', type: 'multi', required: false,
      options: [
        { id: 'tortillas', label: 'Tortillas extra (3u)', price: 5 },
        { id: 'aguacate', label: 'Aguacate', price: 5 },
        { id: 'queso', label: 'Queso extra', price: 5 },
      ],
    },
  ],
};

/* =========================================================
   STATE
   ========================================================= */
let cart = [];
let activeFilter = 'todos';
let currentModalProduct = null;

const els = {};

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  cacheEls();
  loadCart();
  renderFilters();
  renderProducts();
  bindEvents();
  document.getElementById('year').textContent = new Date().getFullYear();
});

function cacheEls() {
  els.filters = document.getElementById('filters');
  els.grid = document.getElementById('productGrid');
  els.cartToggle = document.getElementById('cartToggle');
  els.cartClose = document.getElementById('cartClose');
  els.cartOverlay = document.getElementById('cartOverlay');
  els.cartDrawer = document.getElementById('cartDrawer');
  els.cartItems = document.getElementById('cartItems');
  els.cartTotal = document.getElementById('cartTotal');
  els.cartCount = document.getElementById('cartCount');
  els.cartFab = document.getElementById('cartFab');
  els.cartFabCount = document.getElementById('cartFabCount');
  els.cartFabTotal = document.getElementById('cartFabTotal');
  els.checkoutForm = document.getElementById('checkoutForm');
  els.modifierModal = document.getElementById('modifierModal');
  els.modifierBody = document.getElementById('modifierBody');
  els.modifierClose = document.getElementById('modifierClose');
  els.toast = document.getElementById('toast');
  els.menuToggle = document.getElementById('menuToggle');
  els.mainNav = document.getElementById('mainNav');
}

function bindEvents() {
  els.cartToggle.addEventListener('click', openCart);
  els.cartClose.addEventListener('click', closeCart);
  els.cartOverlay.addEventListener('click', closeCart);
  els.cartFab.addEventListener('click', openCart);
  els.modifierClose.addEventListener('click', closeModifier);
  els.modifierModal.addEventListener('click', (e) => { if (e.target === els.modifierModal) closeModifier(); });
  els.checkoutForm.addEventListener('submit', handleCheckout);
  els.menuToggle.addEventListener('click', toggleMobileNav);
  els.mainNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => closeMobileNav()));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModifier(); closeCart(); }
  });
}

function toggleMobileNav() {
  const open = els.mainNav.classList.toggle('open');
  els.menuToggle.setAttribute('aria-expanded', String(open));
}
function closeMobileNav() {
  els.mainNav.classList.remove('open');
  els.menuToggle.setAttribute('aria-expanded', 'false');
}

/* =========================================================
   RENDER — Filtros y productos
   ========================================================= */
function renderFilters() {
  els.filters.innerHTML = CATEGORIES.map((c) => `
    <button class="filter-pill ${c.id === activeFilter ? 'active' : ''}" data-filter="${c.id}" role="tab" aria-selected="${c.id === activeFilter}">
      ${c.label}
    </button>
  `).join('');

  els.filters.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const list = activeFilter === 'todos' ? MENU : MENU.filter((p) => p.category === activeFilter);

  els.grid.innerHTML = list.map((p) => {
    const hasModifiers = !!MODIFIER_CONFIG[p.category];
    return `
      <article class="product-card" data-cat="${p.category}" data-id="${p.id}">
        <div class="product-media" aria-hidden="true">${p.icon}</div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <span class="product-price">${formatQ(p.price)}</span>
            ${hasModifiers
              ? `<button class="add-btn" data-action="open-modifier" data-id="${p.id}">Personalizar</button>`
              : simpleAddMarkup(p.id)
            }
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Bind: abrir modal de modificadores
  els.grid.querySelectorAll('[data-action="open-modifier"]').forEach((btn) => {
    btn.addEventListener('click', () => openModifier(btn.dataset.id));
  });

  // Bind: agregar simple (bebidas) con selector de cantidad
  els.grid.querySelectorAll('[data-action="simple-add"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const product = MENU.find((p) => p.id === btn.dataset.id);
      addToCart(product, 1, {});
    });
  });
}

function simpleAddMarkup(id) {
  return `<button class="add-btn" data-action="simple-add" data-id="${id}">+ Agregar</button>`;
}

/* =========================================================
   MODAL DE MODIFICADORES
   ========================================================= */
function openModifier(productId) {
  const product = MENU.find((p) => p.id === productId);
  if (!product) return;
  currentModalProduct = product;

  const groups = MODIFIER_CONFIG[product.category] || [];
  const state = {};
  groups.forEach((g) => { state[g.key] = g.type === 'multi' ? [] : (g.required ? g.options[0].id : null); });
  let qty = 1;

  renderModifierModal(product, groups, state, qty);
  els.modifierModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function renderModifierModal(product, groups, state, qty) {
  const groupsHtml = groups.map((g) => `
    <div class="mod-group" data-key="${g.key}">
      <div class="mod-group-title">
        <span>${g.label}${g.required ? ' *' : ''}</span>
        <small>${g.type === 'multi' ? 'Opcional · varias' : 'Elige una'}</small>
      </div>
      ${g.options.map((o) => {
        const selected = g.type === 'multi' ? state[g.key].includes(o.id) : state[g.key] === o.id;
        return `
          <label class="mod-option ${selected ? 'selected' : ''}" data-group="${g.key}" data-opt="${o.id}">
            <span class="mod-option-label">
              <input type="${g.type === 'multi' ? 'checkbox' : 'radio'}" name="mod-${g.key}" ${selected ? 'checked' : ''}>
              ${o.label}
            </span>
            <span class="mod-option-price">${o.price > 0 ? '+' + formatQ(o.price) : 'Sin costo'}</span>
          </label>
        `;
      }).join('')}
    </div>
  `).join('');

  els.modifierBody.innerHTML = `
    <div class="modal-hero" aria-hidden="true">${product.icon}</div>
    <h3>${product.name}</h3>
    <p class="modal-price">${formatQ(product.price)} base</p>
    <p class="product-desc">${product.desc}</p>
    ${groupsHtml}
    <div class="modal-qty">
      <span class="mod-group-title" style="margin:0;">Cantidad</span>
      <div class="qty-stepper">
        <button type="button" data-qty="dec" aria-label="Restar">−</button>
        <span id="modalQtyVal">${qty}</span>
        <button type="button" data-qty="inc" aria-label="Sumar">+</button>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary btn-block" id="modalAddBtn">Agregar al carrito · ${formatQ(computeUnitPrice(product, groups, state) * qty)}</button>
    </div>
  `;

  // Bind option changes (usar "change" en el input, no "click" en el <label>:
  // un click en el label dispara el evento tanto en el label como, de forma
  // sintética, en el input asociado — con "click" en el label se procesaba
  // el toggle dos veces y la selección quedaba sin efecto).
  els.modifierBody.querySelectorAll('.mod-option input').forEach((inputEl) => {
    inputEl.addEventListener('change', () => {
      const opt = inputEl.closest('.mod-option');
      const groupKey = opt.dataset.group;
      const optId = opt.dataset.opt;
      const group = groups.find((g) => g.key === groupKey);
      if (group.type === 'multi') {
        const idx = state[groupKey].indexOf(optId);
        if (inputEl.checked && idx === -1) state[groupKey].push(optId);
        if (!inputEl.checked && idx >= 0) state[groupKey].splice(idx, 1);
      } else {
        state[groupKey] = optId;
      }
      renderModifierModal(product, groups, state, qty);
    });
  });

  // Bind qty
  els.modifierBody.querySelector('[data-qty="dec"]').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    renderModifierModal(product, groups, state, qty);
  });
  els.modifierBody.querySelector('[data-qty="inc"]').addEventListener('click', () => {
    qty = Math.min(20, qty + 1);
    renderModifierModal(product, groups, state, qty);
  });

  // Bind add
  els.modifierBody.querySelector('#modalAddBtn').addEventListener('click', () => {
    const missingRequired = groups.some((g) => g.required && !state[g.key]);
    if (missingRequired) {
      showToast('Selecciona las opciones requeridas ⚠️');
      return;
    }
    addToCart(product, qty, buildModifierSelection(groups, state));
    closeModifier();
  });
}

function buildModifierSelection(groups, state) {
  const selection = { groups: [] };
  groups.forEach((g) => {
    if (g.type === 'multi') {
      const chosen = g.options.filter((o) => state[g.key].includes(o.id));
      if (chosen.length) selection.groups.push({ label: g.label, items: chosen });
    } else if (state[g.key]) {
      const chosen = g.options.find((o) => o.id === state[g.key]);
      if (chosen) selection.groups.push({ label: g.label, items: [chosen] });
    }
  });
  return selection;
}

function computeUnitPrice(product, groups, state) {
  let extra = 0;
  groups.forEach((g) => {
    if (g.type === 'multi') {
      g.options.forEach((o) => { if (state[g.key].includes(o.id)) extra += o.price; });
    } else {
      const chosen = g.options.find((o) => o.id === state[g.key]);
      if (chosen) extra += chosen.price;
    }
  });
  return product.price + extra;
}

function closeModifier() {
  els.modifierModal.hidden = true;
  document.body.style.overflow = '';
  currentModalProduct = null;
}

/* =========================================================
   CARRITO
   ========================================================= */
function addToCart(product, qty, selection) {
  const modsExtra = (selection.groups || []).reduce((sum, g) => sum + g.items.reduce((s, i) => s + i.price, 0), 0);
  const unitPrice = product.price + modsExtra;

  cart.push({
    cartId: `${product.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    productId: product.id,
    name: product.name,
    icon: product.icon,
    basePrice: product.price,
    unitPrice,
    qty,
    mods: selection.groups || [],
  });

  saveCart();
  renderCart();
  showToast(`${product.name} agregado ${product.icon}`);
  pulseCartBtn();
}

function removeCartItem(cartId) {
  cart = cart.filter((i) => i.cartId !== cartId);
  saveCart();
  renderCart();
}

function changeCartQty(cartId, delta) {
  const item = cart.find((i) => i.cartId === cartId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
}
function cartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function renderCart() {
  const count = cartCount();
  const total = cartTotal();

  els.cartCount.textContent = count;
  els.cartTotal.textContent = formatQ(total);
  els.cartFabCount.textContent = count;
  els.cartFabTotal.textContent = formatQ(total);
  els.cartFab.hidden = count === 0;

  if (cart.length === 0) {
    els.cartItems.innerHTML = `<div class="cart-empty"><span>🛒</span>Tu carrito está vacío.<br>¡Agrega algo delicioso!</div>`;
    return;
  }

  els.cartItems.innerHTML = cart.map((item) => {
    const modsText = item.mods.map((g) => `${g.label}: ${g.items.map((i) => i.label).join(', ')}`).join(' · ');
    return `
      <div class="cart-item">
        <div class="cart-item-icon" aria-hidden="true">${item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          ${modsText ? `<div class="cart-item-mods">${modsText}</div>` : ''}
          <div class="cart-item-footer">
            <div class="qty-stepper">
              <button type="button" data-dec="${item.cartId}" aria-label="Restar">−</button>
              <span>${item.qty}</span>
              <button type="button" data-inc="${item.cartId}" aria-label="Sumar">+</button>
            </div>
            <span class="cart-item-price">${formatQ(item.unitPrice * item.qty)}</span>
          </div>
          <button class="cart-item-remove" data-remove="${item.cartId}">Eliminar</button>
        </div>
      </div>
    `;
  }).join('');

  els.cartItems.querySelectorAll('[data-inc]').forEach((b) => b.addEventListener('click', () => changeCartQty(b.dataset.inc, 1)));
  els.cartItems.querySelectorAll('[data-dec]').forEach((b) => b.addEventListener('click', () => changeCartQty(b.dataset.dec, -1)));
  els.cartItems.querySelectorAll('[data-remove]').forEach((b) => b.addEventListener('click', () => removeCartItem(b.dataset.remove)));
}

function openCart() {
  renderCart();
  els.cartOverlay.hidden = false;
  els.cartDrawer.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  els.cartOverlay.hidden = true;
  els.cartDrawer.hidden = true;
  document.body.style.overflow = '';
}

function pulseCartBtn() {
  els.cartToggle.style.transform = 'scale(1.15)';
  setTimeout(() => { els.cartToggle.style.transform = ''; }, 180);
}

function saveCart() {
  try { localStorage.setItem('tacosElPocas.cart', JSON.stringify(cart)); } catch (e) { /* localStorage no disponible */ }
}
function loadCart() {
  try {
    const raw = localStorage.getItem('tacosElPocas.cart');
    if (raw) cart = JSON.parse(raw);
  } catch (e) { cart = []; }
}

/* =========================================================
   CHECKOUT — Genera y abre el mensaje de WhatsApp
   ========================================================= */
function handleCheckout(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast('Tu carrito está vacío 🌮');
    return;
  }

  const name = document.getElementById('custName').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const payment = document.getElementById('custPayment').value;
  const notes = document.getElementById('custNotes').value.trim();

  if (!name || !address) {
    showToast('Completa nombre y dirección ⚠️');
    return;
  }

  const message = buildWhatsAppMessage({ name, address, payment, notes });
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function buildWhatsAppMessage({ name, address, payment, notes }) {
  const lines = [];
  lines.push('🌮 *NUEVO PEDIDO - TAQUERÍA*');
  lines.push('');
  lines.push('👤 *Cliente:* ' + name);
  lines.push('📍 *Dirección:* ' + address);
  lines.push('💳 *Método de pago:* ' + payment);
  lines.push('');
  lines.push('🧾 *Detalle del pedido:*');

  cart.forEach((item, idx) => {
    lines.push(`${idx + 1}. ${item.name} x${item.qty} — ${formatQ(item.unitPrice)} c/u`);
    item.mods.forEach((g) => {
      lines.push(`   • ${g.label}: ${g.items.map((i) => i.label).join(', ')}`);
    });
    lines.push(`   Subtotal: ${formatQ(item.unitPrice * item.qty)}`);
  });

  lines.push('');
  lines.push(`💰 *TOTAL A PAGAR: ${formatQ(cartTotal())}*`);

  if (notes) {
    lines.push('');
    lines.push('📝 *Notas para cocina:* ' + notes);
  }

  return lines.join('\n');
}

/* =========================================================
   UTIL
   ========================================================= */
function formatQ(amount) {
  return `Q${amount.toFixed(2)}`;
}

let toastTimer = null;
function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}
