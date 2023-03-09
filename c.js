class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample',
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
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
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }

  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  grtEq(args) {
    return args.ONE >== args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
