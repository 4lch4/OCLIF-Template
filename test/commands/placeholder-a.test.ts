import {expect, test} from '@oclif/test'

describe('placeholder-a', () => {
  test
  .stdout()
  .command(['placeholder-a'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['placeholder-a', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
