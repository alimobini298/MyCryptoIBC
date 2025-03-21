import { fAssets } from '@../jest_config/__fixtures__/assets';

import { DAIUUID, POLYGON_NETWORK, USDCPolygonUUID, XDAIUUID } from '@config';
import { fAccounts, fNetworks } from '@fixtures';
import { TTicker } from '@types';

import { IMembershipId, MEMBERSHIP_CONFIG } from './config';
import { createApproveTx, createPurchaseTx } from './helpers';
import { MembershipSimpleTxFormFull } from './types';

const payload: MembershipSimpleTxFormFull = {
  membershipSelected: MEMBERSHIP_CONFIG['twelvemonths'],
  asset: fAssets.find(({ uuid }) => uuid === DAIUUID)!,
  network: fNetworks[0],
  address: fAccounts[0].address,
  amount: '30',
  gasLimit: 500000,
  gasPrice: '1',
  nonce: '1',
  account: fAccounts[0],
  maxFeePerGas: '20',
  maxPriorityFeePerGas: '1'
};

describe('createApproveTx()', () => {
  it('can create valid approveTx from membership tx params created from the purchase membership form', () => {
    const expected = {
      chainId: 1363,
      data:
        '0x095ea7b3000000000000000000000000ee2b7864d8bc731389562f820148e372f57571d80000000000000000000000000000000000000000000000056bc75e2d63100000',
      from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
      gasPrice: '0x3b9aca00',
      to: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      value: '0x0'
    };
    expect(createApproveTx(payload)).toStrictEqual(expected);
  });
});

describe('createPurchaseTx()', () => {
  it('can create valid purchaseTx for a 12 month dai membership', () => {
    const expected = {
      chainId: 1363,
      data:
        '0x3f33133a0000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000fe5443fac29fa621cfc33d41d1927fd0f5e0bb7c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000',
      from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
      gasPrice: '0x3b9aca00',
      to: '0xee2B7864d8bc731389562F820148e372F57571D8',
      value: '0x0'
    };
    expect(createPurchaseTx(payload)).toStrictEqual(expected);
  });

  it('can create valid purchaseTx for a 12 month xdai membership', () => {
    const membershipId = 'xdaitwelvemonths' as IMembershipId;
    const p: MembershipSimpleTxFormFull = {
      ...payload,
      asset: fAssets.find(({ uuid }) => uuid === XDAIUUID)!,
      membershipSelected: MEMBERSHIP_CONFIG[membershipId],
      network: fNetworks[2]
    };
    const expected = {
      chainId: 100,
      data:
        '0x3f33133a0000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000fe5443fac29fa621cfc33d41d1927fd0f5e0bb7c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000',
      from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
      gasPrice: '0x3b9aca00',
      to: '0xf97f516Cc0700a4Ce9Ee64D488F744f631e1525d',
      value: '0x1a055690d9db80000'
    };
    expect(createPurchaseTx(p)).toStrictEqual(expected);
  });

  it('can create valid purchaseTx for a 12 month polygon membership', () => {
    const membershipId = 'polygontwelvemonths' as IMembershipId;
    const p: MembershipSimpleTxFormFull = {
      ...payload,
      membershipSelected: MEMBERSHIP_CONFIG[membershipId],
      asset: {
        uuid: USDCPolygonUUID,
        name: 'USDC',
        type: 'erc20',
        networkId: POLYGON_NETWORK,
        isCustom: false,
        ticker: 'USDC' as TTicker,
        decimal: 6
      },
      network: { ...fNetworks[2], chainId: 137 }
    };
    const expected = {
      chainId: 137,
      data:
        '0x3f33133a0000000000000000000000000000000000000000000000000000000005f5e100000000000000000000000000fe5443fac29fa621cfc33d41d1927fd0f5e0bb7c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000',
      from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
      gasPrice: '0x3b9aca00',
      to: '0x46522c5a1018E13E40e3117191200e4CF6039241',
      value: '0x1a055690d9db80000'
    };
    expect(createPurchaseTx(p)).toStrictEqual(expected);
  });
});
