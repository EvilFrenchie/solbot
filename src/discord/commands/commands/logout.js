import WalletService from '../../../wallet/WalletService';
import { COMMAND_PREFIX } from '../../../config';

export default {
  name: 'logout',
  description: 'Logs you out of the wallet.',
  usage: [`${COMMAND_PREFIX}logout`],
  async execute(message) {
    const userId = message.author.id;
    await WalletService.logout(userId);
    message.channel.send('🥳 Successfully logged out 🥳');
  },
};
