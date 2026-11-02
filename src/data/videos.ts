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
    title: "רוניוס חג'ידאקיס מנגן בוזוקי - הופעה חיה",
  },
];
