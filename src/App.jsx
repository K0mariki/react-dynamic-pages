import { useState } from "react";
import "./index.css";

const cardData = [
  {
    title: "Mocha 1",
    description: "Developing a fintech product for the international market",
    date: "April 24, 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#fintech", "#international", "#market"],
    archived: false,
  },
  {
    title: "Money Forward 1",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "Money Forward 1",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-3.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "ActivePlatform 1",
    description:
      "Adobe integration and platform development for comprehensive subscriptions",
    date: "November 10, 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#integration", "#platform", "#subscription"],
    archived: false,
  },
  {
    title: "START 1",
    description: "Developed an A/B testing platform for a streaming service",
    date: "September 22, 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B testing", "#streaming", "#platform"],
    archived: false,
  },
  {
    title: "Mindbox 1",
    description: "Supporting the redesign of an automated marketing platform",
    date: "September 21, 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#marketing", "#redesign", "#automation"],
    archived: false,
  },
  {
    title: "Mocha 2",
    description: "Developing a fintech product for the international market",
    date: "April 24, 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#fintech", "#international", "#market"],
    archived: false,
  },
  {
    title: "Money Forward 2",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "Money Forward 2",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-3.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "ActivePlatform 2",
    description:
      "Adobe integration and platform development for comprehensive subscriptions",
    date: "November 10, 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#integration", "#platform", "#subscription"],
    archived: false,
  },
  {
    title: "START 2",
    description: "Developed an A/B testing platform for a streaming service",
    date: "September 22, 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B testing", "#streaming", "#platform"],
    archived: false,
  },
  {
    title: "Mindbox 2",
    description: "Supporting the redesign of an automated marketing platform",
    date: "September 21, 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#marketing", "#redesign", "#automation"],
    archived: false,
  },
  {
    title: "Mocha 3",
    description: "Developing a fintech product for the international market",
    date: "April 24, 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#fintech", "#international", "#market"],
    archived: false,
  },
  {
    title: "Money Forward 3",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "Money Forward 3",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-3.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  }
];

const tabData = [
  [cardData[0], cardData[1], cardData[2]],
  [cardData[3], cardData[4], cardData[5]],
  [cardData[6], cardData[7], cardData[8]],
  [cardData[9], cardData[10], cardData[11]],
  [cardData[12], cardData[13]],
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [numberPage, setNumberPage] = useState(0);

  function openApp() {
    setIsOpen(!isOpen);
  }

  function selectPage(digit) {
    setNumberPage(digit);
  }

  function previousPage() {
    setNumberPage(numberPage - 1);
  }

  function nextPage() {
    setNumberPage(numberPage + 1);
  }

  return (
    <>
      {!isOpen ? (
        <button onClick={openApp}>Страт</button>
      ) : (
        <>
          <div className="app">
            <span onClick={openApp} className="close">
              &times;
            </span>
            <h1>Динамическое создание страниц</h1>

            <div className="tab-buttons">
              {tabData.map((page, index) => (
                <button
                  key={index}
                  onClick={() => selectPage(index)}
                  className={`tab-button ${
                    numberPage == index ? "active" : null
                  }`}
                >
                  Страница {index + 1}
                </button>
              ))}
            </div>

            <CardContainer cards={tabData[`${numberPage}`]} />

            <div className="navigation-buttons">
              <button onClick={previousPage} disabled={!tabData[`${numberPage - 1}`]}>Предыдущая</button>
              <button onClick={nextPage} disabled={!tabData[`${numberPage + 1}`]}>Следующая</button>
            </div>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

function CardContainer({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} cardObj={card} />
      ))}
    </div>
  );
}

function Card({ cardObj }) {
  return (
    <div className="card">
      <img className="card-image" src={cardObj.imageUrl} alt={cardObj.title} />
      <div className="card-content">
        <h2 className="card-title">{cardObj.title}</h2>
        <p className="card-description">{cardObj.description}</p>
        <p className="card-date">{cardObj.date}</p>
        <div className="card-tags">
          {cardObj.tags.map((tagItem, index) => (
            <CardTag key={index} tag={tagItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardTag({ tag }) {
  return <span className="card-tag">{tag}</span>;
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Используемые технологии:</strong> React, JSX, useState,
        Conditional Rendering, CSS Modules, Event Handling.
      </p>
    </footer>
  );
}
