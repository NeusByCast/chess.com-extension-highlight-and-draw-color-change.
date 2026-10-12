// Make plain right-click highlights/arrows use chess.com's Alt (blue) color.
(() => {
  const t = { get: () => true, configurable: true };
  const f = e => { if (e.button === 2 || e.buttons & 2) Object.defineProperty(e, 'altKey', t); };
  for (const n of ['pointerdown','pointermove','pointerup','mousedown','mousemove','mouseup','contextmenu'])
    window.addEventListener(n, f, true);
})();
