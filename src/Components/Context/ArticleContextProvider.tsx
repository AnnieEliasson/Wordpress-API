import React, { createContext, useState, useContext } from "react";
import { Article } from "../../Types/Types";

type Props = {
  children: React.ReactNode;
};

type ArticleContextType = {
  article: Article;
  setArticle: (newArticle: Article) => void;
};

const initialArticle: Article = {
  title: "",
  entry: "",
  breadth: "",
  imageURL: "",
  file: null,
};

export const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined
);

const ArticleContextProvider = ({ children }: Props) => {
  const [article, setArticle] = useState<Article>(initialArticle);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error(
      "useArticleContext måste användas inom en ArticleContextProvider"
    );
  }
  return context;
};

export default ArticleContextProvider;
