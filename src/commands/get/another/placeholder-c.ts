import { BaseCommand } from '../../../lib'

export default class GetAnotherPlaceholderC extends BaseCommand {
  static description = 'describe the command here'

  static flags = {
    ...BaseCommand.flags
  }

  async run() {}
}
