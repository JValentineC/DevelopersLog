// Load dev logs from devLog.json
fetch("devLog.json")
  .then((response) => response.json())
  .then((data) => {
    // Set main title from JSON
    document.getElementById("main-title").textContent =
      data.mainContent.mainTitle || "Dev Logs";

    const logsContainer = document.getElementById("dev-logs");
    logsContainer.innerHTML = "";

    data.mainContent.logEntries.forEach((entry) => {
      const article = document.createElement("article");

      const title = document.createElement("h3");
      title.textContent = entry.entryTitle;
      article.appendChild(title);

      const meta = document.createElement("small");
      meta.textContent = `#${entry.entryNumber} | ${entry.date} | ${entry.author}`;
      article.appendChild(meta);

      entry.content.forEach((paragraph) => {
        // Check if this is an image element
        if (paragraph.startsWith("<img")) {
          const div = document.createElement("div");
          div.className = "article-image";
          div.innerHTML = paragraph;
          article.appendChild(div);
        } else {
          const p = document.createElement("p");
          p.innerHTML = paragraph; // Use innerHTML to allow HTML markup
          article.appendChild(p);
        }
      });

      logsContainer.appendChild(article);
    });
  })
  .catch((error) => {
    document.getElementById("dev-logs").innerHTML =
      "<p>Could not load dev logs.</p>";
    console.error("Error loading devLog.json:", error);
  });
