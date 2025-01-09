const questions = [
  // Sports Questions
  {
    "question": "Who is known as the 'Master Blaster' of cricket?",
    "options": ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Jacques Kallis"],
    "answer": "Sachin Tendulkar",
    "category": "Sports"
  },
  {
    "question": "Which country won the 2019 ICC Cricket World Cup?",
    "options": ["India", "Australia", "England", "New Zealand"],
    "answer": "England",
    "category": "Sports"
  },
  {
    "question": "In cricket, what is the term used for a score of zero?",
    "options": ["Duck", "Goose", "Zero", "Nil"],
    "answer": "Duck",
    "category": "Sports"
  },
  {
    "question": "Which cricketer has the most number of wickets in Test cricket?",
    "options": ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
    "answer": "Muttiah Muralitharan",
    "category": "Sports"
  },
  {
    "question": "Who holds the record for the fastest century in One Day Internationals?",
    "options": ["Shahid Afridi", "AB de Villiers", "Chris Gayle", "Corey Anderson"],
    "answer": "Shahid Afridi",
    "category": "Sports"
  },
  {
    "question": "Which cricketer is known as 'The Wall' for his solid technique in Test cricket?",
    "options": ["Virat Kohli", "Rahul Dravid", "Jacques Kallis", "Steve Waugh"],
    "answer": "Rahul Dravid",
    "category": "Sports"
  },
  {
    "question": "Which country is the birthplace of cricket?",
    "options": ["Australia", "India", "England", "South Africa"],
    "answer": "England",
    "category": "Sports"
  },
  {
    "question": "What is the maximum number of overs allowed in a One Day International match?",
    "options": ["40", "50", "60", "70"],
    "answer": "50",
    "category": "Sports"
  },
  {
    "question": "What is the highest score by a batsman in a single Test match innings?",
    "options": ["400", "350", "350*", "500"],
    "answer": "400",
    "category": "Sports"
  },
  {
    "question": "Who is the only cricketer to have played 200 Test matches?",
    "options": ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Shane Warne"],
    "answer": "Sachin Tendulkar",
    "category": "Sports"
  },

  // Geography Questions
  {
    "question": "What is the capital of Australia?",
    "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    "answer": "Canberra",
    "category": "Geography"
  },
  {
    "question": "Which is the largest ocean in the world?",
    "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    "answer": "Pacific Ocean",
    "category": "Geography"
  },
  {
    "question": "Which country is the largest by land area?",
    "options": ["United States", "China", "Russia", "Canada"],
    "answer": "Russia",
    "category": "Geography"
  },
  {
    "question": "Mount Everest is located in which country?",
    "options": ["China", "Nepal", "India", "Bhutan"],
    "answer": "Nepal",
    "category": "Geography"
  },
  {
    "question": "What is the longest river in the world?",
    "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    "answer": "Nile River",
    "category": "Geography"
  },
  {
    "question": "Which country has the most time zones?",
    "options": ["Russia", "United States", "China", "Canada"],
    "answer": "Russia",
    "category": "Geography"
  },
  {
    "question": "What is the largest desert in the world?",
    "options": ["Sahara", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
    "answer": "Antarctic Desert",
    "category": "Geography"
  },
  {
    "question": "Which country is the smallest by land area?",
    "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    "answer": "Vatican City",
    "category": "Geography"
  },
  {
    "question": "Which continent has the most countries?",
    "options": ["Asia", "Africa", "Europe", "North America"],
    "answer": "Africa",
    "category": "Geography"
  },
  {
    "question": "What is the largest island in the world?",
    "options": ["Australia", "Greenland", "New Guinea", "Borneo"],
    "answer": "Greenland",
    "category": "Geography"
  },

  // History Questions
  {
    "question": "Who was the first President of the United States?",
    "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    "answer": "George Washington",
    "category": "History"
  },
  {
    "question": "In which year did the Titanic sink?",
    "options": ["1912", "1905", "1898", "1920"],
    "answer": "1912",
    "category": "History"
  },
  {
    "question": "Who discovered America?",
    "options": ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
    "answer": "Christopher Columbus",
    "category": "History"
  },
  {
    "question": "Which ancient civilization built the pyramids of Giza?",
    "options": ["Roman", "Mayan", "Egyptian", "Greek"],
    "answer": "Egyptian",
    "category": "History"
  },
  {
    "question": "Who was the leader of the Soviet Union during World War II?",
    "options": ["Joseph Stalin", "Leon Trotsky", "Vladimir Lenin", "Mikhail Gorbachev"],
    "answer": "Joseph Stalin",
    "category": "History"
  },
  {
    "question": "Who was the first Emperor of China?",
    "options": ["Qin Shi Huang", "Emperor Wu", "Gaozu", "Li Shimin"],
    "answer": "Qin Shi Huang",
    "category": "History"
  },
  {
    "question": "Who was the Prime Minister of the United Kingdom during World War II?",
    "options": ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Harold Macmillan"],
    "answer": "Winston Churchill",
    "category": "History"
  },
  {
    "question": "In which year did the Berlin Wall fall?",
    "options": ["1987", "1989", "1991", "1993"],
    "answer": "1989",
    "category": "History"
  },
  {
    "question": "What year did the French Revolution start?",
    "options": ["1776", "1789", "1812", "1830"],
    "answer": "1789",
    "category": "History"
  },
  {
    "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
    "options": ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby"],
    "answer": "Amelia Earhart",
    "category": "History"
  },

  // Science Questions
  {
    "question": "What is the maximum possible speed of light?",
    "options": ["300,000 km/s", "500,000 km/s", "1,000,000 km/s", "150,000 km/s"],
    "answer": "300,000 km/s",
    "category": "Science"
  },
  {
    "question": "What is the chemical formula for water?",
    "options": ["H2O", "CO2", "O2", "H2O2"],
    "answer": "H2O",
    "category": "Science"
  },
  {
    "question": "Which gas do plants absorb during photosynthesis?",
    "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "answer": "Carbon Dioxide",
    "category": "Science"
  },
  {
    "question": "Who is known as the father of modern physics?",
    "options": ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
    "answer": "Albert Einstein",
    "category": "Science"
  },
  {
    "question": "What is the hardest natural substance on Earth?",
    "options": ["Gold", "Iron", "Diamond", "Platinum"],
    "answer": "Diamond",
    "category": "Science"
  },
  {
    "question": "What is the largest organ in the human body?",
    "options": ["Heart", "Brain", "Lungs", "Skin"],
    "answer": "Skin",
    "category": "Science"
  },
  {
    "question": "What is the most abundant gas in the Earth's atmosphere?",
    "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "answer": "Nitrogen",
    "category": "Science"
  },
  {
    "question": "Who invented the telephone?",
    "options": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
    "answer": "Alexander Graham Bell",
    "category": "Science"
  },
  {
    "question": "What is the chemical symbol for gold?",
    "options": ["Au", "Ag", "Pb", "Fe"],
    "answer": "Au",
    "category": "Science"
  },
  {
    "question": "What is the powerhouse of the cell?",
    "options": ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    "answer": "Mitochondria",
    "category": "Science"
  }
];

module.exports = questions;
