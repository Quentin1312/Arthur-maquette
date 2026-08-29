/* <zone-map> — carte de la zone d'intervention (Leaflet + tuiles OpenStreetMap).
   Attributs : lat, lng, rayon (km), zoom. Villes listées via data-villes="Nom:lat:lng|…" */
(function () {
  const VILLES = 'Metz:49.1193:6.1757|Thionville:49.3589:6.1686|Nancy:48.6921:6.1844|Verdun:49.1594:5.3833|Sarreguemines:49.1108:7.0686';

  class ZoneMap extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.cssText = 'position:absolute;inset:0;display:block;background:#e8e6e2';
      this._waitForLeaflet(() => this._build());
    }

    _waitForLeaflet(cb, tries) {
      tries = tries || 0;
      if (window.L && window.L.map) return cb();
      if (tries > 200) return;
      setTimeout(() => this._waitForLeaflet(cb, tries + 1), 60);
    }

    _build() {
      const lat = parseFloat(this.getAttribute('lat') || '49.1193');
      const lng = parseFloat(this.getAttribute('lng') || '6.1757');
      const rayon = parseFloat(this.getAttribute('rayon') || '70') * 1000;
      const zoom = parseFloat(this.getAttribute('zoom') || '8');

      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0';
      this.appendChild(host);

      const map = L.map(host, {
        center: [lat, lng],
        zoom: zoom,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(map);

      const pane = host.querySelector('.leaflet-tile-pane');
      if (pane) pane.style.filter = 'grayscale(1) contrast(.92) brightness(1.06)';

      L.circle([lat, lng], {
        radius: rayon,
        color: '#d8202a',
        weight: 2,
        opacity: 0.9,
        fillColor: '#d8202a',
        fillOpacity: 0.07
      }).addTo(map);

      (this.getAttribute('data-villes') || VILLES).split('|').forEach((v, i) => {
        const p = v.split(':');
        if (p.length < 3) return;
        const principal = i === 0;
        L.marker([parseFloat(p[1]), parseFloat(p[2])], {
          icon: L.divIcon({
            className: '',
            iconSize: [0, 0],
            html:
              '<div style="position:relative;transform:translate(-50%,-50%);display:flex;align-items:center;gap:7px;white-space:nowrap">' +
              '<span style="width:' + (principal ? 12 : 8) + 'px;height:' + (principal ? 12 : 8) + 'px;border-radius:50%;background:' +
              (principal ? '#d8202a' : '#1a1a19') + ';box-shadow:0 0 0 3px rgba(255,255,255,.9)"></span>' +
              '<span style="font:600 ' + (principal ? 13 : 11.5) + 'px/1 \'Inter Tight\',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#1a1a19;text-shadow:0 1px 0 rgba(255,255,255,.9)">' +
              p[0] + '</span></div>'
          })
        }).addTo(map);
      });

      window.addEventListener('resize', () => map.invalidateSize());
      setTimeout(() => map.invalidateSize(), 250);
    }
  }

  if (!window.customElements.get('zone-map')) window.customElements.define('zone-map', ZoneMap);
})();
