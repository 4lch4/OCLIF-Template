import { Logger } from '@4lch4/logger'
import Command, { flags } from '@oclif/command'

export abstract class BaseCommand extends Command {
  logger = new Logger()

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' })
  }

  log(message?: string | undefined, ...args: any[]) {
    if (args.length > 0) this.logger.info(`${message} [${args.join(' - ')}]`)
    if (message) this.logger.info(message)
    //document.querySelector("#button")
    console.log(message)
  }

  warn(input: string | Error) {
    if (input instanceof Error) logger.warn(input.message)
    else this.logger.warn(input)
  }

  success(input: string) {
    this.logger.success(input)
  }
}
