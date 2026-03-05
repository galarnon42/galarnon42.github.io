/* ============================================================
   data.js — Edit this file to update publications and coauthors
   ============================================================ */

/* ----------------------------------------------------------
   COAUTHORS
   Add or edit coauthors here. The key is what you use in the
   publications list below (under "authors").
   ---------------------------------------------------------- */
const COAUTHORS = {
  "Jesko Dujmovic":    "https://derjesko.github.io/",
  "Eylon Yogev":       "https://eylonyogev.com/",
  "Yuval Ishai":       "https://yuvali.cswp.cs.technion.ac.il/",
  "Shany Ben-David":   "https://shanybendavid.github.io/",
  "Alessandro Chiesa": "http://people.eecs.berkeley.edu/~alexch/",
  "Giacomo Fenzi":     "https://gfenzi.io/",
  "Amey Bhangale":     "https://sites.google.com/view/amey-bhangale/home",
  "Tomer Grossman":    "https://dblp.org/pid/248/7301.html",
  "Guy N. Rothblum":   "https://guyrothblum.wordpress.com/",
  "Moni Naor":         "http://www.wisdom.weizmann.ac.il/~naor/",
};

/* ----------------------------------------------------------
   PUBLICATIONS
   Listed from newest to oldest (the page will number them
   in reverse automatically).

   Each entry:
     title:    string
     url:      string (link to paper)
     authors:  array of strings — use "Gal Arnon" for yourself,
               or any key from COAUTHORS above
     venue:    string (shown in monospace after authors)
     featured: true/false — gold highlight row (best paper etc.)
     badge:    string or null — short text shown as inline badge
               next to venue (e.g. "Best Paper")
     links:    array of { label, url, video: true/false }
               video:true adds the ▶ prefix and blue border
   ---------------------------------------------------------- */
const PUBLICATIONS = [
  {
    title:    "Interactive Proofs for Batch Polynomial Evaluation",
    url:      "https://eprint.iacr.org/2026/448",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Giacomo Fenzi", "Eylon Yogev"],
    venue:    "Manuscript",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "Pairing-Based SNARGs with Two Group Elements",
    url:      "https://eprint.iacr.org/2025/2160",
    authors:  ["Gal Arnon", "Jesko Dujmovic", "Eylon Yogev"],
    venue:    "Manuscript",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "Designated-Verifier SNARGs with One Group Element",
    url:      "https://eprint.iacr.org/2025/517",
    authors:  ["Gal Arnon", "Jesko Dujmovic", "Yuval Ishai"],
    venue:    "CRYPTO 2025",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "Towards a White-Box Secure Fiat-Shamir Transformation",
    url:      "https://eprint.iacr.org/2025/329",
    authors:  ["Gal Arnon", "Eylon Yogev"],
    venue:    "CRYPTO 2025 · ZKProof 7",
    featured: false,
    badge:    null,
    links:    [
      { label: "Quanta Magazine", url: "https://www.quantamagazine.org/computer-scientists-figure-out-how-to-prove-lies-20250709/", video: false },
    ],
  },
  {
    title:    "Instance Compression, Revisited",
    url:      "https://eprint.iacr.org/2024/1659",
    authors:  ["Gal Arnon", "Shany Ben-David", "Eylon Yogev"],
    venue:    "EUROCRYPT 2025",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "WHIR: Reed-Solomon Proximity Testing with Super-Fast Verification",
    url:      "https://eprint.iacr.org/2024/1586",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Giacomo Fenzi", "Eylon Yogev"],
    venue:    "EUROCRYPT 2025 · ZKSummit 12 · ZKProof 7",
    featured: false,
    badge:    null,
    links:    [
      { label: "ZKSummit 12", url: "#", video: true },
      { label: "Blog post",   url: "https://gfenzi.io/papers/whir/", video: false },
    ],
  },
  {
    title:    "Hamming Weight Proofs of Proximity with One-Sided Error",
    url:      "https://eprint.iacr.org/2024/832",
    authors:  ["Gal Arnon", "Shany Ben-David", "Eylon Yogev"],
    venue:    "TCC 2024",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "STIR: Reed-Solomon Proximity Testing with Fewer Queries",
    url:      "https://eprint.iacr.org/2024/390",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Giacomo Fenzi", "Eylon Yogev"],
    venue:      "CRYPTO 2024",
    venueSuffix: " · ZKSummit 11 · ZKProof 6",
    featured: false,
    badge:    "Best Paper",
    links:    [
      { label: "CRYPTO 2024", url: "https://www.youtube.com/watch?v=example-stir",    video: true },
      { label: "ZKSummit 11", url: "https://www.youtube.com/watch?v=example-stir-zk", video: true },
      { label: "Blog post",   url: "https://gfenzi.io/papers/stir/",                  video: false },
    ],
  },
  {
    title:    "IOPs with Inverse Polynomial Soundness Error",
    url:      "https://eprint.iacr.org/2023/1062",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Eylon Yogev"],
    venue:    "FOCS 2023 · ITC 2024 Highlights",
    featured: false,
    badge:    null,
    links:    [
      { label: "FOCS 2023", url: "https://youtu.be/5zaVVj6TVdw", video: true },
      {label: "zk Study Club", url: "https://youtu.be/cKOPy4yPZyQ?si=YEWeoG7LS5b8amN-", video: true},
    ],
  },
  {
    title:    "A Toolbox for Barriers on Interactive Oracle Proofs",
    url:      "https://eprint.iacr.org/2022/790",
    authors:  ["Gal Arnon", "Amey Bhangale", "Alessandro Chiesa", "Eylon Yogev"],
    venue:    "TCC 2022",
    featured: false,
    badge:    null,
    links:    [
      { label: "TCC 2022", url: "https://youtu.be/Fyupfke1ypo?t=955", video: true },
    ],
  },
  {
    title:    "Hardness of Approximation for Stochastic Problems via Interactive Oracle Proofs",
    url:      "https://eprint.iacr.org/2022/168",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Eylon Yogev"],
    venue:    "CCC 2022",
    featured: false,
    badge:    null,
    links:    [
      { label: "CCC 2022", url: "https://youtu.be/Tf1Yizaovfk", video: true },
    ],
  },
  {
    title:    "A PCP Theorem for Interactive Proofs and Applications",
    url:      "https://eprint.iacr.org/2021/915",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Eylon Yogev"],
    venue:    "EUROCRYPT 2022",
    featured: false,
    badge:    null,
    links:    [
      { label: "EUROCRYPT 2022", url: "https://www.youtube.com/watch?v=G_9jHgO8kuI&ab_channel=TheIACR", video: true },
    ],
  },
  {
    title:    "Min-Entropic Optimality",
    url:      "https://eccc.weizmann.ac.il/report/2021/152/",
    authors:  ["Gal Arnon", "Tomer Grossman"],
    venue:    "Manuscript",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "On Prover-Efficient Public-Coin Emulation of Interactive Proofs",
    url:      "https://eccc.weizmann.ac.il/report/2019/176/",
    authors:  ["Gal Arnon", "Guy N. Rothblum"],
    venue:    "ITC 2021",
    featured: false,
    badge:    null,
    links:    [
      { label: "ITC 2021", url: "https://www.youtube.com/watch?v=amkSBF8VVDI", video: true },
    ],
  },
];
