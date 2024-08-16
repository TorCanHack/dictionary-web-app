import React from "react";
import playIcon from '../../assets/images/icon-play.svg';
import newWindowLogo from '../../assets/images/icon-new-window.svg'
import './DefinitionList.css'

const DefinitionList = ({ definitions, word, searchTriggered }) => {

   const playSound = (audioUrl) => {
      const audio = new Audio(audioUrl);
      audio.play();
   };

   const renderDefinitions = (partOfSpeech) => {
      return definitions
         .flatMap((def) => def.meanings)
         .filter((meaning) => meaning.partOfSpeech === partOfSpeech)
         .map((meaning, index) => (
            <article key={index} className="px-4">
                
               
               {meaning.definitions.map((definition, idx) => (
                    <li className="list-disc my-4 custom-disc md:text-lg" key={idx}>
                        {definition.definition}
                        {definition.example && (<p className="my-4 font-extralight text-gray-500">"{definition.example}"</p>)}
                        
                    </li>
                    
               ))}
              
               {meaning.synonyms.length > 0 && (
                  <p className="md:text-lg">Synonyms: <span className="text-purple-600 cursor-pointer md:text-lg">{meaning.synonyms.join(', ')}</span></p>
               )}
            </article>
         ));
   };

   const hasDefinitions = (partOfSpeech) => {
      return definitions
         .flatMap((def) => def.meanings)
         .some((meaning) => meaning.partOfSpeech === partOfSpeech);
   };

   const openSourceButton = () => {
    window.open(definitions[0].sourceUrls, '_blank')
   }

   return (
      <section className="md:mt-12">
         {definitions.length > 0 && (
            <article className="flex flex-row justify-between my-4">
                
                <div>
                    <h2 className="text-32 md:text-6xl md:mb-2 font-bold">{definitions[0].word}</h2>
                    <p className="text-lg md:text-2xl text-purple-600">{definitions[0].phonetic}</p>

                </div>
                <div>

                    {definitions[0].phonetics && definitions[0].phonetics[0] && (
                        <button className="h-12 w-12 md:h-75 md:w-75" onClick={() => playSound(definitions[0].phonetics[0].audio)}>
                            <img src={playIcon} alt="Play pronunciation" />
                        </button>
                    )}

                </div>
               
            </article>
         )}
         { definitions.length > 0 && definitions[0].word && searchTriggered ? (
            <article>
               {hasDefinitions('noun') && (
                  <article className="my-4">
                     <h3 className="inline-block mr-3 text-lg md:text-2xl font-bold md:my-10">noun</h3><div className="inline-block border-b border-gray-300 w-64 md:w-4.5/6"></div>
                     <p className="my-4 text-gray-500 md:text-xl">Meaning</p>
                     <ul className="my-4">{renderDefinitions('noun')}</ul>
                  </article>
               )}

               {hasDefinitions('verb') && (
                  <article className="my-4">
                     <h3 className="inline-block mr-3 text-lg md:text-2xl font-bold md:my-10">verb</h3><div className="inline-block border-b border-gray-300 w-64 md:w-4.5/6"></div>
                     <p className="my-4 text-gray-500 md:text-xl">Meaning</p>
                     <ul>{renderDefinitions('verb')}</ul>
                  </article>
               )}

               {hasDefinitions('adjective') && (
                  <article className="my-4">
                     <h3 className="inline-block mr-3 text-lg md:text-2xl font-bold md:my-10">adjective</h3><div className="inline-block border-b border-gray-300 w-64 md:w-4.5/6 "></div>
                     <p className="my-4 text-gray-500 md:text-xl">Meaning</p>
                     <ul>{renderDefinitions('adjective')}</ul>
                  </article>
               )}
               <div className="border-t border-gray-300 md:mt-8">
                <p className="underline md:inline-block md:mr-4 md:mt-6">source</p>
               <a className="inline-block text-sm md:mr-4" href={definitions[0].sourceUrls}>{definitions[0].sourceUrls}</a> <button onClick={openSourceButton}><img className="inline-block" src={newWindowLogo} alt="new window" /></button>

               </div>
               
            </article>
         ) : word.length > 0 && searchTriggered ? (
            <article className="text-center mt-12">
                <p className="text-5xl my-4">😕</p>
                <p className="font-bold">No Definition Found</p>
                <p className="text-gray-500 dark:text-customGray2 my-4">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
                
            </article>
            
         )
         : (<p></p>) }
      </section>
   );
};

export default DefinitionList;
