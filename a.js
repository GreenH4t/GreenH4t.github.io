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
        }
      ]
    };
  }

  strictlyEquals(args) {
    return args.ONE == args.TWO;
  }
Scratch.extensions.register(new matht());
