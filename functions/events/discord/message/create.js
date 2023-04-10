// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


// To add more answers for your command, simply add them to this list!
let messagePrompts = [
  'https://www.youtube.com/watch?v=Wix1O0ywhxE',
  'https://www.youtube.com/watch?v=PjGSiX2-Gvo',
  'https://www.youtube.com/watch?v=ZGQZP_bx17Q',
  'https://www.youtube.com/watch?v=1OtKTd-KZmY',
  'https://www.youtube.com/watch?v=3oca9dDGMgI',
  'https://www.youtube.com/watch?v=8x_fWNGxtsA',
  'https://www.youtube.com/watch?v=_aVkeg8pkME',
  'https://www.youtube.com/watch?v=HXiQeM36QDM',
  
  ];

if (context.params.event.content.trim() === `${process.env.PREFIX}random`) {
  let messageChoice = Math.floor(Math.random() * messagePrompts.length);
  let message = messagePrompts[messageChoice];
   
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `${message}`
  }); 
}
