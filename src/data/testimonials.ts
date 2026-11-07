export type ScreenshotTestimonial = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

// צילומי מסך אמיתיים של הודעות מלקוחות (וואטסאפ), מצולמים ישירות מהטלפון של רוניוס.
// בשני צילומים (09, 10) נחתך מספר הטלפון והתמונה האישית של הלקוח/ה מטעמי פרטיות.
export const screenshotTestimonials: ScreenshotTestimonial[] = [
  {
    id: "01",
    src: "/images/testimonials/testimonial-01.webp",
    width: 620,
    height: 415,
    alt: "לקוח כותב לרוניוס תודה על ערב מושלם, שילוב מדויק של נגינה ו-DJ ואנרגיה שמילאה את הרחבה",
  },
  {
    id: "02",
    src: "/images/testimonials/testimonial-02.webp",
    width: 740,
    height: 960,
    alt: "תמונה מהופעה של רוניוס ולהקתו מנגנים בוזוקי, לצד הודעת תודה מלקוח על המקצועיות והאהבה שהעניקו למשפחה",
  },
  {
    id: "03",
    src: "/images/testimonials/testimonial-03.webp",
    width: 540,
    height: 258,
    alt: "לקוחה כותבת שרואים את האהבה של רוניוס למוזיקה, ומבקשת להמשיך ולהזמין אותו לאירועים נוספים",
  },
  {
    id: "04",
    src: "/images/testimonials/testimonial-04.webp",
    width: 625,
    height: 255,
    alt: "לקוחה כותבת שההופעה הייתה מהממת וכיפית, ושרוניוס הפך לזמר הקבוע של המשפחה",
  },
  {
    id: "05",
    src: "/images/testimonials/testimonial-05.webp",
    width: 620,
    height: 180,
    alt: "לקוחה מספרת שאפילו בעל האולם ציין שהאירוע היה מיוחד בעיקר בזכות ההופעה",
  },
  {
    id: "06",
    src: "/images/testimonials/testimonial-06.webp",
    width: 535,
    height: 170,
    alt: "לקוחה מודה שהאורחים נהנו מאוד מההופעה ומאחלת לרוניוס הצלחה",
  },
  {
    id: "07",
    src: "/images/testimonials/testimonial-07.webp",
    width: 615,
    height: 113,
    alt: "לקוחה מודה לרוניוס על ההמלצה וכותבת שתמשיך להמליץ עליו גם בעתיד",
  },
  {
    id: "08",
    src: "/images/testimonials/testimonial-08.webp",
    width: 510,
    height: 235,
    alt: "לקוח כותב שרוניוס הפך את האירוע למושלם ושמח יותר, והשתלב בו בצורה מדויקת",
  },
  {
    id: "09",
    src: "/images/testimonials/testimonial-09.webp",
    width: 615,
    height: 455,
    alt: "לקוחה מודה לצוות הבוזוקי של רוניוס על ליווי מדהים לאורך כל החתונה",
  },
  {
    id: "10",
    src: "/images/testimonials/testimonial-10.webp",
    width: 615,
    height: 280,
    alt: "לקוחה כותבת שכל האורחים מפרגנים ומבקשים את הפרטים של רוניוס אחרי הופעה מדויקת ומקצועית",
  },
  {
    id: "11",
    src: "/images/testimonials/testimonial-11.webp",
    width: 620,
    height: 330,
    alt: "לקוח מתנצל על העיכוב בפנייה וכותב תודה ענקית על ערב מושלם שהרגיש כמו ביוון ממש",
  },
];
