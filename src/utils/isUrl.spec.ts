import { isUrl } from './isUrl';

describe('isUrl', () => {
  it('identifies protocol-prefixed localhost url value as valid', () => {
    expect(isUrl('https://localhost:3000')).toBeTruthy();
  });
  it('identifies protocol-prefixed wallet.ibcnet.ir url value as valid', () => {
    expect(isUrl('https://wallet.ibcnet.ir')).toBeTruthy();
  });
  it('identifies protocol-prefixed app.mycrypto.com url value as valid', () => {
    expect(isUrl('https://wallet.ibcnet.ir')).toBeTruthy();
  });
  it('identifies localhost url value as invalid', () => {
    expect(isUrl('localhost:3000')).toBeFalsy();
  });
  it('identifies wallet.ibcnet.ir url value as invalid', () => {
    expect(isUrl('wallet.ibcnet.ir')).toBeFalsy();
  });
  // eslint-disable-next-line jest/no-identical-title
  it('identifies wallet.ibcnet.ir url value as invalid', () => {
    expect(isUrl('wallet.ibcnet.ir')).toBeFalsy();
  });
  it('identifies empty string as invalid', () => {
    expect(isUrl('')).toBeFalsy();
  });
});
