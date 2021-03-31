import {expect, test} from '@oclif/test'

describe('get:placeholder-b', () => {
  test
  .stdout()
  .command(['get:placeholder-b'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['get:placeholder-b', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
