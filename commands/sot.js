// this command will return the last news item for Sea of Thieves

const { default: fetch } = require('node-fetch');

module.exports = {
  name: 'sot',
  description: 'Get the latest news piece for Sea of Thieves',
  async execute(msg, args) {
    const url =
      'https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=1172620&count=1&maxlength=300&format=json';
    const response = await fetch(url);
    let json = await response.json();
    // this will have to become titleS - can I map over an array in a msg.send?
    const item = json.appnews.newsitems[0];
    // data clean up
    // the first thing in the contents is a clan tag of some sort, I want to remove that because it's long and ugly
    // how can I do this better?
    const contents = item.contents.split(' ');
    contents.shift();
    console.log(contents.join(' '));

    msg.channel.send(
      ':pirate_flag: The latest from Sea of Thieves :pirate_flag:'
    );
    msg.channel.send(item.title);
    msg.channel.send(contents.join(' ') + ' ' + item.url);
  },
};

//TODO - make it so a length can be given in args to dynamically set the count
