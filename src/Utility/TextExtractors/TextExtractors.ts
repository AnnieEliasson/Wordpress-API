// Plockar ut alla pre element ur HTMLsträng
export const extractParagraphs = (htmlString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const paragraphs = doc.querySelectorAll("#text");
  const paragraphTexts = Array.from(paragraphs).map((p) => p.textContent);

  return paragraphTexts;
};

export const extractImgSrc = (htmlString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const images = doc.querySelectorAll("img");
  const imgSrcTexts = Array.from(images).map((img) => img.src);

  return imgSrcTexts;
};
