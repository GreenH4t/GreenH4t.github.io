class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It aaa!!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: '1'
        },
        {
          opcode: 'heo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'a'
        },
        {
          opcode: 'ae',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '70'
            }
          }
        }
      ]
    };
  }

  hello() {
    return 'World!';
  }
  heo() {
    return 'UUU!';
  }
  ae(args) {
    return args.A <== args.B;
  }
}

Scratch.extensions.register(new HelloWorld());
