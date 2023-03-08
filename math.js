(function(Scratch) {
  'use strict';
    if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Hello World example must run unsandboxed');
  }
class math {
  getInfo() {
    return {
      id: 'coolmath',
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
              defaultValue: '50'
            }
          }
        }
      ]
    };
  }

  notEqual(args) {
    return not args.ONE == args.TWO;
  }
Scratch.extensions.register(new math());
})(Scratch);
