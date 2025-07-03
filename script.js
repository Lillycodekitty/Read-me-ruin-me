let currentBook = null;

function generateBook() {
  try {
    const tropeFilter = document.getElementById('trope').value;
    const genreFilter = document.getElementById('genre').value;
    const spiceFilter = document.getElementById('spice').value;

    let filtered = books.filter(book => {
      return (!tropeFilter || book.tropes.includes(tropeFilter)) &&
             (!genreFilter || book.genre === genreFilter) &&
             (!spiceFilter || book.spice === spiceFilter);
    });

    if (filtered.length === 0) {
      document.getElementById('output').textContent = 
        "No books match your filthy criteria. Try again, kitten.";
      document.getElementById('readorride-container').style.display = 'none';
      document.getElementById('favoriteBtn').style.display = 'none';
      return;
    }
  }
    const chosen = filtered[Math.floor(Math.random() * filtered.length)];
    currentBook = chosen;

    document.getElementById('output').innerHTML = `
      <strong>${chosen.title}</strong> by <em>${chosen.author}</em><br/>
      <em>Spice Level:</em> ${chosen.spice}<br/>
      <em>Genres & Tropes:</em> ${chosen.genre}, ${chosen.tropes.join(', ')}<br/>
      <em>Tease:</em> ${chosen.tease}<br/>
      <a href="${chosen.link}" target="_blank" style="color:#a33a57; text-decoration: underline;">
        View on Goodreads</a>
    `;

    document.getElementById('readorride-container').style.display = 'block';
    document.getElementById('favoriteBtn').style.display = 'inline-block';

    const slider = document.getElementById('readorride');
    slider.value = 5;
    updateReadOrRideText(5);
    slider.oninput = function () {
      updateReadOrRideText(this.value);
    };

  } catch (err) {
    console.error("Something broke, kitten:", err);
    document.getElementById('output').textContent = 
      "Oops. Daddy broke something. Try again or refresh.";
}

function updateReadOrRideText(value) {
  const text = document.getElementById('readorride-text');
  let msg = "";

  if(value <= 2) msg = "📖 Slow and steady. Just reading with a cozy blanket.";
  else if(value <= 4) msg = "😊 Nice warm glow. You’re feeling the heat but staying composed.";
  else if(value <= 6) msg = "🔥 Things are heating up. You might need to fan yourself soon.";
  else if(value <= 8) msg = "😏 Oh, you naughty thing. Definitely riding that wave.";
  else msg = "🍆 Absolutely wrecked. Humping the pages like a desperate brat.";

  text.textContent = msg;
}

function addToFavorites() {
  if (!currentBook) return;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some(fav => fav.title === currentBook.title)) {
    favorites.push(currentBook);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }
}

function renderFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const list = document.getElementById("favoritesList");
  list.innerHTML = favorites.map(book => `
    <div class="favorite-item">
      <strong>${book.title}</strong> by <em>${book.author}</em><br/>
      <em>Spice Level:</em> ${book.spice}<br/>
      <em>Genres & Tropes:</em> ${book.genre}, ${book.tropes.join(', ')}<br/>
      <em>Tease:</em> ${book.tease}
    </div>
  `).join('');
}

window.onload = renderFavorites;

