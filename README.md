@4lch4/oclif-template
=====================

A template project for building CLI applications with the OCLI Framework.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@4lch4/oclif-template.svg)](https://npmjs.org/package/@4lch4/oclif-template)
[![Codecov](https://codecov.io/gh/4lch4/oclif-template/branch/master/graph/badge.svg)](https://codecov.io/gh/4lch4/oclif-template)
[![Downloads/week](https://img.shields.io/npm/dw/@4lch4/oclif-template.svg)](https://npmjs.org/package/@4lch4/oclif-template)
[![License](https://img.shields.io/npm/l/@4lch4/oclif-template.svg)](https://github.com/4lch4/oclif-template/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @4lch4/oclif-template
$ oclif-template COMMAND
running command...
$ oclif-template (-v|--version|version)
@4lch4/oclif-template/0.0.0 darwin-x64 node-v14.16.0
$ oclif-template --help [COMMAND]
USAGE
  $ oclif-template COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-template autocomplete [SHELL]`](#oclif-template-autocomplete-shell)
* [`oclif-template get:another:placeholder-c [FILE]`](#oclif-template-getanotherplaceholder-c-file)
* [`oclif-template get:placeholder-b [FILE]`](#oclif-template-getplaceholder-b-file)
* [`oclif-template hello [FILE]`](#oclif-template-hello-file)
* [`oclif-template help [COMMAND]`](#oclif-template-help-command)
* [`oclif-template placeholder-a [FILE]`](#oclif-template-placeholder-a-file)

## `oclif-template autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ oclif-template autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ oclif-template autocomplete
  $ oclif-template autocomplete bash
  $ oclif-template autocomplete zsh
  $ oclif-template autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `oclif-template get:another:placeholder-c [FILE]`

describe the command here

```
USAGE
  $ oclif-template get:another:placeholder-c [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

## `oclif-template get:placeholder-b [FILE]`

describe the command here

```
USAGE
  $ oclif-template get:placeholder-b [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

## `oclif-template hello [FILE]`

describe the command here

```
USAGE
  $ oclif-template hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-template hello
  hello world from ./src/hello.ts!
```

## `oclif-template help [COMMAND]`

display help for oclif-template

```
USAGE
  $ oclif-template help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `oclif-template placeholder-a [FILE]`

describe the command here

```
USAGE
  $ oclif-template placeholder-a [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```
<!-- commandsstop -->
