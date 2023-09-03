// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Proyecto 1",
      description:
        "Diseñamos tu presencia en internet con apariencia profesional",
      src: "/images/project-1.jpg",
      url: "https://ed.team",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description:
        "Diseñamos tu presencia en internet con apariencia profesional",
      src: "/images/project-2.jpg",
      url: "https://ed.team",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description:
        "Diseñamos tu presencia en internet con apariencia profesional",
      src: "/images/project-3.jpg",
      url: "https://ed.team",
    },
    {
      id: 4,
      title: "Proyecto 4",
      description:
        "Diseñamos tu presencia en internet con apariencia profesional",
      src: "/images/project-4.jpg",
      url: "https://ed.team",
    },
    {
      id: 5,
      title: "Proyecto 5",
      description:
        "Diseñamos tu presencia en internet con apariencia profesional",
      src: "/images/project-5.jpg",
      url: "https://ed.team",
    },
  ]);
}
