import React, { useState } from 'react';

const initialBooks = [
  { Bid: 1234, Bname: "Pro Full Stack", Author: "Vasanth", Available: "Yes", category: "Web Development" },
  { Bid: 4321, Bname: "JFSD", Author: "Robert", Available: "Yes", category: "Programming" },
  { Bid: 5432, Bname: "Pro Python", Author: "Deepak", Available: "No", category: "Programming" },
  { Bid: 6543, Bname: "Pro React", Author: "Sophia", Available: "no", category: "Web Development" },
  { Bid: 7654, Bname: "Pro Data Science", Author: "Andrew Ng", Available: "No", category: "Programming" }
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleAvailability = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].Available = updatedBooks[index].Available.toLowerCase() === "yes" ? "No" : "Yes";
    setBooks(updatedBooks);
  };

  const filteredBooks = selectedCategory === 'All' ? books : books.filter(book => book.category === selectedCategory);

  return (
    <div>
      <h2>Book List</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Web Development">Web Development</option>
        <option value="Programming">Programming</option>
      </select>
      
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            <strong>{book.Bname}</strong> by {book.Author || "Unknown"}
            <br />
            ID: {book.Bid} - Category: {book.category} - 
            <span style={{ color: book.Available.toLowerCase() === "yes" ? "green" : "red" }}>
              {book.Available}
            </span>
            <br></br>
            <button onClick={() => toggleAvailability(index)}>Toggle Availability</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
