//import { CRYPTOSCAMDB, EXT_URLS } from '@config';
import { IAppRoutes } from '@routing/routes';
import { translateRaw } from '@translations';
import { INavTray, IRouteLink } from '@types';

export const desktopLinks = (APP_ROUTES: IAppRoutes) => {
  const Links: IRouteLink[] = [
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_HOME'),
      to: APP_ROUTES.DASHBOARD.path,
      enabled: APP_ROUTES.DASHBOARD.enabled,
      icon: 'nav-home'
    },
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_SEND'),
      to: APP_ROUTES.SEND.path,
      enabled: APP_ROUTES.SEND.enabled,
      icon: 'nav-send'
    },
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_RECEIVE'),
      to: APP_ROUTES.REQUEST_ASSETS.path,
      enabled: APP_ROUTES.REQUEST_ASSETS.enabled,
      icon: 'nav-receive'
    },
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_ADD_ACCOUNT'),
      to: APP_ROUTES.ADD_ACCOUNT.path,
      enabled: APP_ROUTES.ADD_ACCOUNT.enabled,
      icon: 'nav-add-account'
    }
  ];
  return Links;
};

export const toolsTray = (APP_ROUTES: IAppRoutes) => {
  const Links: INavTray = {
    type: 'tray',
    title: translateRaw('NAVIGATION_TOOLS'),
    enabled: true,
    icon: 'nav-tools',
    items: [
      {
        type: 'internal',
        title: translateRaw('NAVIGATION_SIGN_MESSAGE'),
        to: APP_ROUTES.SIGN_MESSAGE.path,
        enabled: APP_ROUTES.SIGN_MESSAGE.enabled,
        icon: 'nav-sign-message'
      },
      {
        type: 'internal',
        title: translateRaw('NAVIGATION_CONTRACTS'),
        to: APP_ROUTES.INTERACT_WITH_CONTRACTS.path,
        enabled: APP_ROUTES.INTERACT_WITH_CONTRACTS.enabled,
        icon: 'nav-interact-with-contracts'
      },
      {
        type: 'internal',
        title: translateRaw('NAVIGATION_BROADCAST_TRANSACTION'),
        to: APP_ROUTES.BROADCAST_TX.path,
        enabled: APP_ROUTES.BROADCAST_TX.enabled,
        icon: 'nav-broadcast-transaction'
      },
      {
        type: 'internal',
        to: APP_ROUTES.TX_STATUS.path,
        enabled: APP_ROUTES.TX_STATUS.enabled,
        title: translateRaw('NAVIGATION_TX_STATUS'),
        icon: 'nav-tx-status'
      },
      {
        type: 'internal',
        to: APP_ROUTES.NFT_DASHBOARD.path,
        enabled: APP_ROUTES.NFT_DASHBOARD.enabled,
        title: translateRaw('NFT_DASHBOARD'),
        icon: 'nav-nft'
      }
    ]
  };
  return Links;
};

export const supportUsTray: INavTray = {
  type: 'tray',
  title: translateRaw('NAVIGATION_SUPPORT_US'),
  enabled: true,
  icon: 'nav-support-us',
  items: []
};

export const settingsLinks = (APP_ROUTES: IAppRoutes) => {
  const link: IRouteLink = {
    type: 'internal',
    title: translateRaw('NAVIGATION_SETTINGS'),
    to: APP_ROUTES.SETTINGS.path,
    enabled: APP_ROUTES.SETTINGS.enabled,
    icon: 'nav-settings'
  };
  return link;
};

export const mobileLinks = (APP_ROUTES: IAppRoutes) => {
  const Links: (IRouteLink | INavTray)[] = [
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_HOME'),
      to: APP_ROUTES.DASHBOARD.path,
      enabled: APP_ROUTES.DASHBOARD.enabled,
      icon: 'nav-home'
    },
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_SEND'),
      to: APP_ROUTES.SEND.path,
      enabled: APP_ROUTES.SEND.enabled,
      icon: 'nav-send'
    },
    {
      type: 'tray',
      title: translateRaw('NAVIGATION_ASSETS'),
      enabled: true,
      icon: 'nav-assets',
      items: [
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_SEND'),
          to: APP_ROUTES.SEND.path,
          enabled: APP_ROUTES.SEND.enabled,
          icon: 'nav-send'
        },
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_SWAP'),
          to: APP_ROUTES.SWAP.path,
          enabled: APP_ROUTES.SWAP.enabled,
          icon: 'nav-swap'
        },
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_RECEIVE'),
          to: APP_ROUTES.REQUEST_ASSETS.path,
          enabled: APP_ROUTES.REQUEST_ASSETS.enabled,
          icon: 'nav-receive'
        },
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_BUY'),
          to: APP_ROUTES.BUY.path,
          enabled: APP_ROUTES.BUY.enabled,
          icon: 'nav-buy'
        }
      ]
    },
    {
      type: 'tray',
      title: translateRaw('NAVIGATION_TOOLS'),
      enabled: true,
      icon: 'nav-tools',
      items: [
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_SIGN_MESSAGE'),
          to: APP_ROUTES.SIGN_MESSAGE.path,
          enabled: APP_ROUTES.SIGN_MESSAGE.enabled,
          icon: 'nav-sign-message'
        },
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_CONTRACTS'),
          to: APP_ROUTES.INTERACT_WITH_CONTRACTS.path,
          enabled: APP_ROUTES.INTERACT_WITH_CONTRACTS.enabled,
          icon: 'nav-interact-with-contracts'
        },
        {
          type: 'internal',
          title: translateRaw('NAVIGATION_BROADCAST_TRANSACTION'),
          to: APP_ROUTES.BROADCAST_TX.path,
          enabled: APP_ROUTES.BROADCAST_TX.enabled,
          icon: 'nav-broadcast-transaction'
        },
        {
          type: 'internal',
          to: APP_ROUTES.TX_STATUS.path,
          enabled: APP_ROUTES.TX_STATUS.enabled,
          title: translateRaw('NAVIGATION_TX_STATUS'),
          icon: 'nav-tx-status'
        },
        {
          type: 'internal',
          to: APP_ROUTES.ENS.path,
          enabled: APP_ROUTES.ENS.enabled,
          title: translateRaw('NAVIGATION_ENS'),
          icon: 'nav-ens'
        },
        {
          type: 'internal',
          to: APP_ROUTES.TOKEN_MIGRATION.path,
          enabled: APP_ROUTES.TOKEN_MIGRATION.enabled,
          title: translateRaw('NAVIGATION_MIGRATE'),
          icon: 'nav-migrate'
        },
        {
          type: 'internal',
          to: APP_ROUTES.FAUCET.path,
          enabled: APP_ROUTES.FAUCET.enabled,
          title: translateRaw('NAVIGATION_FAUCET'),
          icon: 'nav-faucet'
        },
        {
          type: 'internal',
          to: APP_ROUTES.NFT_DASHBOARD.path,
          enabled: APP_ROUTES.NFT_DASHBOARD.enabled,
          title: translateRaw('NFT_DASHBOARD'),
          icon: 'nav-nft'
        }
      ]
    },
    {
      type: 'internal',
      title: translateRaw('NAVIGATION_SETTINGS'),
      to: APP_ROUTES.SETTINGS.path,
      enabled: APP_ROUTES.SETTINGS.enabled,
      icon: 'nav-settings'
    }
  ];
  return Links;
};

export const socialLinks = [
  {
    link: 'https://twitter.com/ibcnet',
    icon: 'nav-twitter'
  },
  {
    link: 'https://instagram.com/ibcnet',
    icon: 'nav-instagram'
  },
  {
    link: 'https://www.linkedin.com/company/ibcnet',
    icon: 'nav-linkedin'
  },
  {
    link: 'https://github.com/ibcnet',
    icon: 'nav-github'
  }
];

export const MYCLinks = [
  {
    title: translateRaw('NEW_FOOTER_TEXT_11'),
    link: 'https://blog.ibcnet.ir/',
    icon: 'nav-blog'
  },
  {
    title: translateRaw('NEW_FOOTER_TEXT_8'),
    link: 'https://ibcnet.ir',
    icon: 'nav-team'
  },
  {
    title: translateRaw('NEW_FOOTER_TEXT_9'),
    link: 'mailto:press@ibcnet.ir',
    icon: 'nav-press'
  },
  {
    title: translateRaw('NEW_FOOTER_TEXT_10'),
    link: 'https://ibcnet.ir',
    icon: 'nav-privacy'
  },
  {
    title: translateRaw('NAVIGATION_DISCLAIMER'),
    link: 'https://ibcnet.ir',
    icon: 'nav-disclaimer'
  }
];

export const productsLinks = [
  {
    title: 'IBCAddressLookup',
    link: 'https://explore.ibcnet.ir'
  }
];
