class math {
  getInfo() {
    return {
      id: 'mathExt',
      name: 'Math',
      blocks: [
        {
          opcode: 'notEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ≠ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'notGrt',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ≯ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'grtEq',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ≥ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'notLess',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ≮ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'lessEq',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ≤ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50
            }
          }
        }
      ]
    };
  }

  notEqual(args) {
    return not args.ONE == args.TWO;
  },
  notGrt(args) {
    return not args.ONE > args.TWO;
  },
  grtEq(args) {
    return args.ONE >== args.TWO;
  },
  notLess(args) {
    return not args.ONE < args.TWO;
  },
  lessEq(args) {
    return args.ONE <== args.TWO;
  }
}
Scratch.extensions.register(new math());
