import { BaseCommand } from '../../lib'


export default class GetPlaceholderB extends BaseCommand {
  static description = 'Placeholder B command.'

  static flags = {
    ...BaseCommand.flags
  }

  async run() {}
}
