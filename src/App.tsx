import { useState } from "react";
import { ArticleParamsForm } from "./components/article-params-form";
import { OptionType, defaultArticleState } from "./constants/acrticleVar";
import { Article } from "./components/article";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";


export interface IAllOptions {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [pageState, setPageState] = useState<IAllOptions>(defaultArticleState);
  function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}
  return (
    <>
      <div>
        <ArticleParamsForm
				toggleOpenFn={toggleOpen}
				openState={isOpen}
				setPageState={setPageState}
			 />
        <Article />
      </div>
    </>
  );
}

export default App;
