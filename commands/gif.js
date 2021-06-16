const { default: fetch } = require('node-fetch');

module.exports = {
  name: 'gif',
  description: 'Get a gif from Tenor',
  async execute(msg, args) {
    console.log(args.join(' '));
    // setup
    const keywords = args.join(' ');
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=10&ContentFilter=off`;
    let response = await fetch(url);
    let json = await response.json();
    const randomIndex = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[randomIndex].url);
  },
};
