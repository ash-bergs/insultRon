module.exports = {
  name: 'wiseron',
  description: 'Get a piece of sage Swanson advice',
  execute(msg, args) {
    const responses = [
      'Any dog under 50 pounds is a cat, and cats are useless',
      'Clear alcohols are for rich women on diets',
      'Literally everything is a weapon',
      'Keep your tears in your eyes — where they belong',
      'The government is a greedy piglet that suckles on a taxpayer’s teat until they have sore, chapped nipples.',
      'It’s always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.',
      'The key to burning an ex-wife effigy is to dip it in paraffin wax and then toss the flaming bottle of isopropyl alcohol from a safe distance. Do not stand too close when you light an ex-wife effigy.',
      'I prefer quality over flash — that’s why I refuse to write my signature in cursive.',
      'I don’t want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.',
      'There are only three ways to motivate people: money, fear, and hunger.',
      'Fishing relaxes me. It’s like yoga, except I still get to kill something.',
      'Give a man a fish and feed him for a day. Don’t teach a man to fish…and feed yourself. He’s a grown man. And fishing’s not that hard.',
      'Child labor laws are ruining this country',
      'I’d wish you the best of luck, but I believe luck is a concept created by the weak to explain their failures',
      'Friends: one to three is sufficient.',
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    msg.channel.send(response);
  },
};
