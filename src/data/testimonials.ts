export type ScreenshotTestimonial = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

// צילומי מסך אמיתיים של הודעות מלקוחות (וואטסאפ), חתוכים ואושרו ע"י נויה.
// בששת הצילומים הראשונים טושטשה כותרת השיחה (שם איש הקשר + תמונת הפרופיל),
// ובטשטוש-08 גם מספר הטלפון שהופיע בגוף ההודעה - מטעמי פרטיות.
export const screenshotTestimonials: ScreenshotTestimonial[] = [
  {
    id: "01",
    src: "/images/testimonials/testimonial-01.webp",
    width: 738,
    height: 824,
    alt: "לקוחה כותבת תודה ענקית על ערב פשוט מושלם, שילוב מדויק של נגינה ו-DJ ואנרגיה שמילאה את הרחבה",
  },
  {
    id: "02",
    src: "/images/testimonials/testimonial-02.webp",
    width: 934,
    height: 1636,
    alt: "תמונה מהופעה של רוניוס ולהקתו מנגנים בוזוקי, לצד הודעת תודה על המקצועיות והאהבה שהוענקה למשפחה",
  },
  {
    id: "03",
    src: "/images/testimonials/testimonial-03.webp",
    width: 730,
    height: 289,
    alt: "לקוחה כותבת שרואים את האהבה של רוניוס למוזיקה, ומבקשת להמשיך ולהזמין אותו לאירועים נוספים",
  },
  {
    id: "04",
    src: "/images/testimonials/testimonial-04.webp",
    width: 738,
    height: 1153,
    alt: "לקוחה משתפת תמונה מההופעה וכותבת שההופעה הייתה מהממת וכיפית, ושרוניוס הפך לזמר הקבוע של המשפחה",
  },
  {
    id: "05",
    src: "/images/testimonials/testimonial-05.webp",
    width: 718,
    height: 421,
    alt: "לקוחה מודה שהאורחים נהנו מאוד מההופעה ומאחלת לרוניוס הצלחה",
  },
  {
    id: "06",
    src: "/images/testimonials/testimonial-06.webp",
    width: 733,
    height: 495,
    alt: "לקוחה מודה לרוניוס על ההמלצה וכותבת שתמשיך להמליץ עליו גם בעתיד",
  },
  {
    id: "07",
    src: "/images/testimonials/testimonial-07.webp",
    width: 726,
    height: 1073,
    alt: "לקוחה משתפת סרטון מהאירוע וכותבת תודה על כך שההופעה הפכה את הערב לשמח יותר ומושלם",
  },
  {
    id: "08",
    src: "/images/testimonials/testimonial-08.webp",
    width: 712,
    height: 529,
    alt: "לקוחה כותבת שכל האורחים מפרגנים ומבקשים את הפרטים של רוניוס אחרי הופעה מדויקת ומקצועית",
  },
  {
    id: "09",
    src: "/images/testimonials/testimonial-09.webp",
    width: 716,
    height: 862,
    alt: "לקוח מתנצל על העיכוב בפנייה וכותב תודה ענקית על ערב מושלם שהרגיש כמו ביוון ממש",
  },
];
