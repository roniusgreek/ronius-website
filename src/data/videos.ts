export type PerformanceVideo = {
  id: string;
  src: string;
  poster: string;
  title: string;
};

// מערך מונחה-נתונים: הוספת סרטון נוספת היא שורה אחת כאן, בלי לגעת ברכיבים.
export const videos: PerformanceVideo[] = [
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
