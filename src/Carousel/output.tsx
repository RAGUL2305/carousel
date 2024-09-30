import { link } from "fs";
import React from "react";
import Carousel from "./carousel";

export interface BooksData {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  summary: string;
  coverImage: string;
  link: string;
}

const booksData: BooksData[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    summary: "A novel about serious issues of race and morality.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    link: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
    summary: "A chilling depiction of totalitarianism.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
    link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    summary: "A critique of British society through the lens of romance.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publishedYear: 1925,
    summary: "A story of wealth and obsession in the 1920s.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    link: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publishedYear: 1851,
    summary: "The quest for revenge against the white whale, Moby Dick.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/220px-Moby-Dick_FE_title_page.jpg",
    link: "https://en.wikipedia.org/wiki/Moby-Dick",
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    publishedYear: 1869,
    summary: "A narrative of the French invasion of Russia.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg/220px-Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg",
    link: "https://en.wikipedia.org/wiki/War_and_Peace",
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
    summary: "A story about teenage angst and alienation.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
    link: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye",
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publishedYear: 1932,
    summary: "A vision of a future driven by technology and conformity.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg",
    link: "https://en.wikipedia.org/wiki/Brave_New_World",
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
    summary: "A hobbit's adventure to reclaim treasure from a dragon.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/TheHobbit_FirstEdition.jpg/220px-TheHobbit_FirstEdition.jpg",
    link: "https://en.wikipedia.org/wiki/The_Hobbit",
  },
  {
    id: 10,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    publishedYear: 1953,
    summary: "A future where books are banned and 'firemen' burn them.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Fahrenheit_451_1st_ed_cover.jpg/220px-Fahrenheit_451_1st_ed_cover.jpg",
    link: "https://en.wikipedia.org/wiki/Fahrenheit_451",
  },
  {
    id: 11,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    publishedYear: 1866,
    summary: "A young man grapples with morality after committing a crime.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png",
    link: "https://en.wikipedia.org/wiki/Crime_and_Punishment",
  },
  {
    id: 12,
    title: "Lord of the Flies",
    author: "Homer",
    genre: "	Allegorical ",
    publishedYear: 1954,
    summary:
      "The plot concerns a group of British boys who are stranded on an uninhabited island and their disastrous attempts to govern themselves.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/LordOfTheFliesBookCover.jpg/220px-LordOfTheFliesBookCover.jpg",
    link: "https://en.wikipedia.org/wiki/Lord_of_the_Flies",
  },
  {
    id: 13,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    publishedYear: 1880,
    summary: "A profound exploration of faith, doubt, and morality.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dostoevsky-Brothers_Karamazov.jpg/220px-Dostoevsky-Brothers_Karamazov.jpg",
    link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
  },
  {
    id: 14,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Philosophical Fiction",
    publishedYear: 1890,
    summary: "A young man remains eternally youthful while his portrait ages.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lippincott_doriangray.jpg/220px-Lippincott_doriangray.jpg",
    link: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray",
  },
  {
    id: 15,
    title: "The Catch-22",
    author: "Joseph Heller",
    genre: "Satire",
    publishedYear: 1961,
    summary: "A satirical novel about the absurdities of war.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Catch-22_%281961%29_front_cover%2C_first_edition.jpg/220px-Catch-22_%281961%29_front_cover%2C_first_edition.jpg",
    link: "https://en.wikipedia.org/wiki/Catch-22",
  },
  {
    id: 16,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Gothic Romance",
    publishedYear: 1847,
    summary: "A young governess falls in love with her mysterious employer.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/220px-Jane_Eyre_title_page.jpg",
    link: "https://en.wikipedia.org/wiki/Jane_Eyre",
  },
  {
    id: 17,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    genre: "Gothic Fiction",
    publishedYear: 1847,
    summary: "A tale of passion and revenge on the Yorkshire moors.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg/200px-Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg",
    link: "https://en.wikipedia.org/wiki/Wuthering_Heights",
  },
  {
    id: 18,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    genre: "Historical Fiction",
    publishedYear: 1939,
    summary: "A family's journey during the Great Depression.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg/220px-The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg",
    link: "https://en.wikipedia.org/wiki/The_Grapes_of_Wrath",
  },
  {
    id: 19,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    publishedYear: 2006,
    summary: "A father and son navigate a desolate landscape.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/The-road.jpg/220px-The-road.jpg",
    link: "https://en.wikipedia.org/wiki/The_Road",
  },
  {
    id: 20,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
    publishedYear: 2003,
    summary: "A story of friendship and redemption in Afghanistan.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kite_runner.jpg/220px-Kite_runner.jpg",
    link: "https://en.wikipedia.org/wiki/The_Kite_Runner",
  },
  {
    id: 21,
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "Adventure",
    publishedYear: 2001,
    summary:
      "A young boy survives a shipwreck and shares a lifeboat with a tiger.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Life_of_Pi_cover.png/220px-Life_of_Pi_cover.png",
    link: "https://en.wikipedia.org/wiki/Life_of_Pi",
  },
  {
    id: 22,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Young Adult",
    publishedYear: 2012,
    summary: "A love story between two teenagers with cancer.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Fault_in_Our_Stars.jpg/200px-The_Fault_in_Our_Stars.jpg",
    link: "https://en.wikipedia.org/wiki/The_Fault_in_Our_Stars",
  },
  {
    id: 23,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    publishedYear: 1988,
    summary: "A shepherd's journey to realize his personal legend.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheAlchemist.jpg/220px-TheAlchemist.jpg",
    link: "https://en.wikipedia.org/wiki/The_Alchemist_(novel)",
  },
  {
    id: 24,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    publishedYear: 2011,
    summary: "A thought-provoking exploration of human history.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/%E1%B8%B2itsur_toldot_ha-enoshut.jpg/220px-%E1%B8%B2itsur_toldot_ha-enoshut.jpg",
    link: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
  },
  {
    id: 25,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    publishedYear: 2018,
    summary: "A memoir about a woman's quest for knowledge.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Educated_%28Tara_Westover%29.png/220px-Educated_%28Tara_Westover%29.png",
    link: "https://en.wikipedia.org/wiki/Educated_(memoir)",
  },
  {
    id: 26,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Memoir",
    publishedYear: 2018,
    summary: "The former First Lady's personal story and journey.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Becoming_%28Michelle_Obama_book%29.jpg/220px-Becoming_%28Michelle_Obama_book%29.jpg",
    link: "https://en.wikipedia.org/wiki/Becoming_(book)",
  },
  {
    id: 27,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    genre: "Non-Fiction",
    publishedYear: 2010,
    summary: "The story of a woman's cells used for scientific research.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/The_Immortal_Life_Henrietta_Lacks_%28cover%29.jpg/220px-The_Immortal_Life_Henrietta_Lacks_%28cover%29.jpg",
    link: "https://en.wikipedia.org/wiki/The_Immortal_Life_of_Henrietta_Lacks",
  },
  {
    id: 28,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    publishedYear: 2019,
    summary: "A psychological thriller about a woman's act of violence.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/The_Silent_Patient_early_2019_UK_edition.png/220px-The_Silent_Patient_early_2019_UK_edition.png",
    link: "https://en.wikipedia.org/wiki/The_Silent_Patient",
  },
  {
    id: 29,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Mystery",
    publishedYear: 2018,
    summary: "A coming-of-age story set in the marshes of North Carolina.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Where_The_Crawdads_Sing_Book_Cover.jpg/220px-Where_The_Crawdads_Sing_Book_Cover.jpg",
    link: "https://en.wikipedia.org/wiki/Where_the_Crawdads_Sing",
  },
  {
    id: 30,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fantasy",
    publishedYear: 2011,
    summary: "A magical competition between two young illusionists.",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/TheNightCircus.jpg/220px-TheNightCircus.jpg",
    link: "https://en.wikipedia.org/wiki/The_Night_Circus",
  },
];

function Output() {
  return (
    <div>
      <Carousel data={booksData} />
    </div>
  );
}

export default Output;
