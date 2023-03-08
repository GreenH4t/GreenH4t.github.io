class matht {
  getInfo() {
    return {
      id: 'mathu',
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] might ≥ [TWO]',
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
          opcode: 'notEq',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] migh≠≠≠≠≠= ≥ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Seond2345f value'
            }
          }
        }
      ]
    };
  }

  strictlyEquals(args) {
    return args.ONE == args.TWO;
  },
  notEq(args) {
    return not args.ONE == args.TWO;
  }
}
Scratch.extensions.register(new matht());
