// In this file you can specify the trial data for your experiment
var practice_trials = [
  {
    statements: "Spain is a country in Asia.",
    type: "practice",
    condition: "none",
    expectedAnswer: "false"
  },

  {
    statements: "Normally there are 32 teeth in the adult human body.",
    type: "practice",
    condition: "none",
    expectedAnswer: "true"
  },


  {
    statements: "Alexander Bell invented the telephone.",
    type: "practice",
    condition: "none",
    expectedAnswer: "true"
  },


  {
    statements: "World War II was a global war that lasted from 1914 to 1918.",
    type: "practice",
    condition: "none",
    expectedAnswer: "false"
  },


  {
    statements: "William Shakespeare was an English poet, playwright and actor, regarded as the greatest writer in the English language.",
    type: "practice",
    condition: "none",
    expectedAnswer: "true"
  },

    ];



var main_trials = [
  {
    sentence: "The king of France is bald.",
    type: "main",
    condition: "0",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "France has a king, and he is bald.",
    type: "main",
    condition: "1",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France is on a state visit to Australia this week.",
    type: "main",
    condition: "2",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France is married to Brigitte Macron.",
    type: "main",
    condition: "3",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France, he called Emmanuel Macron last night.",
    type: "main",
    condition: "4",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "Macron, he called the King of France last night.",
    type: "main",
    condition: "5",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France isn’t bald.",
    type: "main",
    condition: "6",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France is not on a state visit to Australia this week.",
    type: "main",
    condition: "7",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France is not married to Brigitte Macron.",
    type: "main",
    condition: "8",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The King of France, he did not call Emmanuel Macron last night.",
    type: "main",
    condition: "9",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "Emmanuel Macron, he did not call the King of France last night.",
    type: "main",
    condition: "10",
    vignette: "1",
    expectedAnswer: "false"
  },


  {
    sentence: "The Emperor of Canada is fond of sushi.",
    type: "main",
    condition: "0",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "Canada has an emperor, and he is fond of sushi.",
    type: "main",
    condition: "1",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada visited Dresden yesterday.",
    type: "main",
    condition: "2",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada resides at 10 Downing Street in London.",
    type: "main",
    condition: "3",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada, he resides in Dresden for the summer.",
    type: "main",
    condition: "4",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "Dresden, it is the home of the Emperor of Canada for the summer.",
    type: "main",
    condition: "5",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada isn’t fond of sushi.",
    type: "main",
    condition: "6",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada didn’t visit Dresden yesterday.",
    type: "main",
    condition: "7",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada does not reside at 10 Downing Street in London.",
    type: "main",
    condition: "8",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Emperor of Canada, he does not reside in Dresden for the summer.",
    type: "main",
    condition: "9",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "Dresden, it is not the home of the Emperor of Canada for the summer.",
    type: "main",
    condition: "10",
    vignette: "2",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife is a lawyer.",
    type: "main",
    condition: "0",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope has a wife, and she is a lawyer.",
    type: "main",
    condition: "1",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife invited Angela Merkel for dinner.",
    type: "main",
    condition: "2",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife wrote Pride and Prejudice.",
    type: "main",
    condition: "3",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife, she invited Angela Merkel for dinner.",
    type: "main",
    condition: "4",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "Angela Merkel, she was invited by the Pope’s wife for dinner.",
    type: "main",
    condition: "5",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife isn’t a lawyer.",
    type: "main",
    condition: "6",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife did not invite Angela Merkel for dinner.",
    type: "main",
    condition: "7",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife did not write Pride and Prejudice.",
    type: "main",
    condition: "8",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope’s wife, she did not invite Angela Merkel for dinner.",
    type: "main",
    condition: "9",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "Angela Merkel, she was not invited by the Pope’s wife for dinner.",
    type: "main",
    condition: "10",
    vignette: "3",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest provides a habitat for many species.",
    type: "main",
    condition: "0",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "There is a rainforest in Belgium, and it provides a habitat for many species.",
    type: "main",
    condition: "1",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest is to the north of Brussels.",
    type: "main",
    condition: "2",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest separated East and West Berlin.",
    type: "main",
    condition: "3",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest, it is the favorite nature spot of Donald Trump.",
    type: "main",
    condition: "4",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "Donald Trump, his favorite nature spot is the Belgian rainforest.",
    type: "main",
    condition: "5",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest doesn’t provide a habitat for many species.",
    type: "main",
    condition: "6",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest is not to the north of Brussels.",
    type: "main",
    condition: "7",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest did not separate East and West Berlin.",
    type: "main",
    condition: "8",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The Belgian rainforest, it is not the favorite nature spot of Donald Trump.",
    type: "main",
    condition: "9",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "Donald Trump, his favorite nature spot is not the Belgian rainforest.",
    type: "main",
    condition: "10",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany dominate the landscape.",
    type: "main",
    condition: "0",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "There are volcanoes in Germany, and they dominate the landscape.",
    type: "main",
    condition: "1",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany threaten Leipzig.",
    type: "main",
    condition: "2",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany produced the ash cloud that disrupted air traffic in Europe last spring.",
    type: "main",
    condition: "3",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany, they threaten Leipzig.",
    type: "main",
    condition: "4",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "Leipzig, it is threatened by the volcanoes of Germany.",
    type: "main",
    condition: "5",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany do not dominate the landscape.",
    type: "main",
    condition: "6",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany don’t threaten Leipzig.",
    type: "main",
    condition: "7",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany did not produce the ash cloud that disrupted air traffic in Europe last spring.",
    type: "main",
    condition: "8",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "The volcanoes of Germany, they do not threaten Leipzig.",
    type: "main",
    condition: "9",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "Leipzig, it is not threatened by the volcanoes of Germany.",
    type: "main",
    condition: "10",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "France has a king.",
    type: "special",
    condition: "none",
    vignette: "1",
    expectedAnswer: "false"
  },

  {
    sentence: "The Pope is currently not married.",
    type: "special",
    condition: "none",
    vignette: "3",
    expectedAnswer: "true"
  },

  {
    sentence: "Canada is a democracy.",
    type: "special",
    condition: "none",
    vignette: "2",
    expectedAnswer: "true"
  },

  {
    sentence: "Belgium has rainforests.",
    type: "special",
    condition: "none",
    vignette: "4",
    expectedAnswer: "false"
  },

  {
    sentence: "Germany has volcanoes.",
    type: "special",
    condition: "none",
    vignette: "5",
    expectedAnswer: "false"
  },

  {
    sentence: "Germany shares borders with France, Belgium and Denmark.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Lower Saxony is a German state situated in northwestern Germany.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "One molecule of water (H2O) has two hydrogen atoms.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Water is of major importance to all living organisms.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The brain needs a constant supply of oxygen to perform basic functions.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The brain is made up of very special cells called neurons.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Steve Jobs was an American inventor and co-founder of Apple.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The United Nations Children's Fund (UNICEF) provides humanitarian and developmental assistance to children and mothers in developing countries.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "An earthquake is the result of the sudden movement of the earth’s tectonic plates.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "FIFA World Cup tournament is an international football competition.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Test of English as a Foreign Language (TOEFL) is a standardized test to measure the English language ability of non-native speakers.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Venice is a city in Italy.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Brandenburg Gate is a monument in Berlin.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Harry Potter is a series of fantasy novels written by J. K. Rowling.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Water boils at 100 degree C.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Mount Everest is the highest mountain on Earth.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Charles Darwin was a biologist known for his theory of evolution.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Hibernation is a deep sleep that helps animals to save energy and survive the winter without eating much.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Planet Earth is part of the galaxy ‘Milky Way’.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Solar System includes the planet Earth.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Sun is in the centre of the Solar System.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Moon is an astronomical body that orbits planet Earth.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "In the Sahara you can do a variety of winter sports.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The country with the lowest population density is China.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Vatican City is the world's largest country by land area.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "London is the capital of Asia.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Elvis Presley is one of the most popular musicians in this decade.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Michael Jackson was one of the most popular singers, songwriters, and dancers, known also as the ‘King of Pop’.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Earth was once believed to be the centre of the universe.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Planet Earth is the sixth planet from the Sun.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The simplest, functioning part of an organism is a cell.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The United Nations (UN) is an intergovernmental organization tasked to promote international cooperation and to create and maintain international order.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The European Union (EU) is a political and economic union of 28 member states that are located primarily in Europe.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Switzerland is a member of the European Union.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Romeo and Juliet is a tragedy written by Leo Tolstoy.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The fictional detective character Sherlock Holmes is the creation of Arthur Conan Doyle.",
    type: "filler",
    condition: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Agatha Christie was an English writer, known for her detective novels, particularly those revolving around her fictional detectives Hercule Poirot and Miss Marple.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Antarctica is the biggest continent on Earth.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Africa is the continent with the highest population density.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Antarctica is a continent covered almost completely by ice.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Grand Canyon in Arizona (USA) is the largest canyon in the world.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Sahara desert in Africa is the largest desert in the world.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Great Wall is one of the seven wonders of the world.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Leaning Tower of Pisa is one of Germany’s major tourist attractions.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World and the only one of these ancient world wonders which still exists.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Eiffel Tower is one of the most popular and frequently visited tourist attractions in Italy.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The Sydney Opera House, built in Australia’s biggest city, is famous for its roof’s architecture.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Statue of Liberty is a colossal sculpture on Liberty Island in New York City in the United States.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Taj Mahal is a mausoleum on the bank of the river in the city of Rome.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The desert of Sweden is the hottest desert in the world.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Justin Bieber has won 3 gold olympic medals.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The Queen of England is a 20 year old man.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Australia has a very large border with Brazil.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "China is the smallest country in South America.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Albert Einstein was a very famous Chinese scientist.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Big Ben is a very large building in the middle of Paris.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "William Shakespeare was a famous Italian painter in Rome.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Facebook is the name of a famous musician.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "There is always a lot of snow during summer in Sydney.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Paris is a popular city for many tourists.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Egypt is famous for the pyramids, the pharaohs and the Nile River.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The president of the USA is called Donald Trump.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "There were two world wars in the 20th Century.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Berlin Wall was destroyed 10 years ago by Sweden.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Brazil, Canada and Russia are all bigger countries than Switzerland.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "English is the main language in Australia, Britain and New Zealand.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "There are more than 2 countries in the United Nations.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Russia is one of the biggest countries in the world.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Pacific Ocean is a large ocean between Japan and the USA.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "People love the polar bears in Australia.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "India is the smallest country in Europe.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "James Bond is a spanish dancer from Madrid.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "Manchester United is a French football team based in Paris.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The University of Oxford is a business that sells mobile phones.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "false"
  },

  {
    sentence: "The University of Edinburgh is located in Great Britain.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The capital city of Ireland is Dublin.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The capital city of Japan is Tokyo.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "London is famous for Big Ben and the Queen.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Leonardo DiCaprio is a famous actor.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Johnny Depp is an American actor who took part in the ‘Pirates of the Caribbean’ movies.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Macbeth is a tragedy by William Shakespeare.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The town of Pisa in Italy is famous for its Leaning Tower of Pisa.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Republic of South Africa is located in the continent of Africa.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Canada is a country located in North America.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Brazil is the largest country in South America.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The Bermuda Triangle, is a region in the Atlantic Ocean, where a number of aircraft and ships are said to have disappeared under mysterious circumstances.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The statue of Jesus Christ is a famous sightseeing attraction in the city of Rio de Janeiro, Brazil.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The capital city of Russia is Moscow.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Dinosaurs became extinct millions of years ago.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Birds are a group of vertebrates, characterized by feathers and wings.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Stephen William Hawking was a famous physicist.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "National Geographic is a channel broadcasting documentaries about science, nature, and history.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Earth is the third planet from the sun.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Earth has a powerful magnetic field.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Alzheimer’s Disease is a brain disorder that affects memory.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "In the German language every noun has a gender.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "One of the longest rivers in Europe is the Rhine.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "The heart is an organ in your body that pumps blood to other organs.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Valentine's Day is celebrated in many ways worldwide.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Email is a method of exchanging messages.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Trees absorb carbon dioxide and release oxygen.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Monkeys like to eat bananas.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Currywurst is a popular fast food in Germany.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Three is a prime number.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },

  {
    sentence: "Square root of 16 is 4.",
    type: "filler",
    condition: "none",
    vignette: "none",
    expectedAnswer: "true"
  },
];

/* call create_practice_trials function with practice_trials to get practice
trials into the wanted format */
const practice_trial_new = _.shuffle(create_practice_trials(practice_trials));

/* helper constants to select the trials each participant should see */

const vignette_set = _.shuffle([1, 2, 3, 4, 5]);
const condition_set = _.shuffle([0, 6, 9, 1, 10]);

/*  create filler trials for each participant*/
const filler_set = create_filler_trials(_.sampleSize(_.filter(main_trials, function (t) {
    return t.type == "filler";
}), 20));

/* generate the main trials used for each participant. for this we use some filler old_trials
and call the create_main_trials function with the main_trials to get the main trails
into the wanted format */
var main_trial_new = _.concat(
  filler_set[0],
  filler_set[1],
  create_main_trials(main_trials, condition_set[0], vignette_set[0]),
  filler_set[2],
  filler_set[3],
  filler_set[4],
  create_main_trials(main_trials, condition_set[1], vignette_set[1]),
  filler_set[5],
  create_main_trials(main_trials, condition_set[2], vignette_set[2]),
  filler_set[6],
  create_main_trials(main_trials, "none", vignette_set[0]),
  filler_set[7],
  create_main_trials(main_trials, condition_set[3], vignette_set[3]),
  filler_set[8],
  filler_set[9],
  create_main_trials(main_trials, "none", vignette_set[1]),
  filler_set[10],
  create_main_trials(main_trials, "none", vignette_set[2]),
  create_main_trials(main_trials, condition_set[4], vignette_set[4]),
  filler_set[11],
  filler_set[12],
  create_main_trials(main_trials, "none", vignette_set[3]),
  filler_set[13],
  create_main_trials(main_trials, "none", vignette_set[4])
);
