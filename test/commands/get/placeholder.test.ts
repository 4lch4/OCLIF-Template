import {expect, test} from '@oclif/test'

describe('get:placeholder', () => {
  test
  .stdout()
  .command(['get:placeholder'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['get:placeholder', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
