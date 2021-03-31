import { BaseCommand } from '../lib'

export default class PlaceholderA extends BaseCommand {
  static description = 'Placeholder A command.'

  static flags = {
    ...BaseCommand.flags
  }

  async run() {}
}
