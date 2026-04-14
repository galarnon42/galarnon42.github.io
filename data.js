/* ============================================================
   data.js — Edit this file to update publications and coauthors
   ============================================================ */

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
  "Dan Boneh":         "https://crypto.stanford.edu/~dabo/",
  "Jad Silbak":        "https://sites.google.com/view/jadsilbak/home",
  "Noam Mazor":        "https://sites.google.com/view/noammazor",
  "Rafael Pass":       "https://www.cs.cornell.edu/~rafael/",
};

/* ----------------------------------------------------------
   PUBLICATIONS
   Listed from newest to oldest.

   preprint: true  → appears in "Preprints" section
   preprint: false → appears in "Publications" section
   ---------------------------------------------------------- */
const PUBLICATIONS = [
  /*{
    title:    "Complexity-Theoretic Consequences of Zero-Knowledge with Inefficient Simulation and Witness Indistinguishability",
    url:      "",
    authors:  ["Gal Arnon", "Noam Mazor", "Rafael Pass", "Jad Silbak"],
    venue:    "",
    type:     "preprint",
    featured: false,
    badge:    null,
    links:    [],
  },*/
  {
    title:    "Witness Indistinguishable Arguments of Knowledge and One-Way Functions",
    url:      "https://eprint.iacr.org/2026/682",
    authors:  ["Gal Arnon", "Noam Mazor", "Rafael Pass", "Jad Silbak"],
    venue:    "",
    type:     "preprint",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "Interactive Proofs for Batch Polynomial Evaluation",
    url:      "https://eprint.iacr.org/2026/448",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Giacomo Fenzi", "Eylon Yogev"],
    venue:    "",
    type:     "preprint",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "Pairing-Based SNARGs with Two Group Elements",
    url:      "https://eprint.iacr.org/2025/2160",
    authors:  ["Gal Arnon", "Jesko Dujmovic", "Eylon Yogev"],
    venue:    "ZKProof 8",
    type:     "preprint",
    featured: false,
    badge:    null,
    links:    [],
  },
  {
    title:    "Designated-Verifier SNARGs with One Group Element",
    url:      "https://eprint.iacr.org/2025/517",
    authors:  ["Gal Arnon", "Jesko Dujmovic", "Yuval Ishai"],
    venue:    "CRYPTO 2025",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      {label: "CRYPTO 2025", url:"https://www.youtube.com/watch?v=163heHUartE&list=PLeeS-3Ml-rppEDAlrjdfwJBBy46Lt8Q9a&index=31", video:true},
    ],
  },
  {
    title:    "Towards a White-Box Secure Fiat-Shamir Transformation",
    url:      "https://eprint.iacr.org/2025/329",
    authors:  ["Gal Arnon", "Eylon Yogev"],
    venue:    "CRYPTO 2025 · ZKProof 7",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      {label: "Simons Institute", url:"https://www.youtube.com/watch?v=6SjjOmTi6jk", video:true},
      {label: "CRYPTO 2025", url:"https://www.youtube.com/watch?v=94sCCEmL4qI&list=PLeeS-3Ml-rppEDAlrjdfwJBBy46Lt8Q9a&index=43", video:true},
      { label: "Quanta Magazine", url: "https://www.quantamagazine.org/computer-scientists-figure-out-how-to-prove-lies-20250709/", video: false },
    ],
  },
  {
    title:    "Instance Compression, Revisited",
    url:      "https://eprint.iacr.org/2024/1659",
    authors:  ["Gal Arnon", "Shany Ben-David", "Eylon Yogev"],
    venue:    "EUROCRYPT 2025",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      {label: "EUROCRYPT 2025", url:"https://youtu.be/1x910AdAe9c?si=zhSbZ8A9DCEP1W5y&t=1076", video:true},
    ],
  },
  {
    title:    "WHIR: Reed-Solomon Proximity Testing with Super-Fast Verification",
    url:      "https://eprint.iacr.org/2024/1586",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Giacomo Fenzi", "Eylon Yogev"],
    venue:    "EUROCRYPT 2025 · ZKSummit 12 · ZKProof 7",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      {label: "EUROCRYPT 2025", url:"https://youtu.be/ulzdtHbJqik?si=8DOmWXy84zuf-LOU&t=1328", video:true},
      { label: "Blog post",   url: "https://gfenzi.io/papers/whir/", video: false },
    ],
  },
  {
    title:    "Hamming Weight Proofs of Proximity with One-Sided Error",
    url:      "https://eprint.iacr.org/2024/832",
    authors:  ["Gal Arnon", "Shany Ben-David", "Eylon Yogev"],
    venue:    "TCC 2024",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [{label: "TCC 2024", url:"https://www.youtube.com/watch?v=Fk_V58uJLIA&list=PLeeS-3Ml-rprVlYByPBbSfZvgHMOlLywK&index=6", video:true},],
  },
  {
    title:    "STIR: Reed-Solomon Proximity Testing with Fewer Queries",
    url:      "https://eprint.iacr.org/2024/390",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Giacomo Fenzi", "Eylon Yogev"],
    venue:       "CRYPTO 2024",
    venueSuffix: " · ZKSummit 11 · ZKProof 6",
    type:     "pub",
    featured: false,
    badge:    "Best Paper",
    links:    [
      { label: "CRYPTO 2024", url: "https://youtu.be/pCP9gRKS7sI?si=GqNEYNyHkQNuaji5&t=1536",    video: true },
      { label: "ZKSummit 11", url: "https://www.youtube.com/watch?v=OLklJjp8KB4&ab_channel=ZeroKnowledge", video: true },
      { label: "Blog post",   url: "https://gfenzi.io/papers/stir/",                  video: false },
    ],
  },
  {
    title:    "IOPs with Inverse Polynomial Soundness Error",
    url:      "https://eprint.iacr.org/2023/1062",
    authors:  ["Gal Arnon", "Alessandro Chiesa", "Eylon Yogev"],
    venue:    "FOCS 2023 · ITC 2024 Highlights",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      { label: "FOCS 2023",     url: "https://youtu.be/5zaVVj6TVdw",                       video: true },
      { label: "zk Study Club", url: "https://youtu.be/cKOPy4yPZyQ?si=YEWeoG7LS5b8amN-",  video: true },
    ],
  },
  {
    title:    "A Toolbox for Barriers on Interactive Oracle Proofs",
    url:      "https://eprint.iacr.org/2022/790",
    authors:  ["Gal Arnon", "Amey Bhangale", "Alessandro Chiesa", "Eylon Yogev"],
    venue:    "TCC 2022",
    type:     "pub",
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
    type:     "pub",
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
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      { label: "EUROCRYPT 2022", url: "https://www.youtube.com/watch?v=G_9jHgO8kuI&ab_channel=TheIACR", video: true },
    ],
  },
  /*{
    title:    "Min-Entropic Optimality",
    url:      "https://eccc.weizmann.ac.il/report/2021/152/",
    authors:  ["Gal Arnon", "Tomer Grossman"],
    venue:    "Manuscript",
    preprint: true,
    featured: false,
    badge:    null,
    links:    [],
  },*/
  {
    title:    "On Prover-Efficient Public-Coin Emulation of Interactive Proofs",
    url:      "https://eccc.weizmann.ac.il/report/2019/176/",
    authors:  ["Gal Arnon", "Guy N. Rothblum"],
    venue:    "ITC 2021",
    type:     "pub",
    featured: false,
    badge:    null,
    links:    [
      { label: "ITC 2021", url: "https://www.youtube.com/watch?v=amkSBF8VVDI", video: true },
    ],
  },
];
