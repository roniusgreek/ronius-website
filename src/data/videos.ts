export type PerformanceVideo = {
  id: string;
  src: string;
  poster: string;
  title: string;
};

// מערך מונחה-נתונים: הוספת סרטון נוספת היא שורה אחת כאן, בלי לגעת ברכיבים.
// סדר המערך = סדר התצוגה (גם בעמוד סרטוני ההופעות וגם בתצוגה המקוצרת בדף הבית), לכן הסרטונים החדשים בראש הרשימה.
export const videos: PerformanceVideo[] = [
  {
    id: "performance-07",
    src: "/videos/performance-07.mp4",
    poster: "/videos/performance-07-poster.jpg",
    title: "רוניוס בהופעה חיה באירוע",
  },
  {
    id: "performance-08",
    src: "/videos/performance-08.mp4",
    poster: "/videos/performance-08-poster.jpg",
    title: "רוניוס מנגן בוזוקי מקרוב",
  },
  {
    id: "performance-09",
    src: "/videos/performance-09.mp4",
    poster: "/videos/performance-09-poster.jpg",
    title: "רוניוס שר ומנגן בחגיגה",
  },
  {
    id: "performance-10",
    src: "/videos/performance-10.mp4",
    poster: "/videos/performance-10-poster.jpg",
    title: "רגע של נגינה עם הבוזוקי",
  },
  {
    id: "performance-11",
    src: "/videos/performance-11.mp4",
    poster: "/videos/performance-11-poster.jpg",
    title: "רוניוס מופיע לקהל שמח",
  },
  {
    id: "performance-12",
    src: "/videos/performance-12.mp4",
    poster: "/videos/performance-12-poster.jpg",
    title: "שירה ונגינה יוונית חיה",
  },
  {
    id: "performance-13",
    src: "/videos/performance-13.mp4",
    poster: "/videos/performance-13-poster.jpg",
    title: "רוניוס מנגן באווירה חגיגית",
  },
  {
    id: "performance-14",
    src: "/videos/performance-14.mp4",
    poster: "/videos/performance-14-poster.jpg",
    title: "רוניוס שר בליווי בוזוקי",
  },
  {
    id: "performance-01",
    src: "/videos/performance-01.mp4",
    poster: "/videos/performance-01-poster.jpg",
    title: "רוניוס מנגן בוזוקי - רגע של חגיגה",
  },
  {
    id: "performance-02",
    src: "/videos/performance-02.mp4",
    poster: "/videos/performance-02-poster.jpg",
    title: "רוניוס שר ומנגן בוזוקי במסעדה",
  },
  {
    id: "performance-03",
    src: "/videos/performance-03.mp4",
    poster: "/videos/performance-03-poster.jpg",
    title: "רוניוס מנגן בין האורחים",
  },
  {
    id: "performance-04",
    src: "/videos/performance-04.mp4",
    poster: "/videos/performance-04-poster.jpg",
    title: "רוניוס בהופעה חיה",
  },
  {
    id: "performance-05",
    src: "/videos/performance-05.mp4",
    poster: "/videos/performance-05-poster.jpg",
    title: "רוניוס שר בשמחה עם הבוזוקי",
  },
  {
    id: "performance-06",
    src: "/videos/performance-06.mp4",
    poster: "/videos/performance-06-poster.jpg",
    title: "רוניוס מופיע באירוע",
  },
];
