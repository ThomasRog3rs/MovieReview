---
layout: layouts/base.njk
title: About
permalink: /about/
---

<article class="about-page">
  <h1>About This Blog</h1>
  <p>
    Welcome! This is my personal movie review blog where I share my thoughts
    on the films I watch. Reviews are my own opinions and cover everything
    from blockbusters to indie gems.
  </p>
  <p>
    New reviews are posted after every watch. Feel free to browse by
    <a href="{{ '/' | url }}">all reviews</a>.
  </p>

  <section class="letterboxd-cta" aria-label="Follow on Letterboxd">
    <p class="letterboxd-cta-text">
      Want quicker reactions and watchlist updates? Follow along on Letterboxd.
    </p>
    <a
      href="https://letterboxd.com/Tweg5/"
      class="letterboxd-link letterboxd-link-cta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Tweg5 on Letterboxd"
    >
      <span class="letterboxd-icon" aria-hidden="true">
        <svg viewBox="0 0 64 24" role="img" focusable="false">
          <circle cx="12" cy="12" r="8" fill="#40bc67"></circle>
          <circle cx="24" cy="12" r="8" fill="#ff8000"></circle>
          <circle cx="36" cy="12" r="8" fill="#00a7e1"></circle>
        </svg>
      </span>
      <span>Follow me on Letterboxd</span>
    </a>
  </section>
</article>
