const message: string = "Hello, World";

console.log(message);

const jsonSample: string = `{
    "games": [
      {
        "title": "Title1",
        "genres": ["ACT"]
      },
      {
        "title": "Title2",
        "genres": ["ACT", "RPG"]
      },
      {
        "title": "Title3",
        "genres": ["STG"],
        "note": "Fantastic shooting game"
      }
    ]
  }
  `;

const parseObj = JSON.parse(jsonSample);
for (const game of parseObj.games) {
    const resultRow = [game.title, game.genres];
    console.log(resultRow.join(','));
}



