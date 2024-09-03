import "./Images.css"


function Images() {
  return (
    <div>
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className="w-9"
          viewBox="0 0 969 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="161.191"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            strokeWidth="20"
          />
          <circle
            cx="806.809"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            strokeWidth="20"
          />
          <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor" />
          <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor" />
          <path
            d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
            fill="currentColor"
          />
          <rect
            x="310.42"
            y="448.31"
            width="343.468"
            height="51.4986"
            fill="#FF1E1E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <nav></nav>
      <main>
        {Array.from({ length: 10 }).map((_, index) => (
          <article style={{ "--index": index }} key={index}>
            <div className="article__img">
              <img
                src={`https://picsum.photos/1920/1080?random=${index + 1}`}
                alt=""
              />
            </div>
            <div className="article__info">
              <h2>{getArticleTitle(index)}</h2>
              <p>{getArticleDescription(index)}</p>
              <a href="#">{getArticleLinkText(index)}</a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

const getArticleTitle = (index) => {
  const titles = [
    "CSS Scroll Animations",
    "Animate on scroll",
    "Parallax Effects",
    "Drive Keyframes",
    "Extra Slides",
    "Resize Window",
    "Browser support",
    "Your idea",
    "Fork",
    "Heart",
  ];
  return titles[index];
};

const getArticleDescription = (index) => {
  const descriptions = [
    "Check out this rad demo",
    "Works with media queries too",
    "Tweak your timings",
    "CSS alone and...",
    "More content because...",
    "Try resizing the window",
    "You'll need to be in Chrome",
    "What would you make?",
    "Fork this and make it your own!",
    "If you like this, heart it (3x)",
  ];
  return descriptions[index];
};

const getArticleLinkText = (index) => {
  const linkTexts = [
    "Follow",
    "Check it out",
    "Get Styling",
    "No JavaScript",
    "CSS to the moon",
    "Resize",
    "Do it",
    "Code",
    "Duplicate",
    "Like",
  ];
  return linkTexts[index];
};
export default Images