app.get('/seed', (req,res) => {
  Team.create([
    {
      name: 'Air Yordan',
      logo: 'https://i.redd.it/cvxe6r1mye331.jpg',
      sport: 'Baseball',
      platform: 'Yahoo',
      place: 1,
      players:
              [
                {
                  name: 'Mitch Garver',
                  position: 'C',
                  team: 'Min'
                },
                {
                  name: 'Ryan McMahon',
                  position: '1B',
                  team: 'Col'
                },
                {
                  name: 'Keston Hiura',
                  position: '2B',
                  team: 'Mil'
                },
                {
                  name: 'Eduardo Escobar',
                  position: '3B',
                  team: 'Ari'
                },
                {
                  name: 'Trevor Story',
                  position: 'SS',
                  team: 'Col'
                },
                {
                  name: 'Josh Bell',
                  position: '1B',
                  team: 'Pit'
                },
                {
                  name: 'DJ LeMahieu',
                  position: '2B',
                  team: 'NYY'
                },
                {
                  name: 'Adam Duvall',
                  position: 'OF',
                  team: 'Atl'
                },
                {
                  name: 'Eddie Rosario',
                  position: 'OF',
                  team: 'Min'
                },
                {
                  name: 'Starling Marte',
                  position: 'OF',
                  team: 'Pit'
                },
                {
                  name: 'Yordan Alvarez',
                  position: 'OF',
                  team: 'Hou'
                },
                {
                  name: 'Nelson Cruz',
                  position: 'UTIL',
                  team: 'Min'
                },
                {
                  name: 'Shohei Ohtani',
                  position: 'UTIL',
                  team: 'LAA'
                },
                {
                  name: 'Justin Verlander',
                  position: 'P',
                  team: 'Hou'
                },
                {
                  name: 'Hector Neris',
                  position: 'P',
                  team: 'Phi'
                },
                {
                  name: 'Hansel Robles',
                  position: 'P',
                  team: 'LAA'
                },
                {
                  name: 'Kenley Jansen',
                  position: 'P',
                  team: 'LAD'
                },
                {
                  name: 'Charlie Morton',
                  position: 'P',
                  team: 'TB'
                },
                {
                  name: 'Shane Bieber',
                  position: 'P',
                  team: 'Cle'
                },
                {
                  name: 'Kyle Hendricks',
                  position: 'P',
                  team: 'ChC'
                }
              ]
    },
    {
      name: '10 Gallen Hats',
      logo: 'https://www.history.com/.image/t_share/MTU3ODc4NjAzODEyNDQ3OTY3/ask-history-why-do-we-call-it-a-ten-gallon-hat-2.jpg',
      sport: 'Baseball',
      platform: 'Yahoo',
      place: 5,
      players:
              [
                {
                  name: "Travis d'Arnaud",
                  position: 'C',
                  team: 'TB'
                },
                {
                  name: 'Mark Canha',
                  position: '1B',
                  team: 'Oak'
                },
                {
                  name: 'Keston Hiura',
                  position: '2B',
                  team: 'Mil'
                },
                {
                  name: 'Nolan Arenado',
                  position: '3B',
                  team: 'Col'
                },
                {
                  name: 'Jean Segura',
                  position: 'SS',
                  team: 'Phi'
                },
                {
                  name: 'Josh VanMeter',
                  position: '3B',
                  team: 'Cin'
                },
                {
                  name: 'Elvis Andrus',
                  position: 'SS',
                  team: 'Tex'
                },
                {
                  name: 'Yasiel Puig',
                  position: 'OF',
                  team: 'Cle'
                },
                {
                  name: 'Yordan Alvarez',
                  position: 'OF',
                  team: 'Hou'
                },
                {
                  name: 'Mike Yastrzemski',
                  position: 'OF',
                  team: 'SF'
                },
                {
                  name: 'Anthony Santander',
                  position: 'OF',
                  team: 'Bal'
                },
                {
                  name: 'Hunter Pence',
                  position: 'UTIL',
                  team: 'Tex'
                },
                {
                  name: 'Marcell Ozuna',
                  position: 'UTIL',
                  team: 'StL'
                },
                {
                  name: 'Hyun-Jin Ryu',
                  position: 'P',
                  team: 'LAD'
                },
                {
                  name: 'Mike Clevinger',
                  position: 'P',
                  team: 'Cle'
                },
                {
                  name: 'Emilio Pagan',
                  position: 'P',
                  team: 'TB'
                },
                {
                  name: 'Michael Lorenzan',
                  position: 'P',
                  team: 'Cin'
                },
                {
                  name: 'Lance Lynn',
                  position: 'P',
                  team: 'Tex'
                },
                {
                  name: 'Zack Greinke',
                  position: 'P',
                  team: 'Hou'
                },
                {
                  name: 'Zac gallen',
                  position: 'P',
                  team: 'Ari'
                }
              ]
    },
    {
      name: 'Shadynasty',
      logo: 'https://i1.wp.com/www.inpapasbasement.com/wp-content/uploads/2011/10/Shadynasty_Always_Sunny.jpg',
      sport: 'Baseball',
      platform: 'Yahoo',
      place: 2,
      players:
              [
                {
                  name: "Pedro Severino",
                  position: 'C',
                  team: 'Bal'
                },
                {
                  name: 'Paul Goldschmidt',
                  position: '1B',
                  team: 'StL'
                },
                {
                  name: 'Ryan McMahon',
                  position: '2B',
                  team: 'Col'
                },
                {
                  name: 'Eugenio Suarez',
                  position: '3B',
                  team: 'Cin'
                },
                {
                  name: 'Danny Santana',
                  position: 'SS',
                  team: 'Tex'
                },
                {
                  name: 'Hunter Pence',
                  position: 'OF',
                  team: 'Tex'
                },
                {
                  name: 'Adam Duvall',
                  position: 'OF',
                  team: 'Atl'
                },
                {
                  name: 'Yasiel Puig',
                  position: 'OF',
                  team: 'Cle'
                },
                {
                  name: 'Shohei Ohtani',
                  position: 'UTIL',
                  team: 'LAA'
                },
                {
                  name: 'Mike Clevinger',
                  position: 'P',
                  team: 'Cle'
                },
                {
                  name: 'Caleb Smith',
                  position: 'P',
                  team: 'Mia'
                },
                {
                  name: 'Zac Gallen',
                  position: 'P',
                  team: 'Ari'
                },
                {
                  name: 'Will Smith',
                  position: 'P',
                  team: 'SF'
                },
                {
                  name: 'Tommy Kahnle',
                  position: 'P',
                  team: 'NYY'
                },
                {
                  name: 'Craig Kimbrel',
                  position: 'P',
                  team: 'ChC'
                },
                {
                  name: 'Aaron Nola',
                  position: 'P',
                  team: 'Phi'
                },
                {
                  name: 'Trevor Bauer',
                  position: 'P',
                  team: 'Cin'
                },
                {
                  name: 'Max Scherzer',
                  position: 'P',
                  team: 'Was'
                }
              ]
    },
    {
      name: 'Stay Classy San Diego',
      logo: 'https://bplusmovieblog.files.wordpress.com/2019/04/anchorman-the-legend-of-ron-burgundy.png',
      sport: 'Baseball',
      platform: 'ESPN',
      place: 6,
      players:
              [
                {
                  name: "Carson Kelly",
                  position: 'C',
                  team: 'Ari'
                },
                {
                  name: 'Daniel Vogelbach',
                  position: '1B',
                  team: 'StL'
                },
                {
                  name: 'Eduardo Escobar',
                  position: '2B',
                  team: 'Ari'
                },
                {
                  name: 'Jose Ramirez',
                  position: '3B',
                  team: 'Cle'
                },
                {
                  name: 'Trea Turner',
                  position: 'SS',
                  team: 'Was'
                },
                {
                  name: 'Manny Machado',
                  position: '3B',
                  team: 'SD'
                },
                {
                  name: 'Eddie Rosario',
                  position: 'OF',
                  team: 'Min'
                },
                {
                  name: 'Yordan Alvarez',
                  position: 'OF',
                  team: 'Hou'
                },
                {
                  name: 'Khris Davis',
                  position: 'UTIL',
                  team: 'Oak'
                },
                {
                  name: 'Justin verlander',
                  position: 'P',
                  team: 'Hou'
                },
                {
                  name: 'Roberto Osuna',
                  position: 'P',
                  team: 'Hou'
                },
                {
                  name: 'Josh Hader',
                  position: 'P',
                  team: 'Mil'
                },
                {
                  name: 'Mike Minor',
                  position: 'P',
                  team: 'Tex'
                },
                {
                  name: 'Wade Miley',
                  position: 'P',
                  team: 'Hou'
                },
                {
                  name: 'Lance Lynn',
                  position: 'P',
                  team: 'Tex'
                },
                {
                  name: 'Julio Teheran',
                  position: 'P',
                  team: 'Atl'
                },
                {
                  name: 'Danny Duffy',
                  position: 'P',
                  team: 'KC'
                },
              ]
    },
    {
      name: "Rhys' PB Cups",
      logo: 'https://dingmansdairy.biz/wp-content/uploads/sites/4/2015/09/71MZC0i-JgL._SL1500_.jpg',
      sport: 'Baseball',
      platform: 'ESPN',
      place: 4,
      players:
              [
                {
                  name: "Travis d'Arnaud",
                  position: 'C',
                  team: 'TB'
                },
                {
                  name: 'Josh Bell',
                  position: '1B',
                  team: 'Pit'
                },
                {
                  name: 'Keston Hiura',
                  position: '2B',
                  team: 'Mil'
                },
                {
                  name: 'Manny Machado',
                  position: '3B',
                  team: 'SD'
                },
                {
                  name: 'Jonathan Villar',
                  position: 'SS',
                  team: 'Bal'
                },
                {
                  name: 'Eduardo Escobar',
                  position: '3B',
                  team: 'Ari'
                },
                {
                  name: 'Rhys Hoskins',
                  position: 'OF',
                  team: 'Phi'
                },
                {
                  name: 'JD Martinez',
                  position: 'OF',
                  team: 'Bos'
                },
                {
                  name: 'Austin Meadows',
                  position: 'OF',
                  team: 'TB'
                },
                {
                  name: 'Yordan Alvarez',
                  position: 'OF',
                  team: 'Hou'
                },
                {
                  name: 'Justin verlander',
                  position: 'P',
                  team: 'Hou'
                },
                {
                  name: 'Will Smith',
                  position: 'P',
                  team: 'SF'
                },
                {
                  name: 'Jake Odorizzi',
                  position: 'P',
                  team: 'Min'
                },
                {
                  name: 'Emilio Pagan',
                  position: 'P',
                  team: 'TB'
                },
                {
                  name: 'Lance Lynn',
                  position: 'P',
                  team: 'Tex'
                },
                {
                  name: 'Chad Green',
                  position: 'P',
                  team: 'NYY'
                },
                {
                  name: 'Archie Bradley',
                  position: 'P',
                  team: 'Ari'
                },
                {
                  name: 'Domingo German',
                  position: 'P',
                  team: 'NYY'
                },
              ]
    },
    {
      name: "Too Many Cooks",
      logo: 'https://fsmedia.imgix.net/91/91/0c/72/57a5/496c/84df/f99c2d2a205d/too-many-cooks.png?rect=38%2C0%2C985%2C740&auto=format%2Ccompress&dpr=2&w=985',
      sport: 'Football',
      platform: 'Yahoo',
      place: 1,
      players:
              [
                {
                  name: "Baker Mayfield",
                  position: 'QB',
                  team: 'CLE'
                },
                {
                  name: 'Saquon Barkley',
                  position: 'RB',
                  team: 'NYG'
                },
                {
                  name: "Le'Veon Bell",
                  position: 'RB',
                  team: 'NYJ'
                },
                {
                  name: 'Odell Beckham Jr',
                  position: 'WR',
                  team: 'CLE'
                },
                {
                  name: 'Amari Cooper',
                  position: 'WR',
                  team: 'DAL'
                },
                {
                  name: 'Brandin Cooks',
                  position: 'WR',
                  team: 'LAR'
                },
                {
                  name: 'Jared Cook',
                  position: 'TE',
                  team: 'NO'
                },
                {
                  name: 'Mark Ingram',
                  position: 'FLEX',
                  team: 'BAL'
                },
                {
                  name: 'Mark Ingram',
                  position: 'FLEX',
                  team: 'BAL'
                },
                {
                  name: 'Will Lutz',
                  position: 'K',
                  team: 'NO'
                },
                {
                  name: 'Chicago',
                  position: 'DEF',
                  team: 'CHI'
                },
              ]
    }], (err, data) => {
      res.redirect('/');
    })
})
