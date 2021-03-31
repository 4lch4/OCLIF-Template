import {expect, test} from '@oclif/test'

describe('placeholder', () => {
  test
  .stdout()
  .command(['placeholder'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['placeholder', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
