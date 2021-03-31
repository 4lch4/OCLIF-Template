import {expect, test} from '@oclif/test'

describe('get:another:placeholder', () => {
  test
  .stdout()
  .command(['get:another:placeholder'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['get:another:placeholder', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
