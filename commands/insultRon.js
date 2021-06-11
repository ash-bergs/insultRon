module.exports = {
  name: 'insultron',
  description: 'Send insultRon on a witch hunt!',
  execute(msg, args) {
    const responses = [
      'I’ll never forget the first time we met. But I’ll keep trying.',
      'I thought of you today. It reminded me to take out the trash.',
      'is your ass jealous of the amount of shit that comes out of your mouth?',
      "if you were an ice cream flavour, you'd be pralines and dick.",
      'you’re the reason this country has to put directions on shampoo',
      'hey laser-lips - your mother was a snowblower.',
      "I'm jealous of the people that don't know you.",
      "it's impossible to underestimate you",
      "you're about as useful as a poopy-flavored lollipop",
      'you stuck-up, half-witted, scruffy-looking nerf herder.',
      "to everyone here who matters, you're spam. You're vapour. A waste of perfectly good yearbook space.",
      "don't be ashamed of who you are - that's your parents' job",
      'you are a sad strange little man, and you have my pity.',
      "where'd you get those clothes, the toilet store?",
      'you horse manure smelling motherf***er, you.',
      "you're somewhere between a cockroach and that white stuff that accumulates at the corner of your mouth when you're really thirsty.",
      "you're in more dire need of a blowjob than any white man in history",
      'your mother was a hamster and your father smelt of elderberries.',
    ];
    // the args will contains the message?
    const taggedUser = msg.mentions.users.first();
    const response = responses[Math.floor(Math.random() * responses.length)];
    msg.channel.send(`${taggedUser.username}` + ', ' + response);
  },
};
