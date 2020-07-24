import { FunctionalComponent, h } from '@stencil/core';

interface ContactsAppIconProps {}

export const ContactsAppIcon: FunctionalComponent<ContactsAppIconProps> = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1067 1063"
    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421' }}
  >
    <rect id="Contacts" x="3.095" y="0" width="1062.5" height="1062.5" style={{ fill: 'none' }} />
    <g>
      <rect
        id="account.-card.-lines"
        class="app-menu-icon-accent-color"
        x="570.804"
        y="321.116"
        width="284.722"
        height="222.222"
        style={{ fill: '#ffc107' }}
      />
      <path
        id="account.-card.-details"
        class="app-menu-icon-primary-color"
        d="M239.206,265.625l590.278,0c30.907,0 59.028,28.121 59.028,59.028l0,413.194c0,30.907 -28.121,59.028 -59.028,59.028l-590.278,0c-30.907,0 -59.027,-28.121 -59.027,-59.028l0,-413.194c0,-30.907 28.12,-59.028 59.027,-59.028Zm354.167,88.542l0,29.514l236.111,0l0,-29.514l-236.111,0Zm0,59.027l0,29.514l236.111,0l0,-29.514l-236.111,0Zm0,59.028l0,29.514l206.597,0l0,-29.514l-206.597,0Zm-177.083,115.287c-59.028,0 -177.084,32.283 -177.084,91.31l0,29.514l354.167,0l0,-29.514c0,-59.027 -118.056,-91.31 -177.083,-91.31Zm0,-233.342c-48.9,0 -88.542,39.641 -88.542,88.541c0,48.902 39.641,88.542 88.542,88.542c48.9,0 88.541,-39.64 88.541,-88.542c0,-48.9 -39.641,-88.541 -88.541,-88.541Z"
        style={{ fill: '#2196f3', fillRule: 'nonzero' }}
      />
    </g>
  </svg>
);
