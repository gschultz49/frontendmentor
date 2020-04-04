import { API_BASE } from "../utils";
import { isValidImage } from "../imageUtils";

export const IMAGES = "easybank/images";

export const PROJECT_NAME = "/easybank";

export const PROJECT_BASE = `${API_BASE}${PROJECT_NAME}`;

export const getWhyChooseFileName = "/get-whychoose";
export const getArticlesFileName = "/get-articles";

export const GetWhyChooseCardsEndpoint = `${PROJECT_BASE}${getWhyChooseFileName}`;
export const GetArticlesEndpoint = `${PROJECT_BASE}${getArticlesFileName}`;

export const getImage = (fileName: string) => {
  const isValid = isValidImage(fileName);
  if (isValid) {
    return `${IMAGES}/${fileName}`;
  }
};
