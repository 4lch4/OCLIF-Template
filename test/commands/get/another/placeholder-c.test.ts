import {expect, test} from '@oclif/test'

describe('get:another:placeholder-c', () => {
  test
  .stdout()
  .command(['get:another:placeholder-c'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['get:another:placeholder-c', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
