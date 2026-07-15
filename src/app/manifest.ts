import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
     return {
          name: "Utpal Sonowal Portfolio",
          short_name: "Utpal",

          description: "Portfolio of Utpal Sonowal, Full Stack Developer.",

          start_url: "/",

          display: "standalone",

          background_color: "#ffffff",

          theme_color: "#000000",

          icons: [
               {
                    src: "/favicon.ico",
                    sizes: "any",
                    type: "image/x-icon",
               },
          ],
     };
}
