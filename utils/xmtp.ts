import type { DecodedMessage } from '@xmtp/xmtp-js';
import { Client } from '@xmtp/xmtp-js';
import { ethers } from 'ethers';
import path from 'path';

const customHttpProvider = new ethers.providers.JsonRpcProvider(
  'https://solitary-silent-fog.discover.quiknode.pro/20d2cc77b957b3a6c7a8c0591827ee921703999d/',
);

export class XMTP {
  public static sendXMTPNotification = (params: {
    pk: string;
    toEVMAddress: string;
    message: string;
  }): Promise<DecodedMessage | void> => {
    return new Promise((resolve) => {
      console.log('got to notif');
      try {
        void (async () => {
          const { pk, toEVMAddress, message } = params;
          console.log({ pk, toEVMAddress, message });
          const wallet = new ethers.Wallet(pk, customHttpProvider);
          console.log('wallet', wallet);

          const xmtp = await Client.create(wallet, {
            env: 'production',
          });

          const conversation = await xmtp.conversations
            .newConversation(toEVMAddress.toLowerCase())
            .catch((err) => {
              // not a real error. Fail silently
              if (
                typeof err?.message === 'string' &&
                err.message.includes('is not on the XMTP network')
              ) {
                return resolve();
              }
              console.error(err);
            });

          return resolve(conversation?.send(message));
        })();
      } catch (err) {
        console.error(err);
      }
    });
  };
}
