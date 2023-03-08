class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It aaa!!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello!'
        },
        {
          opcode: 'heo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Heaaa1123!!!!!!!!!'
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
}

Scratch.extensions.register(new HelloWorld());
