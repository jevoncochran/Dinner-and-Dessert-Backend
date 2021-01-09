exports.seed = function (knex) {
  return knex("reviews").insert([
    {name: "Jevon Cochran", date: "1/07/2021", review: "The food was amazing. The service was excellent. I will definitely be ordering from you all again and again and again." },
    {name: "Aisha Smith", date: "12/27/2020", review: "I ordered the lamb chop dinner and boy oh boy, let me tell you, it was delicious! Me and my husband almost got into a fist fight because he tried to eat one of my chops. In the end, it all worked out though. I ordered a plate for hubby and he shared his with me just as I had with him. Nothing but a happy couple and happy customers here!" },
    {name: "Erick Fitzpatrick", date: "1/5/2021", review: "This place is a gem in the city of Detroit. Delicious, home-style meals like your mama made 'em. I don't know how I'm gonna keep the weight off now that I have this spot to order from." },
  ]);
};
