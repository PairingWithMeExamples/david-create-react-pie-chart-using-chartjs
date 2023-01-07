import genresClassAlpha from "../static/data/genres-class-alpha.json";
import genresClassBeta from "../static/data/genres-class-beta.json";
import { ALPHA, BETA } from "../common/Classes";

export async function listGenresByClass(className) {
  switch (className) {
    case ALPHA:
      return genresClassAlpha;
    case BETA:
      return genresClassBeta;
    default:
      throw new Error("class not found");
  }
}
